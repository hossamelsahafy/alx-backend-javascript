export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(departmentsList) {
      return Object.keys(departmentsList).length;
    },
  };
}
