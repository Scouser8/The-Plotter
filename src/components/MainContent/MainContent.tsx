import SelectedColumns from "../SelectedColumns";
import MultipleLineChart from "../LineChart";
import { Container } from "@mui/material";
import { useState } from "react";
import { useGetLineChartStatistics } from "../../hooks";

export type SelectedColumnsState = {
  selectedDimension: string;
  selectedMeasures: string[];
};

function MainContent() {
  const [selectedColumns, setSelectedColumns] = useState<SelectedColumnsState>({
    selectedDimension: "",
    selectedMeasures: [],
  });
  const statistics = useGetLineChartStatistics(selectedColumns);

  console.log("statistics", statistics);

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <SelectedColumns
        selectedColumns={selectedColumns}
        setSelectedColumns={setSelectedColumns}
      />
      <MultipleLineChart statistics={statistics} />
    </Container>
  );
}

export default MainContent;
