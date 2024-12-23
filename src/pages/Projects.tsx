import Page from "../components/Page";
import {
  Box,
  Button,
  Card,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import project1 from "../img/project1.png";
import { useNavigate } from "react-router-dom";
import { theme } from "../theme";
function Projects() {
  const navigate = useNavigate();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Page>
      <Stack spacing={2} direction="column">
        <Typography color="primary" variant="h2">
          Projects
        </Typography>
        <Divider style={{ background: "#FFFFFF" }} />
        <Card>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            padding="1rem 1rem"
            justifyContent="space-around"
          >
            <Box component="img" src={project1} width={260} height={200} />
            <Box flex={1} />
            <Stack maxWidth={480} spacing={2}>
              <Typography color="primary" variant="h4">
                Pneumatic Elements Recongnition App
              </Typography>
              <Typography color="primary">
                Mobile App for recognition technical elements on technical
                drawing, using AI to identify each element. Build on React
                Native, back-end is provided with Flask. AI model is RecNet-50.
              </Typography>
              <Button
                variant="outlined"
                href="https://github.com/KaiKutar0/Penumatic-Elements-Recognition"
                target="_blank"
              >
                View
              </Button>
            </Stack>
          </Stack>
        </Card>
        {/* <Card>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            padding="1rem 1rem"
            justifyContent="space-around"
          >
            <Box component="img" src={project1} width={260} height={200} />
            <Box flex={1} />
            <Stack maxWidth={480} spacing={2}>
              <Typography color="primary" variant="h4">
                Pneumatic Elements Recongnition App
              </Typography>
              <Typography color="primary">
                Mobile App for recognition technical elements on technical
                drawing, using AI to identify each element. Build on React
                Native, back-end is provided with Flask. AI model is RecNet-50.
              </Typography>
              <Button
                variant="outlined"
                href="https://github.com/KaiKutar0/Penumatic-Elements-Recognition"
                target="_blank"
              >
                View
              </Button>
            </Stack>
          </Stack>
        </Card> */}
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
          onClick={() => navigate("/contacts")}
        >
          To contacts
        </Button>
      </Stack>
    </Page>
  );
}

export default Projects;
