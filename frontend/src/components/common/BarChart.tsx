import { Bar, BarChart as BarGraph, CartesianGrid, XAxis, YAxis } from "recharts"
import { Chart, useChart } from "@chakra-ui/charts"

interface DataPoint {
    [key: string]: string | number
}

interface Series {
    name: string
    color: string
}

interface BarChartProps {
    data: DataPoint[]
    series: Series[]
    xKey: string
}

const BarChart = ({ data, series, xKey }: BarChartProps) => {
    const chart = useChart({
        data,
        series,
    })

    return (
        <Chart.Root maxH="sm" chart={chart}>
            <BarGraph data={chart.data}>
                <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
                <XAxis axisLine={false} tickLine={false} dataKey={chart.key(xKey)} />
                <YAxis
                    axisLine={false}
                    tickLine={false}
                    domain={[0, 100]}
                    tickFormatter={(value) => `${value}%`}
                />
                {chart.series.map((item) => (
                    <Bar
                        key={item.name}
                        isAnimationActive={false}
                        dataKey={chart.key(item.name)}
                        fill={chart.color(item.color)}
                    />
                ))}
            </BarGraph>
        </Chart.Root>
    )
}

export default BarChart
