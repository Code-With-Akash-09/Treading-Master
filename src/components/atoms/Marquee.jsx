import { cn } from "@/lib/utils"

const Marquee = ({
    className,
    reverse,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    repeatClassName = "",
    ...props
}) => {
    return (
        <div
            {...props}
            className={cn(
                "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
                {
                    "flex-row": !vertical,
                    "flex-col": vertical,
                },
                className
            )}
        >
            {Array(repeat)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={`${i}-marquee`}
                        className={cn(
                            "flex shrink-0 justify-around [gap:var(--gap)]",
                            {
                                "animate-marquee flex-row": !vertical,
                                "animate-marquee-vertical flex-col": vertical,
                                "group-hover:[animation-play-state:paused]":
                                    pauseOnHover,
                                "[animation-direction:reverse]": reverse,
                            },
                            repeatClassName
                        )}
                    >
                        {children}
                    </div>
                ))}
        </div>
    )
}

export default Marquee