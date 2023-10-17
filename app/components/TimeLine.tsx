'use client';
import Image from 'next/image';

export function OurTimeLine() {
    return (
        <div className="ml-8 mr-2 flex flex-col items-center py-12 md:mx-8">
            <h3 className="mb-12 font-serif text-4xl text-neutral-700 drop-shadow-xl md:text-6xl">
                Our Story
            </h3>

            <TimeLine
                events={[
                    {
                        image: {
                            src: '/images/leia-joel-walking.webp',
                            alt: 'Leia and Joel Waling',
                        },
                        content: {
                            title: 'First time we meet',
                            description: 'Some flavour text.',
                            date: 'September 2012',
                        },
                        icon: 'fa-solid fa-paper-plane',
                    },
                    {
                        image: {
                            src: '/images/pilots.webp',
                            alt: 'Leia and Joel flying a Cessna together over Victoria.',
                        },
                        content: {
                            title: 'We fall in love each other',
                            description: 'Some flavour text.',
                            date: 'April 18, 2015',
                        },
                        icon: 'fa-solid fa-heart',
                    },
                    {
                        image: {
                            src: '/images/proposal.webp',
                            alt: 'Joel proposing to Leia in VanDusen Gardens.',
                        },
                        content: {
                            title: 'He asked?.. She said Yes',
                            description: 'Some flavour text.',
                            date: 'September 18, 2022',
                        },
                        icon: 'fa-solid fa-leaf',
                    },
                    {
                        image: {
                            src: '/images/leia-joel-sitting.webp',
                            alt: 'Leia and Joel dressed nicely having a laugh while sitting in tall natural flowers and grass in Kamloops.',
                        },
                        content: {
                            title: 'The Big Day',
                            description: 'Coming soon!',
                            date: 'May 18, 2024',
                        },
                        icon: 'fa-solid fa-calendar-days',
                    },
                ]}
            />
        </div>
    );
}

type Event = {
    image: {
        src: string;
        alt: string;
    };
    content: {
        title: string;
        description: string;
        date: string;
    };
    icon: string;
};

function TimeLine(props: { events: Array<Event> }) {
    const { events } = props;

    return (
        <div className="relative w-full">
            <div className="absolute top-2 h-[calc(100%-16px)] w-1 bg-neutral-100 sm:left-4 md:left-auto md:right-1/2 md:translate-x-1/2">
                <div className="absolute box-border h-4 w-4 translate-x-[-36%] rounded-full border-4 border-neutral-100 bg-lilac-400" />
                <div className="absolute bottom-0 box-border h-4 w-4 translate-x-[-36%] rounded-full border-4 border-neutral-100 bg-lilac-400" />
            </div>

            <div className="my-12 ml-8 sm:ml-16 md:ml-0">
                {events.map(({ content, icon, image }, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col py-6 ${
                            index % 2 ? 'md:flex-row-reverse' : 'md:flex-row'
                        } items-start justify-center gap-4 md:items-center md:gap-0`}
                    >
                        <div
                            className={`flex flex-1 ${
                                index % 2 ? 'justify-start' : 'justify-end'
                            }`}
                        >
                            <EventImage image={image} />
                        </div>

                        <div className="absolute left-[-90px] top-8 z-10 mx-10 flex h-10 w-10 transform items-center justify-center rounded-full bg-neutral-100 duration-500 hover:rotate-[360deg] sm:left-[-118px] sm:h-16 sm:w-16 md:static md:order-none">
                            <i className={`${icon} text-lilac-400`} />
                        </div>

                        <div
                            className={`flex flex-1 flex-col ${
                                index % 2 ? 'md:text-right' : 'text-left'
                            }`}
                        >
                            <EventContent content={content} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function EventImage(props: { image: Event['image'] }) {
    const { src, alt } = props.image;

    return (
        <div className="relative max-h-[600px] max-w-[800px] overflow-hidden rounded md:max-h-[400px] md:max-w-[468px]">
            <Image
                className="block h-auto w-auto object-cover transition duration-500 hover:scale-110"
                src={src}
                alt={alt}
                width={468}
                height={296}
            />
        </div>
    );
}

function EventContent(props: { content: Event['content'] }) {
    const { date, description, title } = props.content;

    return (
        <>
            <h4 className="pb-2 font-serif text-4xl text-neutral-700">{title}</h4>

            <span className="pb-3 text-sm text-lilac-400">{date}</span>

            <p className="text-neutral-500">{description}</p>
        </>
    );
}
