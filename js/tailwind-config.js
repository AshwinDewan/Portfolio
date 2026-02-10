/**
 * Shared Tailwind CSS Configuration
 */
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#137fec",
                "background-light": "#f6f7f8",
                "background-dark": "#101922",
                "surface-dark": "#1a222b",
                "surface-border": "#283039",
                "terminal-bg": "#1e1e1e",
                "card-dark": "#1c2632",
                "card-border": "#2d3b4a",
                "border-dark": "#3b4754",
                "text-secondary": "#9dabb9",
            },
            fontFamily: {
                "display": ["Space Grotesk", "sans-serif"],
                "body": ["Noto Sans", "sans-serif"],
                "mono": ["JetBrains Mono", "Space Mono", "monospace"],
            },
            borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "full": "9999px" },
            animation: {
                'cursor-blink': 'blink 1s step-end infinite',
            },
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                }
            }
        },
    },
}
