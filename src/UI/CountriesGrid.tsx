import { Link } from "react-router-dom";
import { useValues } from "../contexts/StateContext";
import CountryCard from "./CountryCard";
import { Box } from "@mui/material";
import { Country } from "../data/types";

type CountriesGridProps = {
  countriesData: Country[];
};
export default function CountriesGrid({ countriesData }: CountriesGridProps) {
  const { handleRecentAdd } = useValues();
  return (
    <>
      <Box
        component="div"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "7.85svh",
          rowGap: "7.85svh",
          padding: "4.64svh",
        }}
      >
        {countriesData.map((country) => {
          return (
            <Link
              key={country.alpha3Code}
              to={`/details/${country.alpha3Code}`}
              onClick={() => handleRecentAdd(country.alpha3Code)}
            >
              <CountryCard>{country}</CountryCard>
            </Link>
          );
        })}
      </Box>
    </>
  );
}
