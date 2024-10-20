import Page from "../components/Page";
import {
  Box,
  Card,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import typescriptIcon from "../img/typescript.svg";
import javascriptIcon from "../img/javascript.svg";
import javaIcon from "../img/java.svg";
import pythonIcon from "../img/python.svg";
import nodeIcon from "../img/node.svg";
import reactIcon from "../img/react.svg";
import springIcon from "../img/spring.svg";
import nestIcon from "../img/nest.svg";
import reduxIcon from "../img/redux.svg";
import flaskIcon from "../img/flask.svg";
import pytorchIcon from "../img/pytorch.svg";
import awsIcon from "../img/aws.svg";
import graphqlIcon from "../img/graphql.svg";
import mysqlIcon from "../img/mysql.svg";
import restapiIcon from "../img/restapi.svg";

import { theme } from "../theme";

function About() {
  return (
    <Page>
      <Stack>
        <Box>
          <Typography color="primary" variant="h2">
            Skills
          </Typography>
          <Divider style={{ background: "#FFFFFF" }} />
          <Box height={20} />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={4}
            justifyContent="center"
          >
            <Stack spacing={1} direction="column">
              <Tile icon={typescriptIcon} title="TypeScript" />
              <Tile icon={javascriptIcon} title="JavaScript" />
              <Tile icon={reactIcon} title="React" />
              <Tile icon={reduxIcon} title="Redux" />
            </Stack>

            <Stack spacing={1} direction="column">
              <Tile icon={nodeIcon} title="NodeJS" />
              <Tile icon={nestIcon} title="NestJs" />
              <Tile icon={graphqlIcon} title="GraphQL" />
              <Tile icon={awsIcon} title="AWS" />
            </Stack>
            <Stack spacing={1} direction="column">
              <Tile icon={javaIcon} title="Java" />
              <Tile icon={springIcon} title="Spring Boot" />
              <Tile icon={pythonIcon} title="Python" />
              <Tile icon={flaskIcon} title="Flask" />
            </Stack>
            <Stack spacing={1} direction="column">
              <Tile icon={pytorchIcon} title="PyTorch" />
              <Tile icon={restapiIcon} title="Rest API" />
              <Tile icon={mysqlIcon} title="MySQL" />
            </Stack>
          </Stack>
        </Box>
        <Box>
          <Typography color="primary" variant="h2">
            Languages
          </Typography>
          <Divider style={{ background: "#FFFFFF" }} />
          <Box height={20} />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <LangTile title="English" level="C1" />
            <LangTile title="Polish" level="B2" />
            <LangTile title="Russian" level="C2" />
            <LangTile title="Ukranian" level="C2" />
            <LangTile title="Slovak" level="C1" />
            <LangTile title="German" level="B1" />
          </Stack>
        </Box>
      </Stack>
    </Page>
  );
}

function Tile({ icon, title }: { icon: string; title?: string }) {
  return (
    <Card>
      <Stack direction="row" spacing={2}>
        <Box
          sx={{
            borderRadius: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box maxHeight={80} maxWidth={80} component="img" src={icon} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: 100,
          }}
        >
          <Typography color="primary">{title}</Typography>
        </Box>
      </Stack>
    </Card>
  );
}

function LangTile({
  icon,
  title,
  level,
}: {
  icon?: string;
  title?: string;
  level?: string;
}) {
  return (
    <Card>
      <Stack direction="row" spacing={2}>
        <Box
          sx={{
            minHeight: 40,
            borderRadius: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box maxHeight={80} maxWidth={160} component="img" src={icon} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: 100,
            gap: 2,
          }}
        >
          {/* <Divider orientation="vertical" /> */}
          <Typography color="primary">{title}</Typography>
          {/* <Divider orientation="vertical" /> */}
          <Typography color="primary" textAlign="right">
            {level}
          </Typography>
        </Box>
        {/* review */}
        <Box
          sx={{
            minHeight: 40,
            borderRadius: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box maxHeight={80} maxWidth={160} component="img" src={icon} />
        </Box>
        {/*review*/}
      </Stack>
    </Card>
  );
}

export default About;
