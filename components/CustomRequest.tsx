"use client";

import { useState } from "react";

export default function CustomRequest() {
  const [submitted, setSubmitted] = useState(false);
  const [details, setDetails] = useState("");

  if (submitted) {
    return (
      <div className="bg-vault p-8 rounded-2xl border border-gold/30 text-center">
        <p className="text-gold text-xl mb-2">Request Submitted</p>
        <p className="text-gray-300">Escrow will lock funds on Solana once the creator accepts. Instant settlement on delivery.</p>
      </div>
    );
  }

  return (
    <div className="bg-vault p-8 rounded-2xl border border-gold/20">
      <p className="text-gray-300 mb-6">Describe your custom request. Funds are escrowed on-chain until delivery and approval.</p>
      <textarea
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="E.g. Close-up soles with dark polish, soft lighting, 30s video..."
        className="w-full bg-dark border border-gold/30 rounded-xl p-4 text-white mb-4 h-32"
      />
      <button
        onClick={() => setSubmitted(true)}
        className="bg-gold text-dark px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
      >
        Submit & Escrow
      </button>
    </div>
  );
}
