import Page from "../components/Page";
import {
  Box,
  Button,
  Card,
  Grid2,
  Slide,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
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
              <Box height={50}></Box>
              {!matches && (
                <Card>
                  <Stack spacing={2} direction="column">
                    <Button
                      startIcon={<LinkedInIcon />}
                      href="https://www.linkedin.com/in/yurii-vasylchenko-1677b9275/"
                      target="_blank"
                    >
                      LinkedIn
                    </Button>
                    <Button
                      startIcon={<GitHubIcon />}
                      href="https://github.com/KaiKutar0"
                      target="_blank"
                    >
                      GitHub
                    </Button>
                  </Stack>
                </Card>
              )}
              <Box height={50}></Box>
              <Button
                variant="contained"
                sx={
                  matches
                    ? {
                        minHeight: "50px",
                        maxWidth: "200px",
                        fontWeight: 700,
                        fontSize: "1rem",
                      }
                    : {}
                }
                onClick={() => navigate("/about")}
              >
                Learn More
              </Button>
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
