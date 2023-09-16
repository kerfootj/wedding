'use client';

import '../styles/flip-clock.sass';

import { useEffect, useState } from 'react';

const theBigDay = new Date('2024-05-18T20:00:00.000Z');

export function FlipClock() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = theBigDay.getTime() - now.getTime();

            if (difference < 0) {
                clearInterval(interval);
                return;
            }

            setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((difference / 1000 / 60) % 60));
            setSeconds(Math.floor((difference / 1000) % 60));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-clock">
            <FlipUnit digit={days} unit="days" shuffle={days % 2 === 0} />
            <FlipUnit digit={hours} unit="hours" shuffle={hours % 2 === 0} />
            <FlipUnit digit={minutes} unit="minutes" shuffle={minutes % 2 === 0} />
            <FlipUnit digit={seconds} unit="seconds" shuffle={seconds % 2 === 0} />
        </div>
    );
}

function FlipUnit(props: {
    digit: number;
    unit: 'days' | 'hours' | 'minutes' | 'seconds';
    shuffle?: boolean;
}) {
    const { digit, unit, shuffle } = props;

    // assign digit values
    let current = digit;
    let previous = digit + 1;

    // handle roll over
    if (unit === 'hours') {
        previous = previous === 24 ? 0 : previous;
    }
    if (unit === 'seconds' || unit === 'minutes') {
        previous = previous === 60 ? 0 : previous;
    }

    // prefix zero if less than 10
    const format = (num: number) => (num < 10 ? `0${num}` : num.toString());

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flip-container text-glade-600">
                <StaticCard digit={format(current)} position={'upper-card'} />
                <StaticCard digit={format(previous)} position={'lower-card'} />
                <AnimatedCard
                    digit={format(shuffle ? previous : current)}
                    animation={shuffle ? 'fold' : 'unfold'}
                />
                <AnimatedCard
                    digit={format(!shuffle ? previous : current)}
                    animation={!shuffle ? 'fold' : 'unfold'}
                />
            </div>

            <span className="text-md font-semibold uppercase">{unit}</span>
        </div>
    );
}

function AnimatedCard(props: { digit: string; animation: string }) {
    const { digit, animation } = props;

    return (
        <div className={`flip-card ${animation}`}>
            <span>{digit}</span>
        </div>
    );
}

function StaticCard(props: { digit: string; position: string }) {
    const { position, digit } = props;

    return (
        <div className={position}>
            <span>{digit}</span>
        </div>
    );
}
