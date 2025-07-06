import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // tailwind class merging
import { Loader2Icon } from "lucide-react";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface RoundedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  icon?: ReactNode;
  loading?: boolean;
}

export function RoundedButton({
  children,
  className,
  size = "default",
  icon,
  loading = false,
  ...props
}: RoundedButtonProps) {
  return (
    <Button
      className={cn(
        "rounded-full cursor-pointer px-4 py-2 text-sm font-bold flex items-center justify-center",
        className
      )}
      size={size}
      {...props}
      disabled={loading || props.disabled}
    >
      {" "}
      {loading ? <Loader2Icon className="animate-spin" /> : icon}
      {children}
    </Button>
  );
}
