import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "./utils";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;

export function PopoverContent({ className, align = "start", sideOffset = 8, ...props }) {
    return (
        <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
                align={align}
                sideOffset={sideOffset}
                className={cn(
                    "z-50 rounded-2xl border border-(--border) bg-(--bg-sec) p-2 shadow-lg",
                    className
                )}
                {...props}
            />
        </PopoverPrimitive.Portal>
    );
}
