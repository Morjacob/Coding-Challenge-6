// Task 1- Create an Employees Array of Employee Objects

const employees = [  

    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }

];


// Task 2- Create a Function to Display Employee Shift Details
function displayEmployeeShifts(employees) {
  if (employees && employees.length > 0) { // checks if employee name is in the array along with the details
      employees.forEach(employee => {
          console.log(`employee: ${employee.name}`);
          if (employee.shifts && employee.shifts.length > 0) { // checks the shifts associated with the employee
              employee.shifts.forEach(shift => {
                  console.log(`day: ${shift.day}, hours: ${shift.hours}`);
              });
          }
      });
    }}

  
// will show the employee and shift details
displayEmployeeShifts(employees);
  




// Task 3- Create a Function to Assign a New Shift
function assignShift(employeesName, days, hours) {
  const employee = employees.find(employee => employee.name === employeesName); //Finds employee in array
  if (employee) {
    // Check if employee is already assigned a shift
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

// Calls employee and assigns them a new shift
assignShift("Sara", "Monday", 5);





// Task 4- Create a Function to Calculate Total Hours Worked
function calculateTotalHours(employeesName) {
    let overallHours = 0;
    const employee = employees.find(employee => employee.name === employeesName); // finds employee

    if (employee) {
        for (const shift of employee.shifts) {
            overallHours += shift.hours; // calculates total hours
        }
        return overallHours;
    } else {
        return 0; 
    }
}

// example using John's data
const employeeName = "John";
const totalHours = calculateTotalHours(employeeName);
console.log(`${employeeName} worked for ${totalHours} hours.`); 





//Task 5- Create a Function to List Employees with Free Days

function listAvailableEmployees(day) {
  const availableEmployees = []; // empty array for employees with free days

// checks employees who do not work on a day of your choosing
  employees.forEach(employee => {
    if (!employee.shifts.some(shift => shift.day === day)) {
      availableEmployees.push(employee.name); 
    }
  });
 
  if (availableEmployees.length > 0) {
    console.log(`Employees with no shift on ${day}:`);
    availableEmployees.forEach(name => console.log(name)); 
  } else {
    console.log(`Employees with shifts on ${day}.`);
  }
}

// Will log employees who do not work on friday
listAvailableEmployees('Friday'); 


 