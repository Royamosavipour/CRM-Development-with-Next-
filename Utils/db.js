const mongoose = require("mongoose");

const connectetToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    } else {
      await mongoose.connect("mongodb://localhost:27017/next-cms");
      console.log("conected is sucssesful");
    }
  } catch (error) {
    console.log("db conection Error=>", error );
  }
};

export default connectetToDB;
