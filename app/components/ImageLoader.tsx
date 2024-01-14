'use client';

import Image from 'next/image';
import { PropsWithChildren, useEffect, useState } from 'react';

export function ImageLoader(props: PropsWithChildren<{}>) {
    const { children } = props;

    // state for whether the image is loaded or not
    const [loaded, setLoaded] = useState(false);
    // state to force a minimum delay so the loader doesn't flash on and off screen
    const [delayed, setDelayed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setDelayed(true), 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loaded && delayed ? children : <Loading />}

            <Image
                className="hidden"
                src="/images/leia-joel-walking.webp"
                alt="loader"
                priority
                width={1000}
                height={1000}
                onLoad={() => {
                    setLoaded(true);
                }}
            />
        </>
    );
}

function Loading() {
    const variant = Math.floor(Math.random() * 3);

    let color1 = '#ffbe0b';
    let color2 = '#fb5607';
    let color3 = '#ff006e';
    let color4 = '#8338ec';

    if (variant === 1) {
        color1 = '#affc41';
        color2 = '#1dd3b0';
        color3 = '#086375';
        color4 = '#3c1642';
    }

    if (variant === 2) {
        color1 = '#4cc9f0';
        color2 = '#4361ee';
        color3 = '#3a0ca3';
        color4 = '#7209b7';
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center text-black">
            <div className="relative h-12 w-12">
                <div
                    className="absolute -left-1/2 -top-1/2 h-12 w-12 origin-bottom-right animate-[spin_0.8s_linear_infinite] rounded-tl-full opacity-50"
                    style={{ background: color1 }}
                />
                <div
                    className="absolute -left-1/2 -top-1/2 h-12 w-12 origin-bottom-right animate-[spin_1.6s_linear_infinite] rounded-tl-full opacity-50"
                    style={{ background: color2 }}
                />
                <div
                    className="absolute -left-1/2 -top-1/2 h-12 w-12 origin-bottom-right animate-[spin_2.4s_linear_infinite] rounded-tl-full opacity-50"
                    style={{ background: color3 }}
                />
                <div
                    className="absolute -left-1/2 -top-1/2 h-12 w-12 origin-bottom-right animate-[spin_3.2s_linear_infinite] rounded-tl-full opacity-50"
                    style={{ background: color4 }}
                />
            </div>
        </div>
    );
}
