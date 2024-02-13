import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "../axios";
import { Column, Columns } from "../types";
import { DIMENSIONS, MEASURES } from "../constants";

export const fetchColumns = createAsyncThunk(
  "columns/login",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios("/columns");
      const columns = res.data.columns;

      const dimensions: Column[] = [];
      const measures: Column[] = [];

      columns.forEach((col: Column) => {
        if (col.function === "dimension") {
          dimensions.push(col);
        } else if (col.function === "measure") {
          measures.push(col);
        }
      });
      return { dimensions, measures };
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

type ColumnsState = { columns: Columns; error: string };

const initialState: ColumnsState = {
  columns: { dimensions: [], measures: [] },
  error: "",
};

const columnsSlice = createSlice({
  name: "columns",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder: ActionReducerMapBuilder<ColumnsState>) => {
    builder
      .addCase(fetchColumns.fulfilled, (state, action) => {
        state.columns = { ...action.payload } as any;
        state.error = "";
      })
      .addCase(fetchColumns.rejected, (state) => {
        // This was set when the APIs were not working, I'll leave it as a precaution to show the UI
        // in case an error happens.
        state.columns = {
          dimensions: [...DIMENSIONS],
          measures: [...MEASURES],
        } as any;
      });
  },
});

export default columnsSlice.reducer;
