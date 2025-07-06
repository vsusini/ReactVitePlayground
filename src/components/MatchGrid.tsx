import { useState } from "react";
import SearchInput from "./SearchInput";
import { Skeleton } from "./ui/skeleton";
import { Eye, Filter, Gamepad2 } from "lucide-react";
import { RoundedButton } from "./RoundedButton";

interface MatchGridProps<T> {
  title: string;
  items: T[];
  renderCard: (item: T) => React.ReactNode;
  placeholder?: string;
  searchFn?: (item: T, query: string) => boolean;
  loading?: boolean;
  showControls?: boolean;
}

function SkeletonCard() {
  return (
    <div className="rounded-lg bg-neutral-800">
      <Skeleton className="h-40 w-full mb-4 rounded" />
      <div className="p-4">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-4" />
        <Skeleton className="h-8 w-full rounded-full" />
      </div>
    </div>
  );
}

export function MatchGrid<T>({
  title,
  items,
  renderCard,
  placeholder = "Search...",
  searchFn,
  loading = false,
  showControls = true,
}: MatchGridProps<T>) {
  const [query, setQuery] = useState("");

  const defaultSearch = (item: T, q: string) =>
    JSON.stringify(item).toLowerCase().includes(q.toLowerCase());

  const filteredItems = items.filter((item) =>
    (searchFn || defaultSearch)(item, query)
  );

  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-white text-left">{title}</h1>

      {showControls && (
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <SearchInput
            placeholder={placeholder}
            input={query}
            setInput={(e) => setQuery(e)}
            className="w-80 max-sm:w-full"
          />

          <div className="flex gap-2 max-sm:mx-auto">
            <RoundedButton
              className="bg-[#343434] text-white !px-5"
              icon={<Eye className="w-4 h-4 mr-1 max-sm:hidden" />}
            >
              All Games
            </RoundedButton>
            <RoundedButton
              className="bg-[#343434] text-white !px-5"
              icon={<Filter className="w-4 h-4 mr-1 max-sm:hidden" />}
            >
              Filters
            </RoundedButton>
            <RoundedButton
              className="bg-[#30f497] text-[#343434] hover:bg-green-300 px-5 sm:w-50"
              onClick={() => console.log("Create Match clicked")}
              icon={<Gamepad2 className="w-4 h-4 mr-1 max-sm:hidden" />}
            >
              Create Match
            </RoundedButton>
          </div>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
        ) : filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index}>{renderCard(item)}</div>
          ))
        ) : (
          <p className="col-span-full text-center text-white">
            No results found.
          </p>
        )}
      </div>
    </div>
  );
}
