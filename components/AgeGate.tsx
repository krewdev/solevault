"use client";

export default function AgeGate({ onVerify }: { onVerify: () => void }) {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center p-4">
      <div className="bg-vault max-w-md w-full p-10 rounded-3xl border border-gold/30 text-center shadow-2xl">
        <div className="w-20 h-20 bg-gold rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-dark text-3xl">SV</div>
        <h1 className="text-4xl font-bold mb-4 gold-gradient">SoleVault</h1>
        <p className="text-gray-300 mb-8 text-lg">Adult content. 18+ only.</p>
        <button onClick={onVerify} className="w-full bg-gold text-dark py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition">
          I am 18 or older
        </button>
      </div>
    </div>
  );
}
