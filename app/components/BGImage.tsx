'use client';

import { PropsWithChildren } from 'react';

export function BGImage(props: PropsWithChildren<{ imageUrl: string }>) {
    const { children, imageUrl } = props;

    return (
        <div
            className={`h-screen w-screen bg-cover bg-fixed bg-center`}
            style={{ backgroundImage: `url('${imageUrl}')` }}
        >
            {children}
        </div>
    );
}
