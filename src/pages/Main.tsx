import React from "react";
import Page from "../components/Page";
import {
  Box,
  Card,
  Divider,
  Grid2,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import me from "../img/me.jpg";
import project1 from "../img/project1.png";
function Main() {
  return (
    <Page>
      {/* <Grid2 container spacing={6} flex={1}>
        <Grid2 size={{ sm: 6, xs: 12 }}>
          <Card>
            <Box
              component="img"
              sx={{
                height: 180,
                width: 150,
                maxHeight: { xs: 120, md: 180 },
                maxWidth: { xs: 90, md: 150 },
              }}
              alt="me"
              src={me}
            />
          </Card>
        </Grid2>
        <Grid2 size={{ sm: 6, xs: 12 }}></Grid2>
        <Grid2 size={{ md: 4, sm: 6, xs: 12 }}>
          <Card>
            <Box
              component="img"
              sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="The house from the offer."
              src={project1}
            />
            <Typography variant="h5">
              <Link href="https://github.com/KaiKutar0/Penumatic-Elements-Recognition">
                Pneumatic recognition
              </Link>
            </Typography>
          </Card>
        </Grid2>
        <Grid2 size={{ md: 4, sm: 6, xs: 12 }}>
          <Card>Hi</Card>
        </Grid2>
      </Grid2> */}
      <Box display="flex" justifyContent="center">
        <Stack>
          <Typography color="primary" variant="h1">
            Wellcome!
          </Typography>
          <Divider />
          <Typography>Hi</Typography>
        </Stack>
      </Box>
    </Page>
  );
}

export default Main;
