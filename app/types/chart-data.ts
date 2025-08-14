import type { Bet } from '@/app/types/bet';

export type ChartData = {
    xData: Date[],
    yData: number[],
};

export type BetSeries = {
    name: string;
    data: Bet[];
};