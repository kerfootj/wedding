'use client';

import { useEffect, useState } from 'react';

export function Map() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWidth(Math.min(window.innerWidth, 680));

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114283.84071985491!2d-120.4245061509044!3d50.73218324738116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537fceb3f2d489d3%3A0xea703c197233e0d!2s6270%20Westsyde%20Rd%2C%20Kamloops%2C%20BC%20V2B%208N7!5e0!3m2!1sen!2sca!4v1694913000838!5m2!1sen!2sca"
            className="rounded-2xl shadow-xl"
            width={width}
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    );
}
