import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            dropShadow: {
                dark: [
                    '0 1px 2px rgb(0 0 0 / 0.40)',
                    '0 1px 1px rgb(0 0 0 / 0.06)',
                ],
            },
        },
        fontFamily: {
            sans: ['var(--font-poppins)'],
            serif: ['var(--font-alex-brush)'],
            cursive: ['var(--font-de-haviland)'],
        },
    },
    plugins: [],
};

export default config;
