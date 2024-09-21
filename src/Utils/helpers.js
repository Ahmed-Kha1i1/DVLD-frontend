export function FormatDateTime(dateString) {
  var date = new Date(dateString);

  return date.toLocaleString();
}

export function FormatDateAsNumber(dateString) {
  var date = new Date(dateString);

  return date.toLocaleDateString();
}

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value,
  );

export function calculateAge(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);

  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}

export function generateRandomSixDigitNumber() {
  return Math.floor(100000 + Math.random() * 900000);
}
