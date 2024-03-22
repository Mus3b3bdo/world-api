export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area?: number;
  timezones: string[];
  borders?: string[];
  nativeName: string;
  numericCode: string;
  flags: flag;
  gini?: number;
  currencies: currency[];
  languages: language[];
  translations: object;
  flag: string;
  regionalBlocs?: regonalBloc[];
  cioc?: string;
  independent: boolean;
}

interface flag {
  svg: string;
  png: string;
}

interface currency {
  code: string;
  name: string;
  symbol: string;
}

interface language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

interface regonalBloc {
  acronym: string;
  name: string;
  otherNames?: string[];
  otherAcronyms?: string[];
}
