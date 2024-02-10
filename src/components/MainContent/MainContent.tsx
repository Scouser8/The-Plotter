import SelectedColumns from "../SelectedColumns";
import MultipleLineChart from "../LineChart";
import { Container } from "@mui/material";

function MainContent() {
  return (
<Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <SelectedColumns />
      <MultipleLineChart />
    </Container>
  );
}

export default MainContent;
