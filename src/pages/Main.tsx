import Page from "../components/Page";
import {
  Box,
  Button,
  Grid2,
  Slide,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import me from "../img/me.jpg";
import { useNavigate } from "react-router-dom";
import { theme } from "../theme";

function Main() {
  const navigate = useNavigate();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Page>
      <Grid2 container spacing={24} flex={1}>
        <Grid2 size={{ sm: 6, xs: 12 }}>
          <Slide direction="right" in={true} style={{}} timeout={5000}>
            <Stack>
              <Typography
                color="primary"
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "4rem",
                    sm: "5rem",
                    md: "6rem",
                  },
                }}
              >
                Wellcome!
              </Typography>
              <Typography color="primary" variant="h2">
                I'm Yurii
              </Typography>
              <Typography color="primary" variant="h4">
                Fullstack Developer
              </Typography>
              <Box height={100} />
              <Box>
                <Button variant="contained" onClick={() => navigate("/about")}>
                  Learn More
                </Button>
              </Box>
            </Stack>
          </Slide>
        </Grid2>
        {matches && (
          <Grid2 size={{ sm: 6, xs: 12 }}>
            <Slide direction="left" in={true} style={{}} timeout={5000}>
              <Box
                borderRadius={5}
                component="img"
                src={me}
                sx={{
                  maxHeight: { xs: 120, md: 360 },
                  maxWidth: { xs: 150, md: 240 },
                }}
              />
            </Slide>
          </Grid2>
        )}
      </Grid2>
    </Page>
  );
}

export default Main;
