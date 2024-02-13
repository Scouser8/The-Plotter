import { DIMENSION_FUNCTION, MEASURE_FUNCTION } from "./../constants/index";
import store from "../store";

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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
