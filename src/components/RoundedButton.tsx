import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // tailwind class merging
import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface RoundedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export function RoundedButton({
  children,
  className,
  ...props
}: RoundedButtonProps) {
  return (
    <Button
      className={cn(
        "rounded-full px-4 py-2 text-sm font-bold flex items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}