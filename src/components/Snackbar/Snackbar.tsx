import MIUSnackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import {
  HorizontalAlignment,
  SnackSeverity,
  VerticalAlignment,
} from "../../types";
import {
  AUTO_HIDE_DURATION_MS,
  DEFAULT_HORIZONTAL_ALIGNMENT,
  DEFAULT_STATUS,
  DEFAULT_VERTICAL_ALIGNMENT,
} from "../../constants";
import { useState } from "react";

type Props = {
  message: string;
  status?: SnackSeverity;
  timeout?: number;
  vertical?: VerticalAlignment;
  horizontal?: HorizontalAlignment;
};

function Snackbar(props: Props) {
  const [open, setOpen] = useState(true);
  const {
    message,
    status = DEFAULT_STATUS,
    timeout = AUTO_HIDE_DURATION_MS,
    vertical = DEFAULT_VERTICAL_ALIGNMENT,
    horizontal = DEFAULT_HORIZONTAL_ALIGNMENT,
  } = props;

  const handleClose = () => setOpen(false);

  return (
    <MIUSnackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      message={message}
      key={vertical + horizontal}
      autoHideDuration={timeout}
      onClose={handleClose}
    >
      <Alert severity={status} sx={{ width: "100%" }} onClose={handleClose}>
        {message}
      </Alert>
    </MIUSnackbar>
  );
}

export default Snackbar;
