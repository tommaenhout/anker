// == app/api/notarize/route.ts ==
import { NextRequest } from "next/server";
import { JsonRpcProvider, Wallet } from "ethers";

const PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY!;
const RPC_URL = process.env.MUMBAI_RPC_URL!;
const RECEIVER = process.env.RECEIVER_ADDRESS!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { hash } = body;
    const provider = new JsonRpcProvider(RPC_URL);
    const wallet = new Wallet(PRIVATE_KEY, provider);
    const tx = await wallet.sendTransaction({
      to: RECEIVER,
      value: 0,
      data: hash,
    });
    await tx.wait();

    return Response.json({ txHash: tx.hash });
  } catch (err) {
    console.error("Error sending transaction:", err);
    return new Response("Failed to send transaction", { status: 500 });
  }
}