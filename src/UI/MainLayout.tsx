import { Paper } from "@mui/material";
import CountrySelection from "./CountrySelection";
import RecentCountries from "./RecentCountries";
import AllCountries from "./AllCountries";

export default function MainLayout() {
  return (
    <Paper
      sx={{
        borderRadius: 0,
        minHeight: "92.14svh",
        fontSize: "14px",
      }}
    >
      <CountrySelection />
      <RecentCountries />
      <AllCountries />
    </Paper>
  );
}
