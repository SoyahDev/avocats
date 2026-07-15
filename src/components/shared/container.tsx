import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "wide" | "narrow";
  as?: React.ElementType;
}

/** Consistent max-width wrapper used across every section. */
export function Container({
  className,
  size = "wide",
  as: Comp = "div",
  ...props
}: ContainerProps) {
  return (
    <Comp
      className={cn(size === "wide" ? "container-wide" : "container-narrow", className)}
      {...props}
    />
  );
}
