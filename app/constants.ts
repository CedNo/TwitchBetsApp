import type { Bet } from './types/bet';
import { ChartData } from './types/chart-data';

export const BETS: Bet[] = [
    {id:'1', title: 'Will @Someone stream today? aaaaaaaaa aaaaaaaaaa aaaaaaa', betOptions: [{option: 'Yes', odds: 0.45, amount: 9000}, {option: 'No', odds: 0.35, amount: 7000} , {option: 'Maybe', odds: 0.20, amount: 4000}], endDate: new Date('2025-04-05T00:00:00'), image: '/coin.png'},
    {id:'2', title: 'Will @Someone stream today?', betOptions: [{option: 'Yes', odds: 0.65, amount: 13000}, {option: 'No', odds: 0.35, amount: 7000}], endDate: new Date('2025-04-06T00:00:00'), image: '/coin.png'},
    {id:'3', title: 'Will @Someone stream today?', betOptions: [{option: 'Yes', odds: 0.65, amount: 13000}, {option: 'No', odds: 0.35, amount: 7000}], endDate: new Date('2025-04-07T00:00:00'), image: '/coin.png'},
    {id:'4', title: 'Will @Someone stream today?', betOptions: [{option: 'Yes', odds: 0.65, amount: 13000}, {option: 'No', odds: 0.35, amount: 7000}], endDate: new Date('2025-04-07T00:00:00'), image: '/coin.png'},
    {id:'5', title: 'Will @Someone stream today?', betOptions: [{option: 'Yes', odds: 0.65, amount: 13000}, {option: 'No', odds: 0.35, amount: 7000}], endDate: new Date('2025-04-08T00:00:00'), image: '/coin.png'},
    {id:'6', title: 'Will @Someone stream today?', betOptions: [{option: 'Yes', odds: 0.65, amount: 13000}, {option: 'No', odds: 0.35, amount: 7000}], endDate: new Date('2025-04-09T00:00:00'), image: '/coin.png'},
    {id:'7', title: 'Will @Someone stream today?', betOptions: [{option: 'Yes', odds: 0.65, amount: 13000}, {option: 'No', odds: 0.35, amount: 7000}], endDate: new Date('2025-04-10T00:00:00'), image: '/coin.png'},
    {id:'8', title: 'Will @Someone stream today?', betOptions: [{option: 'Yes', odds: 0.65, amount: 13000}, {option: 'No', odds: 0.35, amount: 7000}], endDate: new Date('2025-04-11T00:00:00'), image: '/coin.png'},
    {id:'9', title: 'Will @Someone stream today?', betOptions: [{option: 'Yes', odds: 0.65, amount: 13000}, {option: 'No', odds: 0.35, amount: 7000}], endDate: new Date('2025-04-12T00:00:00'), image: '/coin.png'},
    {id:'10', title: 'Will @Someone stream today?', betOptions: [{option: 'Yes', odds: 0.65, amount: 13000}, {option: 'No', odds: 0.35, amount: 7000}], endDate: new Date('2025-04-13T00:00:00'), image: '/coin.png'},
    {id:'11', title: 'Will @Someone stream today?', betOptions: [{option: 'Yes', odds: 0.65, amount: 13000}, {option: 'No', odds: 0.35, amount: 7000}], endDate: new Date('2025-04-14T00:00:00'), image: '/coin.png'},
    {id:'12', title: 'Will @Someone stream today?', betOptions: [{option: 'Yes', odds: 0.65, amount: 13000}, {option: 'No', odds: 0.35, amount: 7000}], endDate: new Date('2025-04-015T00:00:00'), image: '/coin.png'}
];

export const CHART_DATA: ChartData = {
    xData: [new Date("2025-04-04"), new Date("2025-04-05"), new Date("2025-04-06"), new Date("2025-04-07"), new Date("2025-04-08"), new Date("2025-04-09"), new Date("2025-04-10")],
    yData: [10000, 12200, 9400, 7200, 8900, 11800, 14400]
}