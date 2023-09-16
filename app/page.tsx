import Image from 'next/image';
import { FlipClock } from './components/FlipClock';
import { Nav } from './components/Nav';

export default function Home() {
    return (
        <>
            <Nav />
            <Hero />
            <WhereAndWhen />
            <FlowerDivider />
            <MrsMr />
        </>
    );
}

function Hero() {
    return (
        <section id="hero" className="relative h-screen w-screen overflow-x-hidden">
            <div className="absolute inset-0 z-10 flex select-none flex-col items-center justify-center gap-3 text-gray-100 drop-shadow-dark sm:gap-8">
                <Image
                    src="/images/floral-divider.webp"
                    alt="A string of leaves and berries with a single flower in the middle"
                    className="rotate-180 scale-50 transform sm:scale-100"
                    draggable={false}
                    width={300}
                    height={32}
                />

                <h2 className="font-serif text-2xl md:text-4xl">
                    The Wedding Celebration Of
                </h2>
                <h1 className="font-cursive text-4xl md:text-8xl">Leia & Joel</h1>

                <Image
                    src="/images/floral-divider.webp"
                    alt="A string of leaves and berries with a single flower in the middle"
                    className="scale-50 transform sm:scale-100"
                    draggable={false}
                    width={300}
                    height={32}
                />
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
            <div className="relative mt-24 flex select-none flex-col items-center justify-center gap-4 text-neutral-900">
                <h3 className="font-serif text-4xl md:text-6xl">May 18th, 2024</h3>

                <div className="flex flex-col items-center text-neutral-600">
                    <p className="text-lg">Kamloops BC</p>
                    <p className="text-lg">6270 Westsyde Road</p>
                </div>

                <div className="my-16">
                    <FlipClock />
                </div>
            </div>
        </section>
    );
}

function FlowerDivider() {
    return (
        <div className="relative mt-12 flex h-1 w-full items-center justify-center sm:mt-16 md:mt-24">
            <Image
                src="/images/flower-ornament.webp"
                alt="A collection of greenery and purple flowers"
                className="absolute "
                draggable={false}
                width={400}
                height={351}
            />
        </div>
    );
}

function MrsMr() {
    return (
        <div className="bg-glade-50">
            <div className="flex h-72 "></div>
        </div>
    );
}
