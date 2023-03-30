// Write your solution in this file!
const employee = {
    name: "Eli Friedlander",
    streetAddress: "85 Attorney"
}
function updateEmployeeWithKeyAndValue (employee,key,value) {
    const newEmployee = { ...employee };

  newEmployee[key] = value;

  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee,key,value) {
    employee[key] = value;

    return employee
}

function deleteFromEmployeeByKey (employee,key) {
    const employeeNoKey = {...employee};
    delete employeeNoKey[key];
    return employeeNoKey
}
function destructivelyDeleteFromEmployeeByKey (employee,key) {
    delete employee[key];
    return employee
}