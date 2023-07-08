module.exports = {
  mode:'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  presets: ["next/babel"],
  plugins: [
    [
      "babel-plugin-styled-components",
      { "fileName": true, "displayName": true, "pure": true, "ssr": true }
    ]
  ]
} 