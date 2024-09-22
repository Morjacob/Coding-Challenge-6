// Task 1- Create an Employees Array of Employee Objects

const employees = [  

    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }

];


// Task 2- Create a Function to Display Employee Shift Details
function displayEmployeeShifts(employees) {
  if (employees && employees.length > 0) { // Check if employees exists and has elements
      employees.forEach(employee => {
          console.log(`employee: ${employee.name}`);
          if (employee.shifts && employee.shifts.length > 0) { // Check if shifts exists and has elements
              employee.shifts.forEach(shift => {
                  console.log(`day: ${shift.day}, hours: ${shift.hours}`);
              });
          }
      });
    }}

// Call the function with your employee data
displayEmployeeShifts(employees);
  




// Task 3- Create a Function to Assign a New Shift
function assignShift(employeesName, days, hours) {
  const employee = employees.find(employee => employee.name === employeesName);
  if (employee) {
    // Check if the employee already has a shift on that day
    const existingShift = employee.shifts.find(shift => shift.day === days);
    if (existingShift) {
      console.log(`Error: Shift already assigned for ${employee.name} on ${days}`);
    } else {
      employee.shifts.push({ day: days, hours: hours });
      console.log(`Employee: ${employeesName} assigned work on ${days} for ${hours}.`);
    }
  } else {
    console.log(`Employee ${employeesName} not found.`);
  }
}

// Example usage:
assignShift("Sara", "Friday", 5);





// Task 4- Create a Function to Calculate Total Hours Worked


function calculateTotalHours(employeesName) {
    let overallHours = 0;
    const employee = employees.find(employee => employee.name === employeesName);

    if (employee) {
        for (const shift of employee.shifts) {
            overallHours += shift.hours;
        }
        return overallHours;
    } else {
        return 0; 
    }
}

const employeeName = "John";
const totalHours = calculateTotalHours(employeeName);
console.log(`${employeeName} worked for ${totalHours} hours.`); 





//Task 5- Create a Function to List Employees with Free Days

function listAvailableEmployees(day) {
let employees = []
  if (employees.length > 0) {
    console.log(`Employees not assigned a shift on ${day}:`);
    availableEmployees.forEach(employee => console.log(employee.name));
  } else {
    console.log(`All employees are assigned shifts on ${day}.`);
  }
}


listAvailableEmployees('Friday');  