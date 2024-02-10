import { List, Typography } from "@mui/material";
import columnStyles from "../../../styles/columns.styles";

function Dimensions() {
  const handleOnDrag = (e: React.DragEvent, column: string) => {
    e.dataTransfer.setData("column", column);
  };
  return (
    <List sx={columnStyles.columnsGroup}>
      <Typography sx={columnStyles.header}>Dimensions</Typography>
      {["Product", "Year", "Country"].map((text) => (
        <div key={text} onDragStart={(e) => handleOnDrag(e, text)}>
          <Typography key={text} sx={columnStyles.column} draggable>
            {text}
          </Typography>
        </div>
      ))}
    </List>
  );
}

export default Dimensions;
