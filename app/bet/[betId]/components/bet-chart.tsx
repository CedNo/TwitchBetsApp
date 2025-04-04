import { LineChart } from "@mui/x-charts";

export default function BetChart({className} : {className?: string}) {

    return (
        <LineChart
            className={className}
            sx={{
                "& .MuiChartsAxis-tickLabel":{
                    fill:'#ffffff'
                },
                "& .MuiChartsAxis-line":{
                stroke:'#ffffff'
                },
                "& .MuiChartsAxis-tick":{
                    stroke:'#ffffff'
                }
            }}
            xAxis={[{ data: [1, 2, 3, 5, 8, 10]}]}
            series={[
                {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
            ]}
            colors={['#ffffff', '#ffffff']}
        />
    );
}