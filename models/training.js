import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    unique: true,
    required: true,
  },
  currentStatus: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
    required: true,
  },
});

const trainingSchema = new mongoose.Schema({
  Phase: {
    required: true,
    type: String,
    unique: false,
    enum: ["nc", "p1", "p2"],
  },
  startDate: {
    required: true,
    type: Date,
    unique: false,
  },
  applyingDeadline: {
    required: true,
    type: Date,
    unique: false,
  },
  targetAudience: {
    required: true,
    type: [String],
    unique: false,
  },
  place: {
    required: true,
    type: String,
    unique: false,
  },
  prerequisites: {
    type: [String],
    unique: false,
  },
  applications: {
    type: [applicationSchema],
    default: [],
  },
});
