import { Bet } from "./bet";

export type BetOption = {
    id : string;
    option : string;
    bets : Bet[]
};