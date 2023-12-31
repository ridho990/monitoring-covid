/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html, js}"],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
			colors: {
				navy: "#454F6B",
				oldgreen: "#4B7F81",
			},
			fontSize: {
				sm: "0.8rem",
				base: "1rem",
				"sm-xl": "1.125rem",
				"sm-2xl": "1.266rem",
				"sm-3xl": "1.424rem",
				"sm-4xl": "1.602rem",
				"sm-5xl": "1.802rem",
				xl: "1.2rem",
				"2xl": "1.44rem",
				"3xl": "1.728rem",
				"4xl": "2.074rem",
				"5xl": "2.488rem",
			},
			animation: {
				"spin-10s": "spin 10s linear infinite",
				"spin-12s": "spin 12s linear infinite",
				bounce: "bounce 5s linear infinite",
				"bounce-4s": "bounce 4s linear infinite",
				"bounce-7s": "bounce 7s linear infinite",
				"bounce-9s": "bounce 9s linear infinite",
			},
			boxShadow: {
				custom: "0px 0px 44px -5px rgba(102, 102, 102, 0.10)",
			},
		},
	},
	plugins: [],
};
