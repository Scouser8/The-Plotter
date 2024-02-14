import { Dimensions, Measures } from "../types";

export const DIMENSION_FUNCTION = "dimension";
export const MEASURE_FUNCTION = "measure";

export const STATISTICS_NOT_FETCHED = "unfetched";
export const STATISTICS_FETCHED_SUCCESSFULLY = "success";
export const STATISTICS_FETCH_FAILED = "fail";

// Was added to use it with dummy data, could be left for later use
export const DIMENSIONS: Dimensions = [
  { name: "Product", function: "dimension" },
  { name: "Year", function: "dimension" },
  { name: "Country", function: "dimension" },
];
export const MEASURES: Measures = [
  { name: "Cost", function: "measure" },
  { name: "Revenue", function: "measure" },
  { name: "Units sold", function: "measure" },
];

export const SNACKBAR_SUCCESS = "success";
export const SNACKBAR_ERROR = "error";
export const SNACKBAR_WARNING = "warning";
export const SNACKBAR_INFO = "info";

export const AUTO_HIDE_DURATION_MS = 5000;

export const DEFAULT_STATUS = SNACKBAR_INFO;

export const DEFAULT_VERTICAL_ALIGNMENT = "top";
export const DEFAULT_HORIZONTAL_ALIGNMENT = "right";
