import type { Bet } from "@/app/types/bet";

export type BetOption = {
    id : string;
    option : string;
    bets : Bet[];
    currentAmount : number;
    odds : number;
};