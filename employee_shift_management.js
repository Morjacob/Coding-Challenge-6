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
     })
     if (employee.shifts.length > 0 ) {
      employee.shifts.forEach (shift => {
        console.log (`day: ${shift.day}, hours: ${shift.hours}`);
      })
     }
      }
    } else {
      console.log("No employees found.");
    }
  
  
  // Call the function with your employee data
  displayEmployeeShifts(employees);
  

// Task 3- Create a Function to Assign a New Shift

function assignShift(employeesName, days, hours) {
    // Assuming you have an array of shifts named 'employeeShift'
    const employee = employees.find(employee => employee.name === employeesName);
    if (employee) {
      const currentShift = employeeShift.find(shift => shift.day === day); 
      // ... your logic to assign the shift to the employee
    } else {
      console.log(`Employee with name ${employeesName} not found.`);
    }
  }



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

