// Task 1- Create an Employees Array of Employee Objects

const employees = [  

    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }

];

// Task 2- Create a Function to Display Employee Shift Details

// Task 2- Create a Function to Display Employee Shift Details
function displayEmployeeShifts(employees) {
    if (employees && employees.length > 0) { // Check if employees exists and has elements
      for (let i = 0; i < employees.length; i++) {
        console.log(`Employee: ${employees[i].name}`);
      }
    } else {
      console.log("No employees found.");
    }
  }
  
  // Call the function with your employee data
  displayEmployeeShifts(employees);
  

// Task 3- Create a Function to Assign a New Shift

function assignShift (employeesName, days, hours) {
   const employees = employees.find(employee => employee.name === employeesName); 
   const currentShift = employeeShift.find (shift => shifts.day === day)
}


// Task 4- Create a Function to Calculate Total Hours Worked

function calculateTotalHours (employeesName) {
    const employee = employees.find (employee => employee.name === employeesName);
    for (const shift of employee.shifts) {
        const hours = totalHours (shift.hours)
        overallHours += hours
    }
    return (`${totalHours}`)
}   

console.log(calculateTotalHours (`john`))

//Task 
let yuh 