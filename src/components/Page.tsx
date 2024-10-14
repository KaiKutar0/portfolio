import { Box } from "@mui/material";
import background from "../img/background.svg";

function Page({
  children,
}: {
  children: JSX.Element[] | JSX.Element | string;
}) {
  return (
    <Box
      sx={{
        height: "100vh",
        padding: "1rem 1.5rem",
        // display: "flex",
        // justifyContent: "center",

        backgroundImage: `url(${background})`,
      }}
    >
      {children}
    </Box>
  );
}

export default Page;
