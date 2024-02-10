import { LineChart } from "@mui/x-charts/LineChart";

export default function MultipleLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5, 12, 16],
          valueFormatter: (value) => (value == null ? "NaN" : value.toString()),
          curve: "linear",
          color: "gold",
        },
        {
          data: [3, 4.5, 6, 7, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={600}
      height={400}
    />
  );
}
