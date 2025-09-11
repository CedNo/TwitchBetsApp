import type { Wager } from '@/app/types/wager';

export type ChartData = {
    xData: Date[],
    yData: number[],
};

export type BetSeries = {
    name: string;
    data: Wager[];
};