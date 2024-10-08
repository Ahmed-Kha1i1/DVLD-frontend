const persondetailTypes = {
  ID: "id",
  EMAIL: "email",
  PHONE: "phone",
  NATIONAL_NUMBER: "nationalNumber",
};

const peopleKeys = {
  all: ["people"],
  lists: () => [...peopleKeys.all, "list"],
  list: (filter) => [...peopleKeys.lists(), { filter }],
  details: () => [...peopleKeys.all, "detail"],
  detail: (type, value) => [...peopleKeys.details(), { type, value }],
};

export { peopleKeys, persondetailTypes };
