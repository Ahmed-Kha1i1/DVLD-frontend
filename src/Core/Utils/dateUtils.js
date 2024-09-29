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

export function calculateDateRange(minYears, maxYears) {
  const today = new Date();

  const minDate = new Date(
    today.getFullYear() - minYears,
    today.getMonth(),
    today.getDate(),
  )
    .toISOString()
    .split("T")[0];

  const maxDate = new Date(
    today.getFullYear() - maxYears,
    today.getMonth(),
    today.getDate(),
  )
    .toISOString()
    .split("T")[0];

  return { minDate, maxDate };
}
