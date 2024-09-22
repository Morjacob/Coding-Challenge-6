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
  } else {
      console.log("No employees found.");
  }
}

// Call the function with your employee data
displayEmployeeShifts(employees);
  



// Task 3- Create a Function to Assign a New Shift

function assignShift(employeesName, days, hours) {
    const employee = employees.find(employee => employee.name === employeesName);
    if (employee) {
      const shift = employeeShift.find(shift => shift.day === day); 
      console.log(`Error: shift assigned for ${employee.name} on ${day}` );
    } else {
      employee.shifts.push ({days, hours});
      console.log(`Employee: ${employeesName} assigned work on ${days} for ${hours} .`);
    }
  }

  assignShift(`Sara`, `Friday`, 5);


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
        return 0; // Or handle the case where the employee is not found
    }
}

console.log(calculateTotalHours(`john`));



//Task 5- Create a Function to List Employees with Free Days

function listAvailableEmployees (day) {
    if (availableEmployees.length > 0) {
        console.log(`Available employees on ${day}:`);
        availableEmployees.forEach(employee => console.log(employee.name));
    } else {
        console.log(`No employees available on ${day}.`);
    }
}

