const { default: connectetToDB } = require("@/Utils/db");
import { isValidObjectId } from "mongoose";
import courseModule from "@/models/course";

const handeler = async (req, res) => {
  connectetToDB();
  const { id } = req.query;

  if (isValidObjectId(id)) {
    try {
      const res = await courseModule.findOneAndDelete({ _id: id });
      return res.json({ message: "Course delet succesfully " });
    } catch (error) {
      return res.status(500).json({ message: " Internal server Error" });
    }
  } else {
      return res.status(500).json({message:' Course Id in not valid'})
  }
};
