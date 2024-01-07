'use client';

import ScrollAnimation from 'react-animate-on-scroll';
import { Map } from './Map';

export function Where() {
    return (
        <section
            id="where"
            className="relative flex select-none flex-col items-center justify-center gap-4 bg-glade-50 pb-16 pt-24 text-neutral-900"
        >
            <h3 className="mb-8 font-serif text-6xl text-neutral-700 drop-shadow-xl">
                Venue
            </h3>

            <ScrollAnimation animateIn="animate__slideInUp" animateOnce>
                <div className="mx-2 flex flex-col items-center gap-4">
                    <p className="text-3xl">The Hoot Residence</p>
                    <p className="text-lg">6270 Westsyde Road, Kamloops BC</p>
                    <p className="mt-8 max-w-2xl text-center text-lg">
                        Drive approximately 10 minutes past The Dunes golf course. The
                        driveway is located on the left side of the road (third driveway
                        past the bridge) and the parking area will be clearly signed.
                    </p>
                </div>
            </ScrollAnimation>

            <div className="pb-12 pt-4">
                <ScrollAnimation animateIn="animate__slideInUp" animateOnce>
                    <Map />
                </ScrollAnimation>
            </div>
        </section>
    );
}
