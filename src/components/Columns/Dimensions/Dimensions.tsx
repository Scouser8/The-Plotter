import { List, Typography } from "@mui/material";
import columnStyles from "../../../styles/columns.styles";
import { RootState } from "../../../types";
import { useSelector } from "react-redux";
import { handleDragElement } from "../../../utils";

function Dimensions() {
  const { columns } = useSelector((state: RootState) => state.columns);
  const { dimensions } = columns;

  return (
    <List sx={columnStyles.columnsGroup}>
      <Typography sx={columnStyles.header}>Dimensions</Typography>
      {dimensions.map((column) => (
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

export default Dimensions;
