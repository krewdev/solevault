"use client";

import { useState } from "react";
import AgeGate from "../components/AgeGate";
import WalletButton from "../components/WalletButton";
import CreatorFeed from "../components/CreatorFeed";
import CustomRequest from "../components/CustomRequest";
import PaymentSketch from "../components/PaymentSketch";

export default function Home() {
  const [verified, setVerified] = useState(false);

  if (!verified) {
    return <AgeGate onVerify={() => setVerified(true)} />;
  }

  return (
    <main className="min-h-screen">
      <header className="border-b border-gold/20 p-6 flex justify-between items-center sticky top-0 bg-dark/90 backdrop-blur z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center font-bold text-dark text-lg">SV</div>
          <h1 className="text-2xl font-bold gold-gradient">SoleVault</h1>
        </div>
        <WalletButton />
      </header>

      <section className="text-center py-24 px-4">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 gold-gradient">Premium Feet Content Marketplace</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Instant SOL & USDC payouts. Platform fees of only 5-8%. Stronger anonymity. Built on Solana.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#creators" className="bg-gold text-dark px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition text-lg">
            Explore Creators
          </a>
          <a href="#custom" className="border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold hover:bg-gold/10 transition text-lg">
            Request Custom
          </a>
        </div>
      </section>

      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center">Why Creators Choose SoleVault</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-vault p-8 rounded-2xl border border-gold/20">
            <h4 className="text-gold text-2xl mb-3">Lower Fees</h4>
            <p className="text-gray-300">Keep 92-95% of every sale. No monthly fees for active creators.</p>
          </div>
          <div className="bg-vault p-8 rounded-2xl border border-gold/20">
            <h4 className="text-gold text-2xl mb-3">Instant Payouts</h4>
            <p className="text-gray-300">SOL or USDC to your wallet in seconds. No holds.</p>
          </div>
          <div className="bg-vault p-8 rounded-2xl border border-gold/20">
            <h4 className="text-gold text-2xl mb-3">Privacy First</h4>
            <p className="text-gray-300">Stage names + on-chain settlement. Minimal data collection.</p>
          </div>
        </div>
      </section>

      <section id="creators" className="py-20 px-4 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center">Featured Creators</h3>
        <CreatorFeed />
      </section>

      <section id="custom" className="py-20 px-4 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center">Custom Requests</h3>
        <CustomRequest />
      </section>

      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center">Solana Payment Sketch</h3>
        <PaymentSketch />
      </section>

      <footer className="border-t border-gold/20 py-12 px-4 text-center text-gray-400">
        <p className="mb-2">SoleVault is 18+ only. All content is user-generated. Creators and buyers must be verified adults.</p>
        <p className="text-sm">Powered by Solana • Instant settlements • Creator-first fees</p>
      </footer>
    </main>
  );
}
