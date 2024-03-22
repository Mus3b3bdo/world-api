import { countries } from "../data/variables";
import { useEffect, useState } from "react";
import FilterMenu from "./FilterMenu";
import { useValues } from "../contexts/StateContext";

export default function Filter() {
  const [filteredRegion, setFilteredRegion] = useState("");
  const { setCountriesData } = useValues();
  const countryArray = countries;
  const regions = countries
    .map((country) => {
      return country.region;
    })
    .sort();
  const regionsList = regions
    .map((region, index) => {
      if (regions[index] !== regions[index + 1]) {
        return region;
      } else return "";
    })
    .filter((region) => {
      return region !== "";
    });

  useEffect(() => {
    const filteredContries = countryArray.filter((country) => {
      return country.region === filteredRegion;
    });
    const countriesGrid =
      filteredRegion === "" ? countryArray : filteredContries;
    setCountriesData(countriesGrid);
  }, [filteredRegion, countryArray, setCountriesData]);
  return (
    <FilterMenu
      regionsList={regionsList}
      setFilteredRegion={setFilteredRegion}
    />
  );
}
