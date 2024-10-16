import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
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
import { useNavigate } from "react-router-dom";
function NavBar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Drawer open={open} onClose={() => setOpen(false)} anchor="top">
        <Stack>
          <Button onClick={() => navigate("/about")}>About Me</Button>
          <Button onClick={() => navigate("/projects")}>Projects</Button>
          <Button onClick={() => navigate("/contacts")}>Contacts</Button>
        </Stack>
      </Drawer>
      <Toolbar>
        <Button onClick={() => navigate("/")}>
          <Typography fontWeight={800}>Yurii Vasylchenko</Typography>
        </Button>

        {matches ? (
          <>
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <Button onClick={() => navigate("/about")}>About Me</Button>
              <Button onClick={() => navigate("/projects")}>Projects</Button>
              <Button onClick={() => navigate("/contacts")}>Contacts</Button>
            </Box>

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
