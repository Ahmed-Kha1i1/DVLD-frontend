import { applicationStatuses } from "../../Constants";

export const applicationsSortItems = [
  {
    value: "Id",
    text: "ID",
  },
  {
    value: "className",
    text: "Class Name",
  },
  {
    value: "fullName",
    text: "Full Name",
  },
  {
    value: "passedTest",
    text: "Passed Test",
  },
  {
    value: "status",
    text: "Status",
  },
  {
    value: "personId",
    text: "Person Id",
  },
];

export const statusesFilter = [
  {
    value: "",
    text: "All",
  },
  {
    value: applicationStatuses.New,
  },
  {
    value: applicationStatuses.Cancelled,
  },
  {
    value: applicationStatuses.Completed,
  },
];
