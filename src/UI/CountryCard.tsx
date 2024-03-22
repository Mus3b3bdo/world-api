import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Country } from "../data/types";
import { useValues } from "../contexts/StateContext";
type CountryCardProps = {
  children: Country;
};
export default function CountryCard({ children }: CountryCardProps) {
  const { isDark } = useValues();
  return (
    <Card
      aria-label={children.name}
      sx={{
        maxWidth: "300px",
        margin: 0,
        padding: 0,
        boxShadow: `1px 2px 5px ${
          isDark ? "rgb(0, 0, 0)" : "rgb(255, 240, 255)"
        }`,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            height: "10svw",
            display: "inline-block",
          }}
          image={children.flags.svg}
          alt={children.name}
        />
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" fontSize="16px" fontWeight="600" mb={2}>
            {children.name}
          </Typography>
          <Typography variant="body1" fontSize="14px" fontWeight="300">
            Population:{" "}
            <span style={{ fontSize: "12px", opacity: "0.7" }}>
              {children.population}
            </span>
          </Typography>
          <Typography variant="body1" fontSize="14px" fontWeight="300">
            Region:{" "}
            <span style={{ fontSize: "12px", opacity: "0.7" }}>
              {children.region}
            </span>
          </Typography>
          <Typography variant="body1" fontSize="14px" fontWeight="300">
            Capital:{" "}
            <span style={{ fontSize: "12px", opacity: "0.7" }}>
              {children.capital}
            </span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
