const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://adminexpress:8sX5ruyGiscOTpya@expressjs.ruclfye.mongodb.net/ecommerce?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
