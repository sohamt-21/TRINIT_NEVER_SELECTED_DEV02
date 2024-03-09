import { TypewriterEffectSmooth } from "../Components/ui/typewriter-effect";
export function TypewriterEffectDemo() {
    const words = [
        {
            text: "Learn",
        },
        {
            text: "All",
        },
        {
            text: "Languages",
        },
        {
            text: "with",
        },
        {
            text: "Ling Connect",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
                Please add a tagline here afterwards
            </p>
            <TypewriterEffectSmooth words={words} />
        </div>
    );
}
