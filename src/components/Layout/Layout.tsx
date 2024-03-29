import { Box } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <>
      <Header />
      <Box component="main" style={{ height: "90vh" }}>
        {children}
      </Box>
      <Footer />
    </>
  );
}
