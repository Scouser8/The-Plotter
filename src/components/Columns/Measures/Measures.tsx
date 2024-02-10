import { List, Typography } from "@mui/material";
import columnStyles from "../../../styles/columns.styles";

function Measures() {
  const handleOnDrag = (e: React.DragEvent, column: string) => {
    e.dataTransfer.setData("column", column);
  };
  return (
    <List sx={columnStyles.columnsGroup}>
      <Typography sx={columnStyles.header}>Measures</Typography>
      {["Cost", "Revenue", "Units Sold"].map((text) => (
        <div key={text} onDragStart={(e) => handleOnDrag(e, text)}>
          <Typography key={text} sx={columnStyles.column} draggable>
            {text}
          </Typography>
        </div>
      ))}
    </List>
  );
}

export default Measures;
