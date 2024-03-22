import { Box } from "@mui/material";
import Search from "../componets/Search";
import Filter from "../componets/Filter";
import { useValues } from "../contexts/StateContext";

export default function CountrySelection() {
  const { isMobile } = useValues();
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "4.64svh",
        rowGap: 3,
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <Search />
      <Filter />
    </Box>
  );
}
