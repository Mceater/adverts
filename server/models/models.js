const mongoose = require("mongoose");
// const config = require("../config");

const url = process.env.MONGODB_URI;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

const sessionSchema = new mongoose.Schema({
  username: { type: String, unique: true },
});

sessionSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = document._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});



const initDB = async () => {
  await mongoose.connect(url).catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });
};

module.exports = { initDB, User };
