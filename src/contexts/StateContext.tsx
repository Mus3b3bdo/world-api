import React, { PropsWithChildren, useContext, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
import { countries, recentCountriesInitial } from "../data/variables";
import { Country } from "../data/types";
import { useMediaQuery, useTheme } from "@mui/material";

interface ContextValuesType {
  isDark: boolean;
  countriesData: Country[];
  recentCountries: Country[];
  setIsDark: (value: boolean) => void;
  setCountriesData: (value: Country[]) => void;
  handleRecentAdd: (value: string) => void;
  isMobile?: boolean;
}

const initialContextValues: ContextValuesType = {
  isDark: true,
  countriesData: countries,
  recentCountries: recentCountriesInitial,
  setIsDark: () => {},
  setCountriesData: () => {},
  handleRecentAdd: () => {},
};

const ContextValues =
  React.createContext<ContextValuesType>(initialContextValues);

type ContextPropType = PropsWithChildren;

export default function StateContext({ children }: ContextPropType) {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));
  const [isDark, setIsDark] = useLocalStorage("Theme-Dark", true);
  const [countriesData, setCountriesData] = useState<Country[]>(countries);
  const [recentCountries, setRecentCountries] = useLocalStorage(
    "Recent_Countries",
    recentCountriesInitial
  );

  const handleRecentAdd = (value: string) => {
    const [clickedCountry] = countries.filter(
      (country) => country.alpha3Code === value
    );
    if (recentCountries.includes(clickedCountry)) {
      return;
    } else {
      if (recentCountries.length === 4) {
        setRecentCountries((prev: Country[]) => {
          prev.shift();
          return [...prev, clickedCountry];
        });
      } else {
        setRecentCountries((prev: Country[]) => {
          return [...prev, clickedCountry];
        });
      }
    }
  };

  const contextValues: ContextValuesType = {
    isDark,
    countriesData,
    setIsDark,
    setCountriesData,
    recentCountries,
    handleRecentAdd,
    isMobile,
  };

  return (
    <ContextValues.Provider value={contextValues}>
      {children}
    </ContextValues.Provider>
  );
}
export function useValues() {
  return useContext(ContextValues);
}
