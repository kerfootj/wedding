'use client';

import { useEffect, useState } from 'react';

const links = [
    {
        name: 'When',
        href: '#when',
    },
    {
        name: 'Where',
        href: '#where',
    },
    {
        name: 'FAQ',
        href: '#faq',
    },
    {
        name: 'Our Story',
        href: '#story',
    },
    {
        name: 'RSVP',
        href: '#rsvp',
    },
];

export function Nav() {
    const [selected, setSelected] = useState('');
    const [textColor, setTextColor] = useState('text-gray-100');
    const [bgColor, setBGColor] = useState('bg-transparent');
    const [iconColor, setIconColor] = useState('bg-gray-100');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setBGColor(
                window.scrollY < 32 && !mobileMenuOpen ? 'bg-transparent' : 'bg-white'
            );
            setTextColor(
                window.scrollY < 32 && !mobileMenuOpen
                    ? 'text-gray-100'
                    : 'text-neutral-900'
            );

            setIconColor(window.scrollY < 32 ? 'bg-gray-100' : 'bg-neutral-700');
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [mobileMenuOpen]);

    return (
        <nav
            className={`fixed z-50 w-full select-none overflow-hidden transition-colors duration-500 ${bgColor}`}
        >
            <div
                className={`flex h-16 w-full max-w-7xl justify-between border-b px-6 transition-colors duration-300 lg:px-8 ${textColor}`}
            >
                <div className="flex flex-shrink-0 items-center">
                    <a href="#">
                        <p className="mr-8 font-cursive text-4xl font-semibold tracking-wider">
                            Leia & Joel
                        </p>
                    </a>
                </div>

                <div className="flex h-full items-center">
                    <button
                        className={`flex h-10 w-10 flex-col items-center justify-center overflow-hidden rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden ${textColor}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <div
                            className={`h-1 w-[30px] rounded-md transition-all duration-500 ${
                                mobileMenuOpen
                                    ? 'w-[36px] translate-y-[4px] rotate-45 bg-neutral-700'
                                    : `w-[30px] -translate-y-1 ${iconColor}`
                            }`}
                        />

                        <div
                            className={`h-1 w-[30px] rounded-md transition-all duration-500 ${
                                mobileMenuOpen
                                    ? '-translate-x-10 bg-neutral-700'
                                    : `translate-x-0 ${iconColor}`
                            }`}
                        />

                        <div
                            className={`h-1 w-[30px] rounded-md transition-all duration-500 ${
                                mobileMenuOpen
                                    ? 'w-[36px] -translate-y-[4px] -rotate-45 bg-neutral-700'
                                    : `w-[30px] translate-y-1 ${iconColor}`
                            }`}
                        />
                    </button>
                </div>

                <div className="hidden items-center justify-center gap-8 text-center md:flex">
                    {links.map((link, index) => (
                        <div key={link.name} className="flex items-center gap-8">
                            {index > 0 && (
                                <i className="fas fa-heart fa-2xs text-lilac-300" />
                            )}
                            <a
                                href={link.href}
                                className={`inline-flex items-center text-sm font-semibold transition-colors ${textColor} ${
                                    selected === link.name
                                        ? 'text-lilac-300'
                                        : 'hover:text-lilac-400'
                                }`}
                                onClick={() => setSelected(link.name)}
                            >
                                {link.name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className={`flex flex-col gap-3 bg-white transition-all duration-300 ${
                    mobileMenuOpen ? 'h-[310px] border-b-2 pt-2' : 'h-0'
                }`}
            >
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={`mx-2 inline-flex items-center rounded-md border-2 border-lilac-100 bg-white p-2 text-lg font-semibold text-lilac-500 transition-colors active:bg-white ${
                            selected === link.name
                                ? 'text-lilac-300'
                                : 'hover:text-lilac-400'
                        }`}
                        onClick={() => {
                            setMobileMenuOpen(false);
                            setSelected(link.name);
                        }}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
}
