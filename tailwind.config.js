/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./content/**/*.mdx",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ["var(--font-kaisei)"],
                universBold: ["var(--font-univers-bold)"],
                sans: ["var(--font-univers-light)"],
                publicSans: ["var(--font-public-sans)"],
                apercuMonoPro: ["var(--font-apercu-mono-pro)"],
            },
            typography: {
                quoteless: {
                    css: {
                        "blockquote p:first-of-type::before": {
                            content: "none",
                        },
                        "blockquote p:first-of-type::after": {
                            content: "none",
                        },
                    },
                },
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require("@tailwindcss/typography")],
};
