import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        green200: "hsl(148, 38%, 91%)",
        green600: "hsl(169, 82%, 27%)",
        redError: "#FF2949",
        focusInput: "hsl(171, 83%,44%)",
        hoverBtn: "#063F36",
        // Neutral
        grey500: "hsl(186, 15%, 59%)",
        grey900: "hsl(187, 24%, 22%)",
      },
    },
  },
  plugins: [],
};
export default config;
