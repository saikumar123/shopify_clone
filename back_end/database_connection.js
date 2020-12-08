const mongoose = require("mongoose");

async function mongoose_connection() {
   await mongoose.connect("mongodb://127.0.0.1:27017/shopify_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
  mongoose.connection();
}

module.exports= mongoose_connection;
