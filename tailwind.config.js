module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide"),require("tailwind-scrollbar")],
}
