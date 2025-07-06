export type MatchType = "challenge" | "browse";

export interface MatchCardData {
  id: string;
  gameTitle: string;
  gameImageUrl: string;
  format: string; // e.g., "3 vs 3"
  matchId: string;
  wager: {
    amount: number;
    currency: string; // "SOL"
    approxValueUSD: number;
  };
  challenger: {
    name: string;
    avatarUrl: string;
  };
  type: MatchType;
}