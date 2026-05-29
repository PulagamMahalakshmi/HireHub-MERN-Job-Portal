const express = require("express");

const {
  applyJob,
} = require("../controllers/applicationController");

const router = express.Router();

router.post("/", applyJob);

module.exports = router;