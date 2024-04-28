const mongoose = require("mongoose");

exports.connecting = async () => {
  const con = await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  if (con) {
    console.log(`Db connected`);
  }
};
