'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { rsvp as rsvpAction } from '../actions/rsvp';
import { firstNameLastInitial } from '../utils/firstNameLastInitial';
import { Loading } from './Loading';

const invitees = [
    ['Sandra Kerfoot', 'Gordon Kerfoot'],
    ['Amy Kerfoot', 'Brent Pound'],
    ['Betty Tannant', 'Trevor Tannant'],
    ['Karen Kerfoot', 'Barry Kerfoot'],
    ['Denise Bieber', 'Wes Bieber', 'Zara Bieber'],
    ['Katie Bieber', 'William Schober'],
    ['Aliya Bieber', 'Andrew Nash'],
    ['Sandra Hinterleitner', 'Dwayne Tannant', 'Eric Tannant', 'Krista Tannant'],
    ['Art Heale', 'Deb Heale'],
    ['Josh Jervis'],
    ['Chase Jervis', 'Jessica Coyle'],
    ['Shael Huska', 'Steph Koby'],
    ['Tracy Hoot', 'Paul Hoot'],
    ['Lauren Champagne', 'Andrew Champagne'],
    ['Morgan Forshner', 'Trenton Forshner', 'Violet Forshner'],
    ['Catherine Chapman', 'Ryan Chapman'],
    ['Mariana Chapman', 'Nolan Chapman'],
    ['Bailey Chapman', 'Nathan Chapman'],
    ['Jimmy Culver', 'Bert Culver'],
    ['Trish Culver'],
    ['Shelley Derker', 'Darrell Derker'],
    ['Jane Stewart', 'Ben Kosten', 'Rory Fisher', 'Violet Kosten'],
    ['Sarah Oyer', 'Quinn Oyer'],
    ['Morgan Jules'],
];

export type RSVPData = {
    guests: Record<string, boolean>;
    email: string;
    message: string;
};

export function RSVP() {
    return (
        <section
            id="rsvp"
            className="relative w-screen overflow-x-hidden bg-[url(/images/leia-joel-walking-away.webp)] bg-cover bg-center bg-no-repeat"
        >
            <div className="absolute h-full w-full bg-gradient-to-b from-white via-white via-5%" />

            <div className="flex h-full w-full items-center justify-center px-0 text-neutral-700 sm:my-52 sm:px-4">
                <RSVPCard />
            </div>
        </section>
    );
}

function RSVPCard() {
    const [options, setOptions] = useState<Array<string>>([]);
    const [guests, setGuest] = useState<Array<string>>([]);
    const [attending, setAttending] = useState<Record<string, boolean>>({});
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [result, setResult] = useState<'attending' | 'skipping' | null>(null);

    /**
     * Searches the guest list for any names that match the searched name
     * and sets the results into the options state.
     */
    function handleSearch(name: string) {
        if (!name) {
            return;
        }

        setOptions(
            invitees
                .flat()
                .filter((party) =>
                    party.toLowerCase().includes(name.trim().toLowerCase())
                )
        );
        setGuest([]);
    }

    /**
     * Handles selecting the guest name from the list
     */
    function handleSelect(guestName: string) {
        setGuest(invitees.find((names) => names.includes(guestName)) || []);
        setOptions([]);
    }

    /**
     * Calls the rsvp action to send out an email
     */
    async function handleSubmit() {
        setLoading(true);

        try {
            await rsvpAction({
                guests: attending,
                email,
                message,
            });

            await new Promise((resolve) => setTimeout(resolve, 1100));

            setResult(
                Object.values(attending).every((isAttending) => !isAttending)
                    ? 'skipping'
                    : 'attending'
            );
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
                    alt="See you soon"
                    className="scale-100 object-cover"
                    draggable={false}
                    width={600}
                    height={600}
                />
            </div>
        );
    }

    return (
        <div className="z-10 flex min-h-[760px] w-full max-w-3xl flex-col items-center rounded-xl bg-white p-4 shadow-lg lg:max-w-xl">
            <h3 className="pb-2 pt-4 font-serif text-2xl tracking-widest drop-shadow-xl md:text-6xl">
                RSVP
            </h3>

            <p className="text-md px-8 pb-8 text-center font-sans text-gray-500">
                To RSVP search for your name below and let us know if you will be able to
                attend. Kindly reply by the <b>first of March</b>.
            </p>

            {errors.submit && (
                <p className="text-md text-center font-semibold text-lilac-700">
                    {errors.submit}
                </p>
            )}

            <div
                className={`${
                    errors.submit ? 'hidden' : 'flex'
                } w-full flex-col items-center gap-3 font-numbers`}
            >
                <GuestSearch onSearch={handleSearch} />

                {options.length || guests.length ? <Divider /> : null}

                <SearchResults results={options} onSelect={handleSelect} />

                <RSVPForm
                    attending={attending}
                    email={email}
                    guests={guests}
                    loading={loading}
                    message={message}
                    onAttendingChange={(name: string, attending: boolean) => {
                        setAttending((prev) => ({ ...prev, [name]: attending }));
                    }}
                    onEmailChange={setEmail}
                    onMessageChange={setMessage}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}

function GuestSearch(props: { onSearch: (name: string) => void }) {
    const { onSearch } = props;

    const [name, setName] = useState('');

    return (
        <div className="flex w-full flex-col items-center">
            <div className="w-full md:w-10/12">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full border-0 border-b border-b-gray-200 px-0 py-2 outline-none ring-0 transition-colors duration-300 focus:border-b-glade-300 focus:outline-none focus:ring-0 "
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            event.preventDefault();

                            onSearch(name);
                        }
                    }}
                />

                <div className="h-5">
                    <label
                        className={`text-sm text-glade-500 transition-all ${
                            name ? 'visible opacity-100' : 'hidden opacity-0'
                        }`}
                    >
                        Name
                    </label>
                </div>
            </div>

            <button
                type="button"
                className="rounded-lg border-2 border-glade-300 bg-white px-12 py-2 text-sm font-semibold text-glade-500 shadow-md transition-colors duration-500 hover:border-glade-500 hover:text-glade-700 hover:shadow-lg focus:outline-none "
                onClick={() => onSearch(name)}
            >
                Search
            </button>
        </div>
    );
}

