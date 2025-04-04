import { LineChart } from "@mui/x-charts";

export default function BetChart() {
    return (
        <LineChart
                    sx={{
                        "& .MuiChartsAxis-tickLabel":{
                            fill:"var(--color-foreground)"
                        },
                        "& .MuiChartsAxis-line":{
                        stroke:"var(--color-foreground)"
                        },
                        "& .MuiChartsAxis-tick":{
                            stroke:"var(--color-foreground)"
                        }
                    }}
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10]}]}
                    series={[
                        {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                        },
                    ]}
                    width={500}
                    height={300}
                    colors={["var(--color-foreground)", "var(--color-foreground)"]}
                />
    );
}