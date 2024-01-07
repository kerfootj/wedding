import Image from 'next/image';
import { BGImage } from './components/BGImage';
import { FAQ } from './components/FAQ';
import { Nav } from './components/Nav';
import { RSVP } from './components/RSVP';
import { OurTimeLine } from './components/TimeLine';
import { When } from './components/When';
import { Where } from './components/Where';

export default function Home() {
    return (
        <>
            <Nav />
            <BGImage imageUrl="/images/leia-joel-walking.webp">
                <section id="hero" className="h-screen w-screen">
                    <div className="flex h-screen select-none flex-col items-center justify-center gap-3 text-gray-100 drop-shadow-dark sm:gap-8">
                        <div className="rotate-180">
                            <Image
                                priority
                                src="/images/floral-divider.webp"
                                alt="A string of leaves and berries with a single flower in the middle"
                                className="scale-50 transform animate-fade-in-down opacity-0 animation-delay-1500 sm:scale-100"
                                draggable={false}
                                width={200}
                                height={32}
                            />
                        </div>

                        <h2 className="animate-fade-in-down px-4 text-center font-serif text-4xl opacity-0 animation-delay-1000 md:text-5xl">
                            The Wedding Celebration Of
                        </h2>
                        <h1 className="animate-fade-in-down font-cursive text-7xl opacity-0 animation-delay-500 md:text-9xl">
                            Leia & Joel
                        </h1>

                        <div>
                            <Image
                                priority
                                src="/images/floral-divider.webp"
                                alt="A string of leaves and berries with a single flower in the middle"
                                className="scale-50 transform animate-fade-in-down opacity-0 animation-delay-1500 sm:scale-100"
                                draggable={false}
                                width={200}
                                height={32}
                            />
                        </div>
                    </div>
                </section>
            </BGImage>

            <When />

            <BGImage imageUrl="/images/leia-joel-hip-bump.webp" />

            <Where />

            <BGImage imageUrl="/images/leia-joel-trees.webp" />

            <FAQ />

            <BGImage imageUrl="/images/leia-joel-sitting.webp" />

            <OurTimeLine />
            <RSVP />
        </>
    );
}

function FlowerDivider() {
    return (
        <div className="relative mt-24 flex h-1 w-full items-center justify-center">
            <Image
                src="/images/flower-ornament.webp"
                alt="A collection of greenery and purple flowers"
                className="absolute bottom-0 translate-y-4"
                draggable={false}
                width={400}
                height={351}
            />
        </div>
    );
}
