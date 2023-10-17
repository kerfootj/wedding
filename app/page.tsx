import Image from 'next/image';
import { FlipClock } from './components/FlipClock';
import { Map } from './components/Map';
import { Nav } from './components/Nav';
import { OurTimeLine } from './components/TimeLine';

export default function Home() {
    return (
        <>
            <Nav />
            <Hero />
            <WhereAndWhen />
            <FlowerDivider />
            <OurTimeLine />
        </>
    );
}

function Hero() {
    return (
        <section id="hero" className="relative h-screen w-screen overflow-x-hidden">
            <div className="absolute inset-0 z-10 flex h-screen select-none flex-col items-center justify-center gap-3 text-gray-100 drop-shadow-dark sm:gap-8">
                <div className="rotate-180">
                    <Image
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
                        src="/images/floral-divider.webp"
                        alt="A string of leaves and berries with a single flower in the middle"
                        className="scale-50 transform animate-fade-in-down opacity-0 animation-delay-1500 sm:scale-100"
                        draggable={false}
                        width={200}
                        height={32}
                    />
                </div>
            </div>

            <Image
                src="/images/leia-joel-walking.webp"
                alt="Leia and Joel smiling, walking hand in hand through a field of natural grass"
                className="h-screen w-screen scale-125 transform object-cover md:scale-125 lg:scale-100"
                draggable={false}
                width={3760}
                height={2667}
            />
        </section>
    );
}

function WhereAndWhen() {
    return (
        <section id="when-and-where">
            <div className="relative flex select-none flex-col items-center justify-center gap-4 bg-glade-50 pb-16 pt-24 text-neutral-900">
                <h3 className="font-serif text-4xl text-neutral-700 drop-shadow-xl md:text-6xl">
                    May 18th, 2024
                </h3>

                <div className="my-12">
                    <FlipClock />
                </div>

                <div className="flex flex-col items-center py-4 text-neutral-700 drop-shadow-xl">
                    <p className="font-serif text-4xl md:text-6xl">Kamloops BC</p>
                    <p className="font-serif text-xl md:text-2xl">6270 Westsyde Road</p>
                </div>

                <div className="pb-12 pt-4">
                    <Map />
                </div>
            </div>
        </section>
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
