import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"]
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"]
  }
});

// Virtual property
userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

// Allow virtuals to appear in JSON response
userSchema.set("toJSON", { virtuals: true });
userSchema.set("toObject", { virtuals: true });

// Create model
const User = mongoose.model("User", userSchema);

export default User;
