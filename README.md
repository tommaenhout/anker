# 🔏 Blockchain Document Notarization MVP

This is a minimal proof-of-concept app that lets you **upload any file**, generate a **SHA-256 hash**, and anchor that hash immutably on the **Polygon Amoy testnet** via a blockchain transaction.

---

## ✨ Features

- Upload any file (PDF, image, etc.)
- Client-side SHA-256 hashing
- Submit the hash to the blockchain via the `data` field of a transaction
- View the notarization on [Polygonscan Amoy](https://amoy.polygonscan.com)
- Built with **Next.js App Router**, **TypeScript**, and **ethers.js**
- Uses **Alchemy RPC** for Polygon Amoy network access

---

## 🚀 How it works

1. User uploads a document
2. The app calculates its SHA-256 hash in the browser
3. The hash is sent to the backend API route
4. The backend signs and sends a transaction with the hash as `data`
5. The transaction becomes a permanent, verifiable proof of the document’s existence

---

## 🧱 Project Vision (Ambition)

This MVP is the **first building block** in a larger vision:

- ✅ **Verifiable multi-party signing** on-chain
- ✅ A `/verify` endpoint where users can upload a file and check if it was notarized
- ✅ **Account Abstraction (AA)** to allow document signing without requiring MetaMask
  - Social login (email/passkey)
  - Gas sponsorship
  - Programmable smart accounts per user
- ✅ Integration with e-signature APIs (e.g., DocuSign or SignRequest)
- ✅ Optional NFT/certification layer for IP protection
- ✅ Monetization via freemium SaaS or notarization API

---
