import { ChartData } from "@/app/types/chart-data";
import { LineChart } from "@mui/x-charts";

export default function BetChart({ className, color, data } : { className? : string, color? : string, data : ChartData }) {

    const xData = data.xData;
    const yData = data.yData;

    return (
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
                valueFormatter: (day : Date) => formatDate(day),
            }]}
            series={[{ data: yData },
            ]}
            colors={[color ?? '#ffffff', color ?? '#ffffff']}
        />
    );
}

function formatDate(day : Date) : string {
    return `${('0' + day.getDate()).slice(-2)}/${('0' + (day.getMonth()+1)).slice(-2)}`;
}