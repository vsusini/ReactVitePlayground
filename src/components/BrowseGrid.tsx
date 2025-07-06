import { MatchGrid } from "@/components/MatchGrid";
import { MatchCard } from "@/components/MatchCard";
import type { MatchCardData } from "@/lib/types";
import { browseMatches } from "@/lib/data";

export default function BrowseGrid() {
  return (
    <div>
      <MatchGrid<MatchCardData>
        title="Browse Matches"
        items={browseMatches}
        placeholder="Search match, challenger, game..."
        renderCard={(item) => <MatchCard data={item} />}
        searchFn={(item, q) =>
          item.gameTitle.toLowerCase().includes(q.toLowerCase()) ||
          item.challenger.name.toLowerCase().includes(q.toLowerCase()) ||
          item.matchId.includes(q)
        }
      />
    </div>
  );
}
