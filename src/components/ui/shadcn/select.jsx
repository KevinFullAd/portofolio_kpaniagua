import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "./utils";

export const Select = SelectPrimitive.Root;
export const SelectValue = SelectPrimitive.Value;

export const SelectTrigger = React.forwardRef(function SelectTrigger(
    { className, children, ...props },
    ref
) {
    return (
        <SelectPrimitive.Trigger
            ref={ref}
            className={cn(
                "flex h-11 w-full items-center justify-between rounded-full border border-(--border) bg-white/5 px-4 text-sm text-(--text) outline-none transition",
                "focus-visible:border-[rgb(var(--accent-rgb)/0.35)] focus-visible:ring-4 focus-visible:ring-[rgb(var(--accent-rgb)/0.10)]",
                className
            )}
            {...props}
        >
            {children}
            <SelectPrimitive.Icon className="ml-2 text-(--text-muted)">▾</SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
    );
});

export function SelectContent({ className, children, ...props }) {
    return (
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content
                className={cn(
                    "z-50 overflow-hidden rounded-2xl border border-(--border) bg-(--bg-sec) shadow-lg",
                    className
                )}
                {...props}
            >
                <SelectPrimitive.Viewport className="p-1">
                    {children}
                </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
    );
}

export function SelectItem({ className, children, ...props }) {
    return (
        <SelectPrimitive.Item
            className={cn(
                "relative flex cursor-pointer select-none items-center rounded-xl px-3 py-2 text-sm text-(--text) outline-none",
                "focus:bg-white/10 data-[highlighted]:bg-white/10",
                className
            )}
            {...props}
        >
            <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
    );
}
