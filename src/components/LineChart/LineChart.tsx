import { LineChart } from "@mui/x-charts/LineChart";
import { LineChartStatisticsInfo } from "../../types";

type Props = {
  statistics: LineChartStatisticsInfo;
};

export default function MultipleLineChart(props: Props) {
  const {
    statistics: {
      data: { dimension, measures },
    },
  } = props;
  const dimensionListSize = dimension.values.length;
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
        // The slicing below is just a work around as columns length seems not to be matching.
        data: (measure?.values.length === dimensionListSize
          ? measure.values
          : measure.values.slice(0, dimensionListSize)) as number[],
        curve: "linear",
        label: measure.name,
      }))}
      width={1100}
      height={450}
      colors={["teal", "tomato", "goldenrod"]}
    />
  );
}

// Will leave it here to use it if needed as mock data
// const testResponse = {
//   data: [
//     {
//       name: "Product",
//       values: [
//         "Diskette",
//         "Memory Card",
//         "HDTV Tuner",
//         "Flat Panel Graphics Monitor",
//         "Digital Camera",
//         "Minitower Speaker",
//         "Extension Cable",
//         "Y Box",
//       ],
//     },
//     {
//       name: "Cost",
//       values: [333.08, 43.07, 10.77, 194.76, 17.18, 43.3, 120.2, 605],
//     },
//     {
//       name: "Revenus",
//       values: [133.08, 17.07, 40.77, 44.76, 73.18, 193.3, 220.2, 405],
//     },
//     {
//       name: "Units sold",
//       values: [233.08, 86.07, 90.77, 164.76, 43.18, 143.3, 20.2, 805],
//     },
//   ],
// };
