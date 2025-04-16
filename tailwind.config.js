/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    	colors: {
        	'gradient-start': '#f4f4fb',
      	},
    }
  },
  plugins: [],
}