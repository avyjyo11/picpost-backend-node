const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/myapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(res => console.log("Connecting To MongoDB..."))
  .catch(err => console.log("Cannot Connect to MongoDB >>", err));

mongoose.set("useFindAndModify", false);

module.exports = mongoose;
