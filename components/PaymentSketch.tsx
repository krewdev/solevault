"use client";

import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { Transaction, SystemProgram, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { useState } from "react";

export default function PaymentSketch() {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [status, setStatus] = useState("");

  const sendTip = async () => {
    if (!publicKey) {
      setStatus("Connect wallet first");
      return;
    }
    try {
      setStatus("Building transaction...");
      const tx = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey("SoLeVault111111111111111111111111111111111"), // placeholder
          lamports: 0.01 * LAMPORTS_PER_SOL,
        })
      );
      const sig = await sendTransaction(tx, connection);
      setStatus(`Sent! Signature: ${sig.slice(0, 8)}...`);
    } catch (e: any) {
      setStatus("Error: " + (e.message || "failed"));
    }
  };

  return (
    <div className="bg-vault p-8 rounded-2xl border border-gold/20">
      <p className="text-gray-300 mb-4">Simple SOL tip / purchase sketch using wallet-adapter. Real escrow program would use a PDA vault.</p>
      <button
        onClick={sendTip}
        className="bg-gold text-dark px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
      >
        Send 0.01 SOL Tip
      </button>
      {status && <p className="mt-4 text-gold text-sm">{status}</p>}
    </div>
  );
}
