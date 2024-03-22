import { ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./themes/theme";
import RouterWrapper from "./componets/RouterWrapper";
import { useValues } from "./contexts/StateContext";

function App() {
  const { isDark } = useValues();
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <RouterWrapper />
    </ThemeProvider>
  );
}

export default App;
