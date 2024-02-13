import { List, Typography } from "@mui/material";
import columnStyles from "../../../styles/columns.styles";
import { handleDragElement } from "../../../utils";
import { RootState } from "../../../types";
import { useSelector } from "react-redux";

function Measures() {
  const { columns } = useSelector((state: RootState) => state.columns);
  const { measures } = columns;
  return (
    <List sx={columnStyles.columnsGroup}>
      <Typography sx={columnStyles.header}>Measures</Typography>
      {measures.map((column) => (
        <div
          key={column.name}
          onDragStart={(e) => handleDragElement(e, column)}
        >
          <Typography sx={columnStyles.column} draggable>
            {column.name}
          </Typography>
        </div>
      ))}
    </List>
  );
}

export default Measures;
