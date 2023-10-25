const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    empId: Number,
    name: String,
    email: String,
    phNo: String,
    role: String,
    leaves: Number,
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
