import { GoogleAnalytics } from '@next/third-parties/google';
import 'animate.css/animate.min.css';
import type { Metadata } from 'next';
import { Alex_Brush, Mr_De_Haviland, Poppins, Varela_Round } from 'next/font/google';
import Script from 'next/script';
import './styles/globals.css';

const sans = Poppins({
    subsets: ['latin'],
    weight: ['400', '600'],
    variable: '--font-sans',
});

const serif = Alex_Brush({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-serif',
});

const cursive = Mr_De_Haviland({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-cursive',
});

const numbers = Varela_Round({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-numbers',
});

export const metadata: Metadata = {
    title: `Leia & Joel's Wedding`,
    description:
        'Join us on May 18, 2024, in Kamloops, British Columbia, as Leia and Joel embark on their beautiful journey of love and commitment. Explore the details of their special day, filled with joy, laughter, and a promise of forever. Get inspired for your own wedding or celebrate this unforgettable day with us.',

    metadataBase: new URL('https://wedding-leia-joel.vercel.app'),

    openGraph: {
        type: 'website',
        locale: 'en_CA',
        url: 'https://wedding-leia-joel.vercel.app',
        title: `Leia & Joel's Wedding`,
        description:
            'Join us on May 18, 2024, in Kamloops, British Columbia, as Leia and Joel embark on their beautiful journey of love and commitment. Explore the details of their special day, filled with joy, laughter, and a promise of forever. Get inspired for your own wedding or celebrate this unforgettable day with us.',
        siteName: `Leia & Joel's Wedding`,
        images: [
            {
                url: 'https://wedding-leia-joel.vercel.app/images/leia-joel-walking.webp',
                width: 3760,
                height: 2667,
                alt: 'Leia and Joel smiling, walking hand in hand through a field of natural grass.',
            },
        ],
    },

    icons: {
        icon: '/icons/favicon.ico',
        shortcut: '/icons/favicon.android-chrome-512x512.png',
        apple: '/icons/apple-touch-icon.png',
    },
    manifest: '/icons/site.webmanifest',

    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className={`${sans.variable} ${serif.variable} ${cursive.variable} ${numbers.variable}`}
        >
            <head>
                <Script
                    src="https://kit.fontawesome.com/659f0bc72c.js"
                    crossOrigin="anonymous"
                />
            </head>
            <body>{children}</body>
            <GoogleAnalytics gaId="G-SN6HGMWEWQ" />
        </html>
    );
}
