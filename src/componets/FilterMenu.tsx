import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
type TfiltermenuProps = {
  regionsList: string[];
  setFilteredRegion: React.Dispatch<React.SetStateAction<string>>;
};
export default function FilterMenu({
  setFilteredRegion,
  regionsList,
}: TfiltermenuProps) {
  return (
    <FormControl sx={{ width: "200px", maxWidth: "100%" }}>
      <InputLabel>Filter By Region</InputLabel>
      <Select value="">
        <MenuItem
          onClick={() => {
            setFilteredRegion("");
          }}
          value=""
        >
          All
        </MenuItem>
        {regionsList?.map((region) => {
          return (
            <MenuItem
              key={region}
              onClick={() => {
                setFilteredRegion(region);
              }}
              value={region}
            >
              {region}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
