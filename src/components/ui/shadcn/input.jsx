import * as React from "react";
import { cn } from "./utils";

export const Input = React.forwardRef(function Input(
    { className, ...props },
    ref
) {
    return (
        <input
            ref={ref}
            className={cn(
                "flex w-full rounded-full border border-(--border) bg-white/5 px-4 py-2 text-sm text-(--text) placeholder:text-(--text-muted) outline-none transition",
                "focus-visible:border-[rgb(var(--accent-rgb)/0.35)] focus-visible:ring-4 focus-visible:ring-[rgb(var(--accent-rgb)/0.10)]",
                className
            )}
            {...props}
        />
    );
});
