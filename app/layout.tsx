import type { Metadata } from "next";
import "./globals.css";
import WalletProvider from "../components/WalletProvider";

export const metadata: Metadata = {
  title: "SoleVault - Premium Feet Content Marketplace",
  description: "Solana-native marketplace for high-quality feet pics and videos. Instant payouts, lower fees, strong privacy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-dark text-white">
        <WalletProvider>
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}
