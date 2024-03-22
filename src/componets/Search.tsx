import {
  FormControl,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useValues } from "../contexts/StateContext";
import { countries } from "../data/variables";
import { SearchOutlined } from "@mui/icons-material";

export default function Search() {
  const [text, setText] = useState("");
  const { setCountriesData } = useValues();
  const countryArray = countries;
  useEffect(() => {
    const filteredContries = countryArray.filter((country) => {
      return country.name
        .toLocaleLowerCase()
        .includes(text.toLocaleLowerCase());
    });
    const countriesGrid = text === "" ? countryArray : filteredContries;
    setCountriesData(countriesGrid);
  }, [text, countryArray, setCountriesData]);

  return (
    <FormControl sx={{ maxWidth: "600px" }}>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined />
            </InputAdornment>
          ),
        }}
        aria-label="Search input"
        placeholder="search for a country..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </FormControl>
  );
}
