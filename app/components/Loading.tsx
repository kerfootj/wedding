export function Loading() {
    return (
        <div className="text-xs">
            <div className="flex h-[1.5em] items-center justify-center">
                <div className="absolute h-[1em] w-[1em] animate-shuffle rounded-full bg-white" />
                <div className="absolute h-[1em] w-[1em] animate-shuffle rounded-full bg-white animation-delay-500" />
                <div className="absolute h-[1em] w-[1em] animate-shuffle rounded-full bg-white animation-delay-1000" />
                <div className="absolute h-[1em] w-[1em] animate-shuffle rounded-full bg-white animation-delay-1500" />
            </div>
        </div>
    );
}
