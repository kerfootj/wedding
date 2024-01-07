'use client';
import Image from 'next/image';
import ScrollAnimation from 'react-animate-on-scroll';

export function OurTimeLine() {
    return (
        <div id="story" className="ml-8 mr-2 flex flex-col items-center py-12 md:mx-8">
            <h3 className="mb-12 font-serif text-4xl text-neutral-700 drop-shadow-xl md:text-6xl">
                Our Story
            </h3>

            <TimeLine
                events={[
                    {
                        image: {
                            src: '/images/leia-joel-cadets.webp',
                            alt: 'Leia and Joel Waling',
                        },
                        content: {
                            title: 'First time we meet',
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
                            date: 'September 18, 2022',
                        },
                        icon: 'fa-solid fa-leaf',
                    },
                    {
                        image: {
                            src: '/images/leia-joel-close.webp',
                            alt: 'Leia and Joel dressed nicely having a laugh while sitting in tall natural flowers and grass in Kamloops.',
                        },
                        content: {
                            title: 'The Big Day',
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
                    <ScrollAnimation
                        key={index}
                        animateIn="animate__fadeInUp"
                        animateOnce
                    >
                        <div
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
                    </ScrollAnimation>
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
    const { date, title } = props.content;

    return (
        <>
            <h4 className="pb-2 font-serif text-4xl text-neutral-800">{title}</h4>

            <span className="font-semibold text-lilac-400">{date}</span>
        </>
    );
}
