import { Box, Divider, Grid } from "@mui/material";
import { useValues } from "../contexts/StateContext";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { BorderAll } from "@mui/icons-material";
export interface CountryDetailsProps {
  countryCode: string | undefined;
}
export default function CountryDetails({ countryCode }: CountryDetailsProps) {
  const { countriesData, isDark, handleRecentAdd, recentCountries } =
    useValues();
  const [detailsContry] = countriesData.filter(
    (country) => country.alpha3Code === countryCode
  );
  const borders =
    detailsContry.borders === undefined ? [] : detailsContry.borders;
  const countryNames = borders.map((borderCode) => {
    const Selectedcountry = countriesData.find(
      (country) => country.alpha3Code === borderCode
    );
    return Selectedcountry ? Selectedcountry.name : "";
  });
  const borderCountries = borders.map((borderCode) => {
    const [temp] = countriesData.filter((country) => {
      return country.alpha3Code === borderCode;
    });
    return temp;
  });
  console.log(recentCountries);
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        gap="3rem"
      >
        <Grid item xs={12} md={5}>
          <img
            aria-label="country flag"
            src={detailsContry.flags.svg}
            alt={detailsContry.name}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "1rem 0",
            }}
          >
            <Typography variant="h2" aria-label="country name">
              {detailsContry.name}
            </Typography>
            <Box
              component="div"
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "100px",
              }}
            >
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <Typography variant="body1">
                  Native Name:{" "}
                  <span style={{ fontSize: "14px", opacity: "0.7" }}>
                    {detailsContry.nativeName}
                  </span>
                </Typography>
                <Typography variant="body1">
                  Population:{" "}
                  <span style={{ fontSize: "14px", opacity: "0.7" }}>
                    {detailsContry.population}
                  </span>
                </Typography>
                <Typography variant="body1">
                  Region:{" "}
                  <span style={{ fontSize: "14px", opacity: "0.7" }}>
                    {detailsContry.region}
                  </span>
                </Typography>
                <Typography variant="body1">
                  Sub Region:{" "}
                  <span style={{ fontSize: "14px", opacity: "0.7" }}>
                    {detailsContry.subregion}
                  </span>
                </Typography>
                <Typography variant="body1">
                  Capital:{" "}
                  <span style={{ fontSize: "14px", opacity: "0.7" }}>
                    {detailsContry.capital}
                  </span>
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <Typography variant="body1">
                  Top Level Domain:{" "}
                  <span style={{ fontSize: "14px", opacity: "0.7" }}>
                    {detailsContry.topLevelDomain}
                  </span>
                </Typography>
                <Typography variant="body1">
                  Currencies:{" "}
                  {detailsContry.currencies.map((currency, index) => {
                    return (
                      <>
                        <span
                          style={{ fontSize: "14px", opacity: "0.7" }}
                          key={currency.code}
                        >
                          {currency.code}
                        </span>
                        <span>
                          {index === detailsContry.currencies.length - 1
                            ? ""
                            : ","}
                        </span>
                      </>
                    );
                  })}
                </Typography>
                <Typography variant="body1">
                  Languages:{" "}
                  {detailsContry.languages.map((language, index) => {
                    return (
                      <span
                        style={{ fontSize: "14px", opacity: "0.7" }}
                        key={language.name}
                      >
                        {language.name}
                        {index === detailsContry.languages.length - 1
                          ? ""
                          : ","}
                      </span>
                    );
                  })}
                </Typography>
              </Box>
            </Box>
            <Box component="div" sx={{ display: "flex", flexWrap: "wrap" }}>
              <Typography variant="body1">Border Countries: </Typography>
              {countryNames.map((country) => {
                return (
                  <span
                    style={{
                      fontSize: "14px",
                      opacity: "0.7",
                      border: `1px solid ${
                        isDark ? "rgb(20, 20, 20)" : "rgb(255, 240, 255)"
                      }`,
                      padding: "0.25rem 1.25rem",
                      marginInlineStart: "10px",
                      boxShadow: `-1px -2px 2px ${
                        isDark ? "rgb(20, 20, 20)" : "rgb(255, 240, 255)"
                      }`,
                    }}
                  >
                    {country}
                  </span>
                );
              })}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <Typography variant="body1" color="primary">
        <BorderAll /> Checkout border countries:
      </Typography>
      <Box
        component="div"
        sx={{
          display: "flex",
          gap: 2,
          placeItems: "center",
          flexWrap: "wrap",
        }}
      >
        {borderCountries.map((country) => {
          return country !== null ? (
            <Link
              to={`/details/${country.alpha3Code}`}
              onClick={() => handleRecentAdd(country.alpha3Code)}
            >
              <img
                src={country.flags.svg}
                alt={country.name}
                style={{
                  maxWidth: "150px",
                  height: "40px",
                  flexShrink: "1",
                  boxShadow: `-5px -5px 5px ${
                    isDark ? "rgb(20, 20, 20)" : "rgb(255, 240, 255)"
                  }`,
                }}
              />
            </Link>
          ) : (
            <></>
          );
        })}
      </Box>
    </Box>
  );
}
