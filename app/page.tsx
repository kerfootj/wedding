import Image from 'next/image';
import { Nav } from './components/Nav';

export default function Home() {
    return (
        <>
            <Nav />
            <Hero />
            <WhereAndWhen />
        </>
    );
}

function Hero() {
    return (
        <section
            id="hero"
            className="relative h-screen w-screen overflow-x-hidden"
        >
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 text-gray-100 drop-shadow-dark sm:gap-8">
                <Image
                    src="/images/floral-divider.webp"
                    alt="A string of leaves and berries with a single flower in the middle"
                    className="rotate-180 scale-50 transform sm:scale-100"
                    width={300}
                    height={32}
                />

                <h2 className="font-serif text-2xl md:text-4xl">
                    The Wedding Celebration Of
                </h2>
                <h1 className="font-cursive text-4xl md:text-8xl">
                    Leia & Joel
                </h1>

                <Image
                    src="/images/floral-divider.webp"
                    alt="A string of leaves and berries with a single flower in the middle"
                    className="scale-50 transform sm:scale-100"
                    width={300}
                    height={32}
                />
            </div>

            <Image
                src="/images/leia-joel-walking.webp"
                alt="Leia and Joel smiling, walking hand in hand through a field of natural grass"
                className="h-screen w-screen scale-125 transform object-cover md:scale-125 lg:scale-100"
                width={3760}
                height={2667}
            />
        </section>
    );
}

function WhereAndWhen() {
    return (
        <section id="where-and-when">
            <div className="relative flex flex-col items-center justify-center gap-4 py-16 text-neutral-900">
                <h3 className="font-serif text-4xl md:text-6xl">
                    May 18th, 2024
                </h3>

                <p className="text-lg">Kamloops BC</p>
            </div>
        </section>
    );
}
