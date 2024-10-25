import { Box, useMediaQuery } from "@mui/material";
import background from "../img/background.gif";
import { theme } from "../theme";

function Page({
  children,
}: {
  children: JSX.Element[] | JSX.Element | string;
}) {
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: matches ? "6rem 12rem" : "2rem 4rem",
        // display: "flex",
        // justifyContent: "center",
        // backgroundSize: "cover",
        backgroundImage: `url(${background})`,
      }}
    >
      {children}
    </Box>
  );
}

export default Page;
