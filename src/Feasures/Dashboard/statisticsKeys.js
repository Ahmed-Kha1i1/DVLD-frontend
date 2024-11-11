export const statisticsKeys = {
  all: ["statistics"],
  lists: () => [...statisticsKeys.all, "list"],
  list: (filter) => [...statisticsKeys.lists(), { filter }],
  details: () => [...statisticsKeys.all, "detail"],
  detail: (filter) => [...statisticsKeys.details(), { filter }],
};
