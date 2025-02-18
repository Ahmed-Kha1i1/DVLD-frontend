const driverdetailTypes = {
  ID: "id",
  PERSON_ID: "personId",
};

const driversKeys = {
  all: ["drivers"],
  lists: () => [...driversKeys.all, "list"],
  list: (filter) => [...driversKeys.lists(), { filter }],
  details: () => [...driversKeys.all, "detail"],
  detail: (type, value) => [...driversKeys.details(), { type, value }],
};

export { driversKeys, driverdetailTypes };
