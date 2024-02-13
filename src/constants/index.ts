import { Dimensions, Measures } from "../types";

export const DIMENSION_FUNCTION = "dimension";
export const MEASURE_FUNCTION = "measure";

// Was added to use it with dummy data, could be left for later use
export const DIMENSIONS: Dimensions = [
  { name: "product", function: "dimension" },
  { name: "year", function: "dimension" },
  { name: "country", function: "dimension" },
];
export const MEASURES: Measures = [
  { name: "cost", function: "measure" },
  { name: "revenue", function: "measure" },
  { name: "units sold", function: "measure" },
];
