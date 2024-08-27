const getTimeZone = () => {
  const date = new Date();
  const offsetInMinutes = date.getTimezoneOffset();
  const offsetInHours = -offsetInMinutes / 60;
  return offsetInHours;
};

export const formatDateTime = (timestamp: string) => {
  const date = new Date(timestamp);

  // Ajustar la hora a GMT-4
  const offsetInHours = getTimeZone(); // GMT-4
  const localDate = new Date(date.getTime() + offsetInHours * 60 * 60 * 1000);

  const day = String(localDate.getDate()).padStart(2, "0");
  const month = String(localDate.getMonth() + 1).padStart(2, "0");
  const year = String(localDate.getFullYear()).slice(-2);
  const hours = String(localDate.getHours()).padStart(2, "0");
  const minutes = String(localDate.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};
