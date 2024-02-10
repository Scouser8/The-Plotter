import { LineChart } from "@mui/x-charts/LineChart";

const colors: { [key: string]: string } = {
  Cost: "green",
};

export default function MultipleLineChart() {
  const dimension = testResponse.data.find(({ name }) => name === "Product");
  const measures = testResponse.data.filter(({ name }) => name !== "Product");
  return (
    <LineChart
      xAxis={[
        {
          data: dimension?.values,
          label: dimension?.name,
          scaleType: "point",
        },
      ]}
      series={measures.map((measure) => ({
        data: measure?.values as number[],
        curve: "linear",
        // color: colors[measure?.name],
        label: measure.name,
      }))}
      width={1100}
      height={450}
      colors={["teal", "tomato", "goldenrod"]}
    />
  );
}

const testResponse = {
  data: [
    {
      name: "Product",
      values: [
        "Diskette",
        "Memory Card",
        "HDTV Tuner",
        "Flat Panel Graphics Monitor",
        "Digital Camera",
        "Minitower Speaker",
        "Extension Cable",
        "Y Box",
      ],
    },
    {
      name: "Cost",
      values: [333.08, 43.07, 10.77, 194.76, 17.18, 43.3, 120.2, 605],
    },
    {
      name: "Cost 1",
      values: [133.08, 17.07, 40.77, 44.76, 73.18, 193.3, 220.2, 405],
    },
    {
      name: "Cost 2",
      values: [233.08, 86.07, 90.77, 164.76, 43.18, 143.3, 20.2, 805],
    },
  ],
};
