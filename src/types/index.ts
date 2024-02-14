import {
  DIMENSION_FUNCTION,
  MEASURE_FUNCTION,
  STATISTICS_FETCHED_SUCCESSFULLY,
  STATISTICS_FETCH_FAILED,
  STATISTICS_NOT_FETCHED,
} from "./../constants/index";
import store from "../store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ColumnFunction =
  | typeof DIMENSION_FUNCTION
  | typeof MEASURE_FUNCTION;

export type Column = { name: string; function: ColumnFunction };

export type Dimensions = Column[];
export type Measures = Column[];

export type Columns = {
  dimensions: Column[];
  measures: Column[];
};

type ChartColumn = { name: string; values: [] };

export type LineChartStatisticsInfo = {
  data: { dimension: ChartColumn; measures: ChartColumn[] };
  status: StatisticsStatus;
  error: string;
};

export type StatisticsStatus =
  | typeof STATISTICS_FETCHED_SUCCESSFULLY
  | typeof STATISTICS_FETCH_FAILED
  | typeof STATISTICS_NOT_FETCHED;

export type SnackSeverity = "error" | "success" | "warning" | "info";

export type VerticalAlignment = "top" | "bottom";

export type HorizontalAlignment = "left" | "center" | "right";
