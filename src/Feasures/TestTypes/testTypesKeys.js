const testTypedetailTypes = {
  ID: "id",
};

const testTypesKeys = {
  all: ["testTypes"],
  lists: () => [...testTypesKeys.all, "list"],
  list: (filter) => [...testTypesKeys.lists(), { filter }],
  details: () => [...testTypesKeys.all, "detail"],
  detail: (type, value) => [...testTypesKeys.details(), { type, value }],
};

export { testTypesKeys, testTypedetailTypes };
