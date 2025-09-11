import type { Wager } from "@/app/types/wager";

export type BetOption = {
    id : string;
    option : string;
    bets : Wager[];
    currentAmount : number;
    odds : number;
};