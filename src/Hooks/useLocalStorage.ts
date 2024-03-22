import { useEffect, useState } from "react";
export default function useLocalStorage(key: string, defalutValue: unknown) {
  const prefix = "CountriesAPI_"; // using prefex to catigorize the local storage variables depending on the project
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefix + key);
    let temp;
    if (jsonValue !== null) temp = JSON.parse(jsonValue);
    else {
      if (typeof defalutValue === "function") {
        temp = defalutValue();
      } else {
        temp = defalutValue;
      }
    }
    return temp;
  });
  useEffect(() => {
    localStorage.setItem(prefix + key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
