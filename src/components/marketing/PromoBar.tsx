export default function PromoBar(){
  return (
    <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white text-center text-[12px] font-bold tracking-wide py-2 px-4">
      🔥 12% OFF Solar + Free Installation Survey (KES 15,000 value) • 0% Financing 12 Months • Price-Beat Guarantee • <a href="/quote" className="underline decoration-white/60 hover:text-white">CLAIM OFFER →</a>
      <span className="ml-3 hidden lg:inline-flex items-center gap-1 bg-white text-red-600 rounded-full px-2.5 py-0.5 text-[10px]">LIMITED SLOTS THIS WEEK</span>
    </div>
  )
}
