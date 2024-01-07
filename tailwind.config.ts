import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            animation: {
                'fade-in-down': 'fade-in-down 0.5s ease-out 0s 1 forwards',
                shuffle: 'shuffle 2s infinite both',
                'to-right-from-left': 'to-right-from-left 0.3s forwards',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                lilac: {
                    50: '#eee5ed',
                    100: '#d6bfd3',
                    200: '#bc96b7',
                    300: '#a0709a',
                    400: '#8c5685',
                    500: '#7f3d78',
                    600: '#753871',
                    700: '#663169',
                    800: '#5a2a60',
                    900: '#431f51',
                },
                glade: {
                    50: '#ecf5ee',
                    100: '#d2e6d6',
                    200: '#b7d6bd',
                    300: '#9dc7a5',
                    400: '#8abb93',
                    500: '#7aaf81',
                    600: '#70a076',
                    700: '#658e6a',
                    800: '#5d7c60',
                    900: '#4f5b50',
                },
            },
            dropShadow: {
                dark: ['0 1px 2px rgb(0 0 0 / 0.40)', '0 1px 1px rgb(0 0 0 / 0.06)'],
            },
            fontFamily: {
                sans: ['var(--font-sans)'],
                serif: ['var(--font-serif)'],
                cursive: ['var(--font-cursive)'],
                numbers: ['var(--font-numbers)'],
            },
            keyframes: {
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-32px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                shuffle: {
                    '0%': {
                        width: '0px',
                        height: '0px',
                        transform: 'translateX(-1.5em)',
                    },
                    '15%': {
                        width: '1em',
                        height: '1em',
                        transform: 'translateX(-1.5em)',
                        'z-index': '1',
                    },
                    '40%': {
                        transform: 'translateX(0)',
                        'z-index': '2',
                    },
                    '60%': {
                        width: '1em',
                        height: '1em',
                        transform: 'translateX(1.5em)',
                        'z-index': '2',
                    },
                    '75%': {
                        width: '0px',
                        height: '0px',
                        transform: 'translateX(1.5em)',
                        'z-index': '1',
                    },
                    '100%': {
                        width: '0px',
                        height: '0px',
                        transform: 'translateX(1.5em)',
                    },
                },
                'to-right-from-left': {
                    '49%': {
                        transform: 'translate(100%)',
                    },
                    '50%': {
                        opacity: '0',
                        transform: 'translate(-100%)',
                    },
                    '51%': {
                        opacity: '1',
                    },
                },
            },
            screens: {
                xs: '480px',
                ...defaultTheme.screens,
            },
        },
    },
    plugins: [require('@tailwindcss/forms'), require('tailwindcss-animation-delay')],
};

export default config;
