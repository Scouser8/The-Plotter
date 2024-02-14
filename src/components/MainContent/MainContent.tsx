import SelectedColumns from "../SelectedColumns";
import MultipleLineChart from "../LineChart";
import { Container } from "@mui/material";
import { Fragment, useState } from "react";
import { useGetLineChartStatistics } from "../../hooks";
import Snackbar from "../Snackbar";
import {
  SNACKBAR_ERROR,
  SNACKBAR_SUCCESS,
  STATISTICS_FETCHED_SUCCESSFULLY,
} from "../../constants";

const SUCCUSSFULLY_FETCHED_STATISTICS =
  "Chart is updated with your selected Columns";

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

  const shouldNotifyUser =
    statistics.error || statistics.status === STATISTICS_FETCHED_SUCCESSFULLY;
  const notificationMessage =
    statistics.error || SUCCUSSFULLY_FETCHED_STATISTICS;

  return (
    <Fragment>
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <SelectedColumns
          selectedColumns={selectedColumns}
          setSelectedColumns={setSelectedColumns}
        />
        <MultipleLineChart statistics={statistics} />
      </Container>
      {shouldNotifyUser && (
        <Snackbar
          message={notificationMessage}
          status={statistics.error ? SNACKBAR_ERROR : SNACKBAR_SUCCESS}
        />
      )}
    </Fragment>
  );
}

export default MainContent;
