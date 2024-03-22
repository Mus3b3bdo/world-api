import { Box, Button, Paper } from "@mui/material";
import AppBarUI from "../UI/AppBarUI";
import CountryDetails from "../UI/CountryDetails";
import { Link, useParams } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { useValues } from "../contexts/StateContext";

export default function DetailsPage() {
  const { countryCode } = useParams();
  const { isMobile } = useValues();
  return (
    <>
      <AppBarUI />
      <Paper
        sx={{
          borderRadius: 0,
          minHeight: "92.14svh",
          fontSize: "16px",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: isMobile ? "4.64svh 2.64svh 0 2.64svh" : "4.64svh",
            gap: "4.64svh",
          }}
        >
          <Link to="/">
            <Button
              aria-label="Back button"
              variant="contained"
              color="secondary"
              sx={{ alignSelf: "flex-start" }}
            >
              <ArrowBack /> Back
            </Button>
          </Link>
          <CountryDetails countryCode={countryCode} />
        </Box>
      </Paper>
    </>
  );
}
