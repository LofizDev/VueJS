module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
	theme: {
		extend: {
			screens: {
				"2xl": "1440px",
				"3xl": "1640px",
				"4xl": "1920px",
			},
			maxWidth: {
				default: "120rem",
				container: "80rem",
			},
			boxShadow: {
				glowing: "4px 4px 40px 0px #000000",
				"glowing-green": "4px 4px 40px 0px #00B14F",
				"glowing-red": "4px 4px 40px 0px #ED4C2F",
			},
			transitionProperty: {
				opacity: "opacity",
				"w-h": "width, height",
			},
			animation: {
				"blow-up-modal": "blow-up-modal .5s cubic-bezier(.165, .840, .440, 1.000) forwards",
				"blow-up-modal-fast": "blow-up-modal .2s cubic-bezier(.165, .840, .440, 1.000) forwards",
				"de-blow-up-modal": "de-blow-up-modal .5s ease-in-out forwards",
				"de-blow-up-modal-fast": "de-blow-up-modal .2s cubic-bezier(.165, .840, .440, 1.000) forwards",
				"slide-right": "slide-right .25s cubic-bezier(.165, .840, .440, 1.000) forwards",
				dropdown: "dropdown .15s ease-in-out forwards",
				"de-dropdown": "de-dropdown .15s ease-in",
				"translate-x": "translate-x .1s ease-in-out",
				"fade-out": "fade-out .15s ease-in-out",
				"fade-in": "fade-in .15s ease-in-out",
				"rotate-45": "rotate-45 .25s ease-in-out",
				"rotate-de-45": "rotate-de-45 .25s ease-in-out",
				"close-down": "close-down .25s ease-in-out",
			},
			keyframes: {
				"close-down": {
					from: {
						width: "100%",
					},
					to: {
						width: 0,
					},
				},
				"rotate-45": {
					from: {
						width: 0,
					},
					to: {
						width: "100%",
					},
				},
				"rotate-de-45": {
					from: {
						width: 0,
					},
					to: {
						width: "100%",
					},
				},
				"fade-out": {
					"0%": {
						transform: "translate(0, -100%)",
						opacity: 0,
					},
					"100%": {
						transform: "translate(0, 0)",
						opacity: 1,
					},
				},
				"fade-in": {
					"0%": {
						transform: "translate(0, 0)",
						opacity: 1,
					},
					"100%": {
						transform: "translate(0, -100%)",
						opacity: 0,
					},
				},
				"slide-right": {
					"0%": {
						transform: "translate(20%, 0)",
						opacity: 0,
					},
					"100%": {
						transform: "translate(0, 0)",
						opacity: 1,
					},
				},
				"blow-up-modal": {
					"0%": {
						transform: "scale(0.5)",
						opacity: 0,
					},
					"100%": {
						transform: "scale(1)",
						opacity: 1,
					},
				},
				"de-blow-up-modal": {
					"0%": {
						transform: "scale(1)",
						opacity: 1,
					},
					"100%": {
						transform: "scale(0.5)",
						opacity: 0,
					},
				},
				dropdown: {
					"0%": {
						transform: "translate(0, 0)",
					},
					"50%": {
						transform: "translate(0, 60%)",
					},
					"100%": {
						transform: "translate(0, 0)",
					},
				},
				"de-dropdown": {
					"0%": {
						transform: "translate(0, 0)",
					},
					"50%": {
						transform: "translate(0, 60%)",
					},
					"100%": {
						transform: "translate(0, 0)",
					},
				},
				"translate-x": {
					"0%": {
						transform: "scaleX(1)",
					},
					"50%": {
						transform: "scaleX(2)",
					},
					"100%": {
						transform: "scaleX(1)",
					},
				},
			},
		},
	},
	plugins: [require("tw-elements/dist/plugin")],
};
