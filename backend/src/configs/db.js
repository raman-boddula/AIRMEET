const mongoose = require("mongoose");
module.exports = () => {
  mongoose.connect(`mongodb+srv://raman:raman@cluster0.kpuis.mongodb.net/airmeet`);
};
