import { Column, LineChartStatisticsInfo } from "../types";
import { useEffect, useState } from "react";

import axios from "../axios";
import { SelectedColumnsState } from "../components/MainContent/MainContent";
import {
  STATISTICS_FETCHED_SUCCESSFULLY,
  STATISTICS_FETCH_FAILED,
  STATISTICS_NOT_FETCHED,
} from "../constants";

const defaultValue: LineChartStatisticsInfo = {
  data: { dimension: { name: "", values: [] }, measures: [] },
  status: STATISTICS_NOT_FETCHED,
  error: "",
};

const useGetLineChartStatistics = (selectedColumns: SelectedColumnsState) => {
  const [statistics, setStatistics] =
    useState<LineChartStatisticsInfo>(defaultValue);

  const { selectedDimension, selectedMeasures } = selectedColumns;

  useEffect(() => {
    if (selectedDimension && selectedMeasures.length) {
      axios
        .post("/data", {
          dimension: selectedDimension,
          measures: selectedMeasures,
        })
        .then((res: any) => {
          const response = res.data.data as any;

          // This couldn't be really needed now as I see it always returns the Dimensions on index [0] always,
          // but incase this changes here we make sure everything still works.
          const chartDimension = response.find(
            (col: Column) => col.name === selectedDimension
          );
          const chartMeasures = response.filter(
            (col: Column) => col.name !== selectedDimension
          );

          setStatistics({
            data: { dimension: chartDimension, measures: chartMeasures },
            status: STATISTICS_FETCHED_SUCCESSFULLY,
            error: "",
          });
        })
        .catch((res) => {
          // Maintain last statistics state so UI won't change for the Chart, but the user can know the
          // fetching has failed.
          setStatistics((prevState) => ({
            ...prevState,
            status: STATISTICS_FETCH_FAILED,
            error: res.error,
          }));
        });
    } else {
      setStatistics(defaultValue);
    }
  }, [selectedColumns]);

  return statistics;
};

export { useGetLineChartStatistics };
