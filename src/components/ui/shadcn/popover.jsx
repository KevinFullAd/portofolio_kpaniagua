import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "./utils";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;

export const PopoverContent = React.forwardRef(
    (
        { className, align = "start", sideOffset = 8, container, ...props },
        ref
    ) => (
        <PopoverPrimitive.Portal container={container}>
            <PopoverPrimitive.Content
                ref={ref}
                align={align}
                sideOffset={sideOffset}
                className={cn(
                    "z-50 rounded-2xl border border-(--border) bg-(--bg-sec) text-(--text) p-2 shadow-(--shadow) outline-none",
                    className
                )}
                {...props}
            />
        </PopoverPrimitive.Portal>
    )
);

PopoverContent.displayName = "PopoverContent";
