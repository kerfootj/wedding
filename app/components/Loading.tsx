// issues with linting tailwindcss classes with custom animations
/* eslint-disable */
export function Loading() {
    return (
        <div className="text-xs">
            <div className="flex h-[1.5em] items-center justify-center">
                <div className="animate-shuffle absolute h-[1em] w-[1em] rounded-full bg-white" />
                <div className="animate-shuffle absolute h-[1em] w-[1em] rounded-full bg-white animation-delay-500" />
                <div className="animate-shuffle absolute h-[1em] w-[1em] rounded-full bg-white animation-delay-1000" />
                <div className="animate-shuffle absolute h-[1em] w-[1em] rounded-full bg-white animation-delay-1500" />
            </div>
        </div>
    );
}
/* eslint-enable */
