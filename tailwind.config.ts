import type { Config } from "tailwindcss"
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        nexvolt: {
          black: "#0A0A0B",
          graphite: "#14151A",
          panel: "#1B1E24",
          electric: "#0EA5E9",
          cyan: "#06B6D4",
          lime: "#22C55E",
          muted: "#9CA3AF",
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Outfit", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "glow": "radial-gradient(600px circle at 50% 0%, rgba(14,165,233,0.15), transparent 80%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "flow": "flow 3s linear infinite",
      },
      keyframes: {
        flow: { "0%": { strokeDashoffset: "1000" }, "100%": { strokeDashoffset: "0" } }
      }
    },
  },
  plugins: [],
}
export default config
