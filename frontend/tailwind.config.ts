import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'smite-gray': '#222c35',
        'smite-dark-gold': '#393320',
        'smite-gold': '#f9c85a',
        'smite-light-gold': '#f8df9d',
        'smite-yellow': '#efbe2e',
        'smite-text-white': '#d0e5f8',
        'smite-text-blue': '#1473bc',
        'smite-dark-blue': '#02050a',
        'smite-blue': '#061220',
        'smite-light-blue': '#081a32',
        'smite-accent-blue-1': '#00103f',
        'smite-accent-blue-2': '#003a72',
      },
    },
  },
  plugins: [],
} satisfies Config;

// module.exports = {
//   theme: {
//     colors: {
//       'smite-dark-blue': '#122c4c',
//       'smite-blue': '#093660',
//       'smite-light-blue': '#2c7b95',
//       'smite-blue-text': '#2c7b95',
//       'smite-gold': '#fce2a6',
//       'smite-gold-text': '#ffd724',
//     }
//   }
// }
