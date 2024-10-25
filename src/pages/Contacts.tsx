import Page from "../components/Page";
import {
  Box,
  Divider,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { theme } from "../theme";

function Contacts() {
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Page>
      <Box>
        <Typography color="primary" variant="h2">
          Contacts
        </Typography>
        <Divider style={{ background: "#FFFFFF" }} />
        <Box height={20} />
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Typography color="primary">phone: +48 500 490 324</Typography>
          <Divider
            style={{ background: "#FFFFFF" }}
            orientation={matches ? "vertical" : "horizontal"}
            flexItem
          />
          <Link href="mailto:yurii.vasylchenko228@gmail.com">
            e-mail: kaiokun228@gmail.com
          </Link>
        </Stack>
      </Box>
    </Page>
  );
}

export default Contacts;
