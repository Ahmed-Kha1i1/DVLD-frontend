const testAppointmentdetailTypes = {
  ID: "id",
};

const testAppointmentsKeys = {
  all: ["testAppointments"],
  lists: () => [...testAppointmentsKeys.all, "list"],
  list: (filter) => [...testAppointmentsKeys.lists(), { filter }],
  details: () => [...testAppointmentsKeys.all, "detail"],
  detail: (type, value) => [...testAppointmentsKeys.details(), { type, value }],
};

export { testAppointmentsKeys, testAppointmentdetailTypes };
