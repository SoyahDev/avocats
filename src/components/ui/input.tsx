import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-12 w-full border-0 border-b border-navy-900/20 bg-transparent px-1 pb-2 pt-1 text-base text-navy-900 transition-colors duration-300 placeholder:text-muted-foreground/60 focus-visible:border-gold-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
