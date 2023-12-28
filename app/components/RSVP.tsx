'use client';

import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { rsvp as rsvpAction } from '../actions/rsvp';
import { Loading } from './Loading';

export type RSVPResponse = {
    name: string;
    email: string;
    attending: boolean;
    guests: number;
    message: string;
};

export function RSVP() {
    return (
        <section id="rsvp" className="relative h-screen w-screen overflow-x-hidden">
            <Image
                src="/images/leia-joel-walking-away.webp"
                alt="Leia and Joel smiling, walking away hand in hand down a path surrounded by sagebrush."
                className="absolute h-screen w-screen scale-125 transform object-cover before:absolute before:left-0 before:top-0 before:inline-block before:h-screen before:w-screen before:bg-gradient-to-b before:from-white before:content-[''] md:scale-125 lg:scale-100"
                draggable={false}
                width={4000}
                height={2667}
            />
            <div className="absolute left-0 top-0 h-screen w-screen bg-gradient-to-b from-white via-white via-10%" />

            <div className="flex h-full w-full items-center justify-center px-0 text-neutral-700 sm:px-4">
                <RSVPForm />
            </div>
        </section>
    );
}

function RSVPForm() {
    const [rsvp, setRSVP] = useState<RSVPResponse>({
        name: '',
        email: '',
        attending: true,
        guests: 0,
        message: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [result, setResult] = useState<'attending' | 'skipping' | null>(null);

    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;

        if (name === 'attending') {
            setRSVP((prevState) => ({
                ...prevState,
                attending: value === 'true',
            }));
        } else if (name === 'guests') {
            console.log('guests', value);

            const numberOfGuests = parseInt(value, 10);

            console.log('numberOfGuests', numberOfGuests);

            setRSVP((prevState) => ({
                ...prevState,
                guests: isNaN(numberOfGuests) ? 0 : numberOfGuests,
            }));
        } else {
            setRSVP((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setLoading(true);

        const validationErrors: Record<string, string> = {};

        if (!rsvp.name) {
            validationErrors.name = 'Please enter your name.';
        }

        if (!rsvp.email) {
            validationErrors.email = 'Please enter your email.';
        }

        if (rsvp.attending && !rsvp.guests) {
            validationErrors.guests = 'Please enter the number of guests attending.';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        try {
            await rsvpAction(rsvp);

            await new Promise((resolve) => setTimeout(resolve, 1100));

            setResult(rsvp.attending ? 'attending' : 'skipping');
        } catch (error) {
            setErrors((prev) => ({
                ...prev,
                submit: 'Joel probably messed something up when creating this site. Please try again later.',
            }));
        } finally {
            setLoading(false);
        }
    }

    if (result) {
        return (
            <div className="flex items-center justify-center">
                <Image
                    src={
                        result === 'attending'
                            ? '/images/see-you-soon.webp'
                            : '/images/miss-you.webp'
                    }
                    alt="Leia and Joel smiling, walking away hand in hand down a path surrounded by sagebrush."
                    className="scale-100 object-cover"
                    draggable={false}
                    width={600}
                    height={600}
                />
            </div>
        );
    }

    return (
        <div className="z-10 flex w-full max-w-3xl flex-col items-center rounded-xl bg-white p-4 shadow-lg lg:max-w-xl">
            <h3 className="pb-2 pt-4 font-serif text-2xl tracking-widest drop-shadow-xl md:text-6xl">
                RSVP
            </h3>

            <p className="text-md pb-8 font-sans text-gray-500">
                Kindly reply by the first of May
            </p>

            {errors.submit && (
                <p className="text-md text-center font-semibold text-lilac-700">
                    {errors.submit}
                </p>
            )}

            <form
                className={`${
                    errors.submit ? 'hidden' : 'flex'
                } w-full flex-col items-center gap-3 font-numbers`}
                onSubmit={handleSubmit}
            >
                <div className="w-full md:px-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="w-full border-0 border-b border-b-gray-200 px-0 py-2 outline-none ring-0 transition-colors duration-300 focus:border-b-lilac-300 focus:outline-none focus:ring-0"
                        value={rsvp.name}
                        onChange={handleChange}
                    />

                    <p className="pt-1 text-sm font-semibold text-red-600">
                        {errors.name}
                    </p>
                </div>

                <div className="w-full md:px-4">
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="w-full border-0 border-b border-gray-200 px-0 py-2 outline-none transition-colors duration-300 focus:border-lilac-300 focus:outline-none focus:ring-0"
                        value={rsvp.email}
                        onChange={handleChange}
                    />

                    <p className="pt-1 text-sm font-semibold text-red-600">
                        {errors.email}
                    </p>
                </div>

                <div className="flex flex-row flex-wrap justify-center gap-2 pt-2">
                    <RadioWithLabel
                        id="attending"
                        name="attending"
                        value="true"
                        label="Accepts with Pleasure"
                        checked={rsvp.attending}
                        onChange={handleChange}
                    />
                    <RadioWithLabel
                        id="attending"
                        name="attending"
                        value="false"
                        label="Declines with Regret"
                        checked={!rsvp.attending}
                        onChange={handleChange}
                    />
                </div>

                <div className="w-full px-4">
                    <input
                        type="text"
                        name="guests"
                        placeholder="Number of Guests"
                        autoComplete="off"
                        className={`w-full border-0 border-b border-gray-200 px-0 py-2 outline-none transition-colors duration-300 focus:border-lilac-300 focus:outline-none focus:ring-0 ${
                            !rsvp.attending ? 'hidden h-0 p-0 opacity-100' : ''
                        }`}
                        value={rsvp.guests || ''}
                        onChange={handleChange}
                    />

                    <p className="pt-1 text-sm font-semibold text-red-600">
                        {errors.guests}
                    </p>
                </div>

                <div className="w-full px-4">
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows={4}
                        className="w-full resize-none border-0 border-b border-gray-200 px-0 pb-2 pt-0 outline-none transition-colors duration-300 focus:border-lilac-300 focus:outline-none focus:ring-0"
                        value={rsvp.message}
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    className="mt-4 w-full rounded-lg bg-lilac-400 px-4 py-2 text-sm font-semibold tracking-wider text-white shadow-md transition-colors duration-300 hover:bg-lilac-500 focus:outline-none focus:ring-2 focus:ring-lilac-400 focus:ring-offset-2"
                    disabled={loading}
                >
                    {loading ? <Loading /> : 'RSVP'}
                </button>
            </form>
        </div>
    );
}

function RadioWithLabel(props: {
    id: string;
    name: string;
    value: string;
    label: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    const { id, name, value, label, checked, onChange } = props;

    return (
        <div className="flex items-center">
            <input
                id={id}
                type="radio"
                value={value}
                name={name}
                checked={checked}
                onChange={onChange}
                className="h-4 w-4 text-lilac-400 focus:ring-1 focus:ring-lilac-400"
            />
            <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900">
                {label}
            </label>
        </div>
    );
}
