'use client';

import { PropsWithChildren } from 'react';

const STYLES = {
    default: 'h-screen w-screen bg-cover bg-fixed bg-center',
    iOS: 'h-screen w-full bg-cover bg-center',
};

export function BGImage(props: PropsWithChildren<{ imageUrl: string }>) {
    const { children, imageUrl } = props;

    function iOS() {
        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        return /iPad|iPhone|iPod/.test(navigator.userAgent);
    }
    return (
        <div
            className={iOS() ? STYLES.iOS : STYLES.default}
            style={{ backgroundImage: `url('${imageUrl}')` }}
        >
            {children}
        </div>
    );
}
