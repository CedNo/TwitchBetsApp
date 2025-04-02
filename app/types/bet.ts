export type Bet = {
    id: string;
    title: string;
    betOptions: BetOption[];
    image: string;
}

type BetOption = {
    option: string;
    odds: number;
}