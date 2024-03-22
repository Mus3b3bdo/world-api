import { History } from "@mui/icons-material";
import { Divider, Typography } from "@mui/material";
import { useValues } from "../contexts/StateContext";
import CountriesGrid from "./CountriesGrid";

export default function RecentCountries() {
  const { recentCountries } = useValues();
  return (
    <>
      <Typography
        variant="h2"
        fontWeight="600"
        fontSize="30px"
        color="primary"
        pl="4.64svh"
      >
        <History /> Recently viewed
      </Typography>
      <CountriesGrid countriesData={recentCountries} />
      <Divider />
    </>
  );
}
