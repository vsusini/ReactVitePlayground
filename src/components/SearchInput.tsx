import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

function SearchInput({
  input,
  setInput,
  placeholder = "Search...",
  className = "",
}: {
  input: string;
  setInput: (value: string) => void;
  placeholder?: string;
  className?: string;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div className={cn("relative", className)}>
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-white" />
      <Input
        onChange={handleChange}
        type="search"
        placeholder={placeholder}
        className="pl-9 rounded-xs bg-[#2A2A2A] border border-transparent text-white placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-gray-600"
        value={input}
      />
    </div>
  );
}

export default SearchInput;
