"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends ButtonProps {
  href?: string;
  showArrow?: boolean;
}

/**
 * Premium CTA with a sliding-arrow micro-interaction.
 * Renders an anchor when `href` is set, otherwise a button.
 */
export function AnimatedButton({
  href,
  showArrow = true,
  children,
  className,
  ...props
}: AnimatedButtonProps) {
  const content = (
    <span className="group/btn relative inline-flex items-center gap-2.5 overflow-hidden">
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <span className="relative z-10 overflow-hidden">
          <ArrowRight className="transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-6" />
          <ArrowRight className="absolute inset-0 -translate-x-6 transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-0" />
        </span>
      )}
    </span>
  );

  return (
    <motion.div
      className="inline-flex"
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.99 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {href ? (
        <Button asChild className={cn(className)} {...props}>
          <a href={href}>{content}</a>
        </Button>
      ) : (
        <Button className={cn(className)} {...props}>
          {content}
        </Button>
      )}
    </motion.div>
  );
}
