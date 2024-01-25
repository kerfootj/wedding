'use client';

import { ReactElement } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export function FAQ() {
    const questionsAndAnswers: Array<{
        question: string;
        answer: ReactElement;
        icon: string;
    }> = [
        {
            question: `What time should I arrive?`,
            answer: (
                <>
                    The ceremony starts at 2:00 PM. Plan to arrive{' '}
                    <b>at least 30 minutes early </b>
                    so you have time to find the locations and walk to the ceremony site.
                </>
            ),
            icon: 'far fa-clock',
        },
        {
            question: `What to wear?`,
            answer: (
                <>
                    A suit or dress shirt and pants for the gentlemen. A dress or nice
                    slacks for the ladies. Please save your jeans, t-shirts, and cowboy
                    boots for the rodeo.
                </>
            ),
            icon: 'fas fa-socks',
        },
        {
            question: `Is the wedding outdoors?`,
            answer: (
                <>Yes, come with appropriate footwear for walking on grass and gravel.</>
            ),
            icon: 'fas fa-cloud-sun',
        },
        {
            question: `Can I take photos?`,
            answer: (
                <>
                    We kindly ask that you leave the photographs to the professional.
                    We&apos;ll gladly share pictures with you after the occasion.
                </>
            ),
            icon: 'fas fa-camera',
        },
        {
            question: `Can I share photos to social media?`,
            answer: (
                <>
                    We kindly ask that you don&apos;t share images of our day to social
                    media. Thank you for your understanding.
                </>
            ),
            icon: 'far fa-thumbs-up',
        },
        {
            question: `Do you have a gift registry?`,
            answer: (
                <>
                    Your presence is the greatest gift of all. If you are considering a
                    gift, we are saving for a honeymoon, and any contribution towards this
                    would be deeply appreciated. Your love and support mean the world to
                    us. Thank you for being a part of our joyous celebration!
                </>
            ),
            icon: 'fas fa-gift',
        },
        {
            question: `Is there accommodation nearby?`,
            answer: (
                <>
                    The{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.ihg.com/holidayinn/hotels/us/en/find-hotels/select-roomrate?fromRedirect=true&qSrt=sBR&qSlH=ykabc&qRms=1&qAdlt=2&qChld=0&qCiD=18&qCiMy=002024&qCoD=19&qCoMy=002024&qAAR=6CBARC&qRtP=6CBARC&setPMCookies=true&qSHBrC=HI&qDest=675%20Tranquille%20Road,%20Kamloops,%20BC,%20CA&qpMn=0&srb_u=1&qChAge=&qRmFltr="
                        className="text-lilac-700 underline"
                    >
                        Holiday Inn
                    </a>{' '}
                    on the North Shore is the closest hotel with a 20 minute drive.
                    Otherwise{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.airbnb.ca/s/Kamloops--Canada/homes?adults=2&place_id=ChIJMTsNPdMsflMR50VpmqqWPtI&refinement_paths%5B%5D=%2Fhomes&checkin=2024-05-18&checkout=2024-05-19&tab_id=home_tab&query=Kamloops%2C%20Canada&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-02-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=1"
                        className="text-lilac-700 underline"
                    >
                        AirBnB
                    </a>{' '}
                    might have some options in the Westsyde area.
                </>
            ),
            icon: 'fas fa-hotel',
        },
        {
            question: `I have a question that wasn't answered?`,
            answer: (
                <>
                    Send us an email at{' '}
                    <a
                        href="mailto:joel.kerfoot@outlook.com"
                        className="text-lilac-700 underline"
                    >
                        joel.kerfoot@outlook.com
                    </a>{' '}
                    and we&apos;ll try to get back to you as soon as possible.
                </>
            ),
            icon: 'far fa-question',
        },
    ];

    return (
        <section
            id="faq"
            className="relative flex select-none flex-col items-center justify-center gap-4 bg-lilac-50 pb-16 pt-24 text-neutral-900"
        >
            <h3 className="mb-8 font-serif text-6xl text-neutral-700 drop-shadow-xl">
                Details
            </h3>

            <div className="flex flex-col gap-8">
                {questionsAndAnswers.map((qAndA) => (
                    <ScrollAnimation
                        key={qAndA.question}
                        animateIn="animate__fadeInLeft"
                        animateOnce
                    >
                        <div className="flex w-full gap-4">
                            <div className="ml-2 w-10 md:ml-0">
                                <div className="group flex h-10 w-10 items-center justify-center overflow-hidden rounded-full ring-2 ring-lilac-700 transition-colors hover:bg-white hover:ring-4 hover:ring-lilac-200 hover:transition-colors">
                                    <i
                                        className={`fa-lg group-hover:animate-to-right-from-left ${qAndA.icon} text-lilac-700`}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-xl font-semibold">{qAndA.question}</p>
                                <p className="max-w-2xl text-lg">{qAndA.answer}</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                ))}
            </div>
        </section>
    );
}
