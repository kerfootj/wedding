'use client';

import { useEffect, useState } from 'react';

const links = [
    {
        name: 'Home',
        href: '#',
    },
    {
        name: 'Our Story',
        href: '#story',
    },
    {
        name: 'When & Where',
        href: '#when-and-where',
    },
    {
        name: 'Gallery',
        href: '#gallery',
    },
    {
        name: 'RSVP',
        href: '#rsvp',
    },
];

export function Nav() {
    const [selected, setSelected] = useState('');
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });

    const textColor = () => (position < 32 ? 'text-gray-100' : 'text-neutral-900');

    return (
        <header
            className={`fixed z-50 flex w-full select-none justify-center border-b px-4 transition-colors duration-500 sm:px-6 lg:px-8 ${
                position < 32 ? 'bg-transparent' : 'bg-white'
            }`}
        >
            <div
                className={`flex h-16 w-full max-w-7xl justify-between transition-colors duration-300 ${
                    position < 32 ? 'text-gray-100' : 'text-neutral-900'
                }`}
            >
                <div className="flex flex-shrink-0 items-center">
                    <a href="#">
                        <p className="font-cursive text-4xl font-semibold tracking-wider">
                            Leia & Joel
                        </p>
                    </a>
                </div>
                <div className="hidden items-center justify-center gap-8 text-center sm:flex">
                    {links.map((link, index) => (
                        <>
                            {index > 0 && (
                                <i className="fas fa-heart fa-2xs text-lilac-300" />
                            )}
                            <a
                                key={link.name}
                                href={link.href}
                                className={`inline-flex items-center text-sm font-semibold transition-colors ${textColor()} ${
                                    selected === link.name
                                        ? 'text-lilac-300'
                                        : 'hover:text-lilac-400'
                                }`}
                                onClick={() => setSelected(link.name)}
                            >
                                {link.name}
                            </a>
                        </>
                    ))}
                </div>
            </div>
        </header>
    );
}
