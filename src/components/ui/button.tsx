import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium tracking-[0.01em] transition-all duration-500 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-navy-900 text-cream hover:bg-navy-800 shadow-soft hover:shadow-elegant",
        gold: "bg-gold-400 text-navy-950 hover:bg-gold-300 shadow-soft hover:shadow-gold-glow",
        outline:
          "border border-navy-900/20 bg-transparent text-navy-900 hover:border-navy-900/40 hover:bg-navy-900/[0.03]",
        ghost: "text-navy-900 hover:bg-navy-900/[0.05]",
        light:
          "border border-cream/30 bg-transparent text-cream hover:border-cream/60 hover:bg-cream/[0.08] focus-visible:ring-offset-navy-950",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5 text-[0.8rem]",
        lg: "h-14 px-8 text-[0.9rem]",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
