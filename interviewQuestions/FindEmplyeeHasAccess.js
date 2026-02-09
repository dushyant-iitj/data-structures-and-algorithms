const data = {
  1: {
    dept: "a",
    employees: [2, 3, 4, 5, 6],
  },
  2: {
    dept: "b",
    employees: [7, 8, 9],
  },
  3: {
    dept: "c",
    employees: [11, 12],
  },
};

const checkHasAccess = (id, dept) => {
  const employeeDept = data[id]?.dept;

  //check if has direct access
  if (employeeDept && employeeDept === dept) {
    return true;
  }

  const employeesList = data[id]?.employees;

  if (!employeesList) return false;

  // check if employees have access
  for (let i = 0; i < employeesList.length; i++) {
    if (checkHasAccess(employeesList[i], dept)) {
      return true;
    }
  }

  return false;
};

console.log(checkHasAccess(1, "c"));
