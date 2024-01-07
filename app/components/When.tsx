import { FlipClock } from './FlipClock';

export function When() {
    const schedule = [
        {
            what: 'Ceremony',
            when: '2:00 PM',
            details: (
                <>
                    <b>Plan to arrive 30 minutes early</b>. The ceremony site is a couple
                    minute walk from parking.
                </>
            ),
        },
        {
            what: 'Photos',
            when: '2:30 PM',
            details: (
                <>
                    Please stick around immediately after the ceremony for photos with the
                    newlyweds.
                </>
            ),
        },
        {
            what: 'Snacks & Games',
            when: '3:00 PM',
            details: <>Eat, drink, and be merry!</>,
        },
        {
            what: 'Dinner',
            when: '5:30 PM',
            details: <>Food, drinks, speeches, and dancing!</>,
        },
    ];

    return (
        <section
            id="when"
            className="relative flex select-none flex-col items-center justify-center gap-4 bg-glade-50 pb-16 pt-24 text-neutral-900"
        >
            <h3 className="font-serif text-6xl text-neutral-700 drop-shadow-xl">
                May 18th, 2024
            </h3>

            <div className="my-12">
                <FlipClock />
            </div>

            <h4 className="mb-8 font-serif text-5xl text-neutral-700 drop-shadow-xl">
                Schedule of Events
            </h4>

            <div className="mx-2 grid w-full max-w-[1000px] grid-cols-1 gap-4 md:w-10/12 md:grid-cols-2">
                {schedule.map((event) => (
                    <div
                        key={event.what}
                        className="mb-10 flex w-full flex-col items-center justify-center gap-1 md:mb-16"
                    >
                        <h5 className="font-sans text-2xl font-semibold text-neutral-700 drop-shadow-xl">
                            {event.what}
                        </h5>

                        <p className="font-semibold text-lilac-600">{event.when}</p>

                        <p className="max-w-sm text-center text-neutral-700">
                            {event.details}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
