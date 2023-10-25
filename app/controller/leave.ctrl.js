const Leave = require("../model/leave.model");
const Employee = require("../model/employee.model");

exports.create = (req, res) => {
  const { empId, name, leaveType, startDate, endDate, status } = req.body;
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  const timeDifference = endDateObj - startDateObj;

  const numberOfDays = timeDifference / (1000 * 3600 * 24);
  const leave = new Leave({
    empId: empId,
    name: name,
    leaveType: leaveType,
    startDate: startDate,
    endDate: endDate,
    status: status,
  });

  leave
    .save()
    .then((data) => {
      return Employee.findOne({ empId });
    })
    .then((employee) => {
      if (!employee) {
        throw new Error("Employee not found");
      }

      employee.leaves -= numberOfDays;

      return employee.save();
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Employee.",
      });
    });
};
