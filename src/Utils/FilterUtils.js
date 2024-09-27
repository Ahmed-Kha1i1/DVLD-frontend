export function defaultFilter(option, value) {
  return option.toLowerCase().includes(value.toLowerCase());
}

export function defaultEuqal(option, value) {
  return option.toLowerCase() === value.toLowerCase();
}
