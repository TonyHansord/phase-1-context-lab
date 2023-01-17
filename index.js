/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


// Your code here
function createEmployeeRecord(employee) {
    return {
      firstName: employee[0],
      familyName: employee[1],
      title: employee[2],
      payPerHour: employee[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
  
  function createEmployeeRecords(employees) {
    return employees.map((employee) => {
      return createEmployeeRecord(employee);
    });
  }
  
  function createTimeInEvent(record, dateStamp) {
    let [date, hour] = dateStamp.split(' ');
  
    let timeInEvent = {
      type: 'TimeIn',
      hour: parseInt(hour, 10),
      date,
    };
    record.timeInEvents.push(timeInEvent);
    return record;
  }
  
  function createTimeOutEvent(record, dateStamp) {
    let [date, hour] = dateStamp.split(' ');
  
    let timeOutEvent = {
      type: 'TimeOut',
      hour: parseInt(hour, 10),
      date,
    };
    record.timeOutEvents.push(timeOutEvent);
    return record;
  }
  
  function hoursWorkedOnDate(employee, date) {
    let timeIn =
      employee.timeInEvents.find((event) => event.date === date).hour / 100;
    let timeOut =
      employee.timeOutEvents.find((event) => event.date === date).hour / 100;
    return timeOut - timeIn;
  }
  
  function wagesEarnedOnDate(employee, date) {
    let wages = hoursWorkedOnDate(employee, date) * employee.payPerHour;
    return wages;
  }
  

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

