import { MatchGrid } from "@/components/MatchGrid";
import { MatchCard } from "@/components/MatchCard";
import type { MatchCardData } from "@/lib/types";
import { challengeMatches } from "@/lib/data";

export default function ChallengesGrid() {
  return (
    <div className="pt-6">
      <MatchGrid<MatchCardData>
        title="Challenges"
        items={challengeMatches}
        placeholder="Search match, challenger, game..."
        renderCard={(item) => <MatchCard data={item} />}
        showControls={false}
        loading={false}
      />
    </div>
  );
}
