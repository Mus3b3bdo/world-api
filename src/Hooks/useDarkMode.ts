import useLocalStorage from "./useLocalStorage";
export default function useDarkMode(): boolean {
  const [isDark, setIsDark] = useLocalStorage("Theme-Dark", true);
  if (typeof isDark !== "boolean") {
    return setIsDark(false);
  }
  return setIsDark(!isDark);
}
