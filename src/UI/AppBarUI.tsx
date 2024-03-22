import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { useValues } from "../contexts/StateContext";
import { DarkModeOutlined, DarkModeSharp } from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function AppBarUI() {
  const { isDark, setIsDark } = useValues();

  return (
    <AppBar
      aria-label="App Bar"
      position="relative"
      color={isDark ? "primary" : "transparent"}
      sx={{ minHeight: "7.85svh" }}
    >
      <Toolbar
        aria-label="Nav Bar"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            aria-label="Nav Link"
            variant="h1"
            fontWeight="800"
            fontSize="30px"
            color="primary"
          >
            Where in The world?
          </Typography>
        </Link>
        <Typography aria-label="Dark mode Toggle switch">
          <IconButton
            aria-label="Dark Theme Toggler"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? <DarkModeSharp /> : <DarkModeOutlined />}
          </IconButton>
          Dark Mode
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
