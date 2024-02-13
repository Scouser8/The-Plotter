import { configureStore } from "@reduxjs/toolkit";
import columns from "./columnsSlice";

export default configureStore({
  reducer: { columns },
});
