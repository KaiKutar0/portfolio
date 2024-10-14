import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";
function NavBar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="static">
      <Drawer open={open} onClose={() => setOpen(false)} anchor="top">
        <List>
          <ListItem>About Me</ListItem>
          <ListItem>Projects</ListItem>
          <ListItem>Contacts</ListItem>
        </List>
      </Drawer>
      <Toolbar>
        <Typography>Yurii Vasylchenko</Typography>
        {matches ? (
          <>
            <Box flex={1} />
            <Stack spacing={2} direction="row">
              <IconButton
                href="https://www.linkedin.com/in/yurii-vasylchenko-1677b9275/"
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://github.com/KaiKutar0" target="_blank">
                <GitHubIcon />
              </IconButton>
            </Stack>
          </>
        ) : (
          <>
            <Box flex={1} />
            <IconButton onClick={() => setOpen(!open)}>
              <MenuIcon />
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
