const mongoose = require("mongoose");

const userSchema = () => {
  const Schema = mongoose.Schema;
  const userId = Schema.ObjectId;
  const schema = new Schema({
    userId: userId,
    firstName: String,
    lastName: String,
    middleName: String,
    date: Date,
    email: String,
    password: String
  });
  return schema;
};


module.exports = userSchema;
