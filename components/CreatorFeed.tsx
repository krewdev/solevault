export default function CreatorFeed() {
  const creators = [
    { name: "LunaSole", price: "0.05 SOL", specialty: "Pedicures & Heels", rating: "4.9", sales: "1.2k" },
    { name: "VaultVelvet", price: "0.08 SOL", specialty: "Soles & Texture", rating: "4.8", sales: "890" },
    { name: "GoldToes", price: "0.12 SOL", specialty: "Custom Requests", rating: "5.0", sales: "2.1k" },
    { name: "MidnightArch", price: "0.06 SOL", specialty: "Socks & Worn", rating: "4.7", sales: "640" },
    { name: "SoleQueen", price: "0.09 SOL", specialty: "High Arches", rating: "4.9", sales: "1.5k" },
    { name: "ArchMuse", price: "0.07 SOL", specialty: "Bare & Natural", rating: "4.8", sales: "1.1k" },
    { name: "GoldSole", price: "0.15 SOL", specialty: "Premium Sets", rating: "5.0", sales: "3.4k" },
    { name: "VelvetSteps", price: "0.04 SOL", specialty: "Casual & Soft", rating: "4.6", sales: "520" },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {creators.map((c) => (
        <div key={c.name} className="bg-vault rounded-2xl border border-gold/20 overflow-hidden hover:border-gold/60 transition cursor-pointer">
          <div className="h-48 bg-gradient-to-br from-gold/10 via-vault to-dark flex items-center justify-center text-6xl">👣</div>
          <div className="p-5">
            <h4 className="font-bold text-xl">{c.name}</h4>
            <p className="text-gold text-sm mt-1">{c.specialty}</p>
            <div className="flex justify-between items-center mt-4 text-sm">
              <span className="text-gray-400">From {c.price}</span>
              <span className="text-gold">★ {c.rating} · {c.sales}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
