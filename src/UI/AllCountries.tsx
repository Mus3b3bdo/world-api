import { Flag } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import CountriesGrid from "./CountriesGrid";
import { useValues } from "../contexts/StateContext";

export default function AllCountries() {
  const { countriesData } = useValues();
  return (
    <>
      <Typography
        variant="h2"
        fontWeight="600"
        fontSize="30px"
        color="primary"
        pt="4.64svh"
        pl="4.64svh"
      >
        <Flag /> All Countries
      </Typography>
      <CountriesGrid countriesData={countriesData} />
    </>
  );
}
