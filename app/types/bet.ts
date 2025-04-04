export type Bet = {
    id: string;
    title: string;
    betOptions: BetOption[];
    endDate?: Date;
    image: string;
}

export type BetOption = {
    option: string;
    odds: number;
    amount: number;
}