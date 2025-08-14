import { BetSeries } from "@/app/types/chart-data";
import { LineChart } from "@mui/x-charts";
import { useState } from "react";
import Button from "@/app/components/button";
import type { LineSeriesType } from "@mui/x-charts/models/seriesType/line";

export default function BetQuestionChart({ className, color, data } : { className? : string, color? : string, data : BetSeries[] }) {

    const [timespan, setTimespan] = useState('week');

    const xData : Date[] = [];
    if(timespan === "week") {
        for(let i = 6; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            xData.push(date);
        }
    }
    else if(timespan === "day") {
        for(let i = 23; i >= 0; i--) {
            const date = new Date();
            date.setHours(date.getHours() - i);
            xData.push(date);
        }
    }
    else if(timespan === "hour") {
        for(let i = 59; i >= 0; i--) {
            const date = new Date();
            date.setMinutes(date.getMinutes() - i);
            xData.push(date);
        }
    }

    const series = data.map((betSeries) => {
        const yData = xData.map((date) => {
            if(timespan === "week") {
                const bet = betSeries.data.find(b => new Date(b.createdAt).getDate() === date.getDate());
                return bet ? bet.amount : 0;
            }
            if(timespan === "day") {
                const bet = betSeries.data.find(b => new Date(b.createdAt).getHours() === date.getHours());
                return bet ? bet.amount : 0;
            }
            if(timespan === "hour") {
                const bet = betSeries.data.find(b => new Date(b.createdAt).getMinutes() === date.getMinutes());
                return bet ? bet.amount : 0;
            }
        }
        );
        return {
            data: yData
        } as LineSeriesType;
    }
    );

    return (
        <div className="flex flex-col gap-2 h-90">
            <LineChart
                className={className}
                sx={{
                    "& .MuiChartsAxis-tickLabel":{
                        fill: color + "!important"
                    },
                    "& .MuiChartsAxis-line":{
                        stroke: color + "!important"
                    },
                    "& .MuiChartsAxis-tick":{
                        stroke: color + "!important"
                    }
                }}
                xAxis={[{
                    scaleType: 'utc',
                    data: xData,
                    valueFormatter: (day : Date) => formatDateTime(day, timespan),
                }]}
                series={ series }
                colors={[color ?? '#ffffff', color ?? '#ffffff']}
                
            />
            <div className="flex flex-row gap-2 justify-start *:bg-ternary-bg *:rounded-lg *:p-2 *:hover:opacity-80 sm:px-0 sm:pb-0 px-5 pb-5">
                <Button onClick={() => setTimespan("hour")}>1h</Button>
                <Button onClick={() => setTimespan("day")}>1d</Button>
                <Button onClick={() => setTimespan("week")}>7d</Button>
            </div>
        </div>
    );
}

function formatDate(day : Date) : string {
    return `${('0' + day.getDate()).slice(-2)}/${('0' + (day.getMonth()+1)).slice(-2)}`;
}

function formatTime(day : Date) : string {
    return `${('0' + day.getHours()).slice(-2)}:${('0' + day.getMinutes()).slice(-2)}`;
}

function formatDateTime(day : Date, timespan : string) : string {
    if(timespan === "hour" || timespan === "day") {
        return formatTime(day);
    }
    return formatDate(day);
}