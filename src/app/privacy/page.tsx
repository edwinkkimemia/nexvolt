import Link from "next/link"
export const metadata={title:"Privacy Policy — NexVolt Technologies Kenya (@nexvolttechke)", description:"Privacy policy for nexvolt.co.ke — data, M-Pesa, cookies, rights."}
export default function Privacy(){
  return (
    <div className="bg-white">
      <div className="bg-white border-b border-zinc-200"><div className="mx-auto max-w-[800px] px-6 py-8"><nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><span className="text-zinc-900 font-semibold">Privacy</span></nav><h1 className="font-display text-3xl font-black text-zinc-900">Privacy Policy</h1><p className="text-sm text-zinc-500 mt-1">Last updated: September 2026 • @nexvolttechke • Nairobi, Kenya</p></div></div>
      <div className="mx-auto max-w-[800px] px-6 py-8 prose prose-zinc max-w-none text-[15px] leading-7 text-zinc-700">
        <h2>1. Data we collect</h2><p>Contact details (name, phone, email, county), project info (KPLC bill, roof photos), device data (IP, cookies), payment via M-Pesa/Pesapal (we never store card PIN). WhatsApp @nexvolttechke chats are used for quotes.</p>
        <h2>2. Use</h2><p>To size systems, issue NVQ quotes, schedule surveys, deliver/install, warranty, and send Insights if you subscribe. No selling data.</p>
        <h2>3. Cookies</h2><p>Essential for cart, analytics (anonymous), and remembering quote. Disable in browser — shop still works as guest.</p>
        <h2>4. Your rights (Kenya DPA)</h2><p>Access, correct, delete your data via info@nexvolt.co.ke or WhatsApp @nexvolttechke. Response in 7 days.</p>
        <h2>5. Contact</h2><p>NexVolt Technologies, Nairobi — info@nexvolt.co.ke — +254 700 000 000 — @nexvolttechke on X/IG/YouTube.</p>
      </div>
    </div>
  )
}
