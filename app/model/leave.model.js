const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema(
  {
    empId: Number,
    name: String,
    leaveType: String,
    startDate: String,
    endDate: String,
    status: String,
  },
  { timestamps: true }
);

const Leave = mongoose.model("Leave", leaveSchema);
module.exports = Leave;
