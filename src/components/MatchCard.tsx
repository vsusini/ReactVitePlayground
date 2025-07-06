import type { MatchCardData } from "@/lib/types";
import { Card, CardContent } from "./ui/card";
import { Computer, Search } from "lucide-react";
import { Separator } from "./ui/separator";
import { RoundedButton } from "./RoundedButton";

interface MatchCardProps {
  data: MatchCardData;
}

export function MatchCard({ data }: MatchCardProps) {
  const { gameTitle, gameImageUrl, format, matchId, wager, challenger, type } =
    data;

  const isChallenge = type === "challenge";

  return (
    <Card className="bg-[#232322] border-none text-white overflow-hidden">
      {/* Game Banner */}
      <div className="relative h-40 w-full">
        <img
          src={gameImageUrl}
          alt={gameTitle}
          className="object-cover w-full h-full"
        />
        {/* Optional Game Type Icon */}
        <div className="absolute top-2 left-2 bg-black/50 p-1 rounded">
          <Computer className="w-5 h-5" />
        </div>
        {/* Optional magnify icon for challenges */}
        {type === "challenge" && (
          <div className="absolute top-2 right-2 bg-[#30f497] p-1 rounded">
            <Search className="w-5 h-5 text-[#343434]" />
          </div>
        )}
      </div>

      <CardContent className="p-4 space-y-4">
        {/* Game Title and Format */}
        <div className="flex">
          <div>
            <h2 className="font-semibold text-left">{gameTitle}</h2>
            <p className="text-xs text-gray-400 text-left">
              Challenge ID: {matchId}
            </p>
          </div>

          <span className="mb-auto ml-auto font-semibold">{format}</span>
        </div>

        <Separator orientation="horizontal" className="my-4 bg-[#343434]" />

        {/* Wager Amount */}
        <div className="flex text-sm">
          <span className="text-[#14F195] font-medium">Wager amount:</span>{" "}
          <div className="ml-auto">
            <span className="font-semibold text-[#14F195]">
              {wager.amount} {wager.currency}
            </span>{" "}
            <span className="text-[#14F195] text-xs">
              ~${wager.approxValueUSD}
            </span>
          </div>
        </div>

        <Separator orientation="horizontal" className="my-4 bg-[#343434]" />

        {/* Challenger Info */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">
            {isChallenge ? "Challenge by:" : "Match by:"}
          </span>
          <div className="ml-auto flex items-center gap-2">
            <img
              src={challenger.avatarUrl}
              alt={challenger.name}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm font-medium">{challenger.name}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          {isChallenge ? (
            <>
              <RoundedButton className="bg-[#30f497] hover:bg-green-600 text-[#343434] w-30">
                Accept
              </RoundedButton>
              <RoundedButton className="bg-[#C51E3A] w-30 text-white">
                Decline
              </RoundedButton>
            </>
          ) : (
            <RoundedButton className="bg-[#343434] w-full">
              Inspect Match
            </RoundedButton>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
