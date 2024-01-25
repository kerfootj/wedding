'use client';

import { PropsWithChildren } from 'react';

export function BGImage(props: PropsWithChildren<{ imageUrl: string }>) {
    const { children, imageUrl } = props;

    function iOS() {
        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        return /iPad|iPhone|iPod/.test(navigator.userAgent);
    }

    return (
        <div
            className={`h-screen w-screen bg-cover bg-center ${
                iOS() ? 'bg-scroll ' : 'bg-fixed'
            }`}
            style={{ backgroundImage: `url('${imageUrl}')` }}
        >
            {children}
        </div>
    );
}