function Divider() {
    return (
        <div className="h-full w-full">
            <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25" />
        </div>
    );
}

function SearchResults(props: {
    results: Array<string>;
    onSelect: (name: string) => void;
}) {
    const { results, onSelect } = props;

    return (
        <div className="flex w-full flex-col gap-2 md:w-10/12">
            {results.sort().map((name) => (
                <div
                    key={name}
                    onClick={() => onSelect(name)}
                    className="flex w-full animate-fade-in-right cursor-pointer items-center justify-between rounded-md border-2 border-gray-200 px-4 py-2 text-neutral-700 transition-all hover:border-glade-400 hover:shadow [&>i]:hover:text-glade-700"
                >
                    <p>{firstNameLastInitial(name)}</p>
                    <i className="fa-solid fa-angle-right" />
                </div>
            ))}
        </div>
    );
}

function RSVPForm(props: {
    guests: Array<string>;
    attending: Record<string, boolean>;
    onAttendingChange: (name: string, attending: boolean) => void;

    email: string;
    onEmailChange: (email: string) => void;

    message: string;
    onMessageChange: (message: string) => void;

    loading: boolean;
    onSubmit: () => void;
}) {
    const {
        attending,
        email,
        guests,
        loading,
        message,
        onAttendingChange,
        onEmailChange,
        onMessageChange,
        onSubmit,
    } = props;

    const [error, setError] = useState(false);

    useEffect(() => {
        if (email) {
            setError(false);
        }
    }, [email]);

    function handleSubmit() {
        if (!email) {
            return setError(true);
        }

        onSubmit();
    }

    if (guests.length === 0) {
        return;
    }

    return (
        <div className="flex w-full flex-col items-center gap-3 md:w-10/12">
            <div className="flex w-full flex-col gap-2">
                {guests.sort().map((guest) => (
                    <div
                        key={guest}
                        // onClick={() => handleSelect(option)}
                        className="flex w-full items-center justify-between rounded-md border-2 border-gray-200 px-4 py-2 text-neutral-700"
                    >
                        <p>{firstNameLastInitial(guest)}</p>

                        <div className="flex items-center gap-4">
                            <RadioWithLabel
                                label="Accept"
                                checked={attending[guest]}
                                onChange={() => onAttendingChange(guest, true)}
                            />
                            <RadioWithLabel
                                label="Decline"
                                checked={attending[guest] === false}
                                onChange={() => onAttendingChange(guest, false)}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-md pt-4 font-sans text-gray-500">
                Please provide an email where we can contact you of any updates or
                changes.
            </p>

            <div className="w-full">
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="mb-2 w-full border-0 border-b border-gray-200 px-0 py-2 outline-none transition-colors duration-300 focus:border-glade-300 focus:outline-none focus:ring-0"
                    value={email}
                    onChange={(event) => onEmailChange(event.target.value)}
                />

                {error && (
                    <p className="text-sm font-semibold text-red-600">
                        Please provide an email
                    </p>
                )}
            </div>

            {guests.length && guests[0] === 'Morgan Jules' ? (
                <p className="text-md font-sans text-lilac-500">
                    {`Hi Morgan, let us know if you would like to bring a friend or family member :)`}
                </p>
            ) : null}

            <textarea
                name="message"
                placeholder="Message (optional)"
                rows={4}
                className="w-full resize-none border-0 border-b border-gray-200 px-0 pb-2 pt-0 outline-none transition-colors duration-300 focus:border-glade-300 focus:outline-none focus:ring-0"
                value={message}
                onChange={(event) => onMessageChange(event.target.value)}
            />

            <button
                className="mt-4 w-full rounded-lg bg-lilac-400 px-4 py-2 text-sm font-semibold tracking-wider text-white shadow-md transition-colors duration-300 hover:bg-lilac-500 focus:outline-none focus:ring-2 focus:ring-lilac-400 focus:ring-offset-2"
                onClick={handleSubmit}
                disabled={loading}
            >
                {loading ? <Loading /> : 'RSVP'}
            </button>
        </div>
    );
}

function RadioWithLabel(props: {
    label: string;
    checked?: boolean;
    onChange: () => void;
}) {
    const { label, checked, onChange } = props;

    return (
        <div className="flex cursor-pointer items-center" onClick={onChange}>
            <input
                type="radio"
                checked={checked}
                value={`${!!checked}`}
                onChange={onChange}
                className="h-4 w-4 cursor-pointer text-lilac-400 focus:ring-1 focus:ring-lilac-400"
            />
            <label className="ml-2 cursor-pointer text-sm font-medium text-gray-900">
                {label}
            </label>
        </div>
    );
}
