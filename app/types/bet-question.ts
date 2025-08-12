import { BetOption } from "./bet-option";

export type BetQuestion = {
    id : string;
    question : string;
    options : BetOption[];
    endTime : Date;
    currentBettedAmount : number;
    currentOddsOfOptions : Map<string, number>;
};