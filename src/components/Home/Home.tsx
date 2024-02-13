import { useSelector } from "react-redux";
import Columns from "../Columns";
import MainContent from "../MainContent";
import { AppDispatch, RootState } from "../../types";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { fetchColumns } from "../../store/columnsSlice";
import { useDispatch } from "react-redux";

function Home() {
  const { columns, error: columnsFetchError } = useSelector(
    (state: RootState) => state.columns
  );
  const dispatch = useDispatch<AppDispatch>();
  const { dimensions, measures } = columns;
  const didColumnsLoad =
    dimensions.length && measures.length && !columnsFetchError;

  useEffect(() => {
    // So, this could be simply called directly with Axios, & actually using Redux on this App is an overkill,
    // however I liked to use it to show the ability of doing so that could be used later to use for example
    // Master Data that will be needed all over the application on scaling the project.
    dispatch(fetchColumns());
  }, []);
  return didColumnsLoad ? (
    <div style={{ height: "100%", display: "flex" }}>
      <Columns />
      <MainContent />
    </div>
  ) : (
    <CircularProgress />
  );
}

export default Home;
