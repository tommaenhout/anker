"use client";
import { useState } from "react";

const POLYGONSCAN_URL = "https://amoy.polygonscan.com";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [hash, setHash] = useState<string>("");
  const [txHash, setTxHash] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    console.log(f);
    if (!f) return;
    setFile(f);
    const arrayBuffer = await f.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer);
    const hashHex = Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    setHash(`0x${hashHex}`);
  };

  const notarize = async () => {
    if (!hash) return;
    setLoading(true);
    const res = await fetch("/api/notarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hash }),
    });
    const data = await res.json();
    setTxHash(data.txHash);
    setLoading(false);
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Blockchain Notarization MVP</h1>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      {hash && (
        <div className="mb-2 text-sm break-all">Hash: {hash}</div>
      )}
      <button
        disabled={loading || !hash}
        onClick={notarize}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? "Notarizing..." : "Notarize on Chain"}
      </button>
      {txHash && (
        <div className="mt-4">
          ✅ TX Hash: <a
            href={`${POLYGONSCAN_URL}/tx/${txHash}`}
            className="text-blue-700 underline"
            target="_blank"
            rel="noreferrer"
          >
            View on Polygonscan
          </a>
        </div>
      )}
    </main>
  );
}
