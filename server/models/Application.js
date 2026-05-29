const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    jobId: String,
    applicantName: String,
    applicantEmail: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Application",
  applicationSchema
);