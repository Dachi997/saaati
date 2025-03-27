export const getTheme = (date: Date): "light" | "dark" => {
  const hours = date.getHours();
  return hours >= 20 || hours < 7 ? "dark" : "light";
};
