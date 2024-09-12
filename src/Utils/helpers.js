export function FormatDateTime(dateString) {
  var date = new Date(dateString);

  return date.toLocaleString();
}

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );