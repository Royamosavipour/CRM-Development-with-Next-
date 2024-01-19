import connectetToDB from "@/Utils/db";
import courseModel from "@/models/course";
import { isValidObjectId } from "mongoose";

const handler = async (req, res) => {
  connectetToDB();
  if (req.method === "DELETE") {
    const { id } = req.query;

    if (isValidObjectId(id)) {
      try {
        await courseModel.findOneAndDelete({ _id: id });
        res.json({ message: "succesfully !!" });
      } catch (error) {
        return res.status(500).json({ message: "Internal server Error" });
      }
    } else {
      return res.status(422).json({ message: "Course ID is not valid" });
    }


     
  } else if (req.method === "PUT") {
    const { id } = req.query;
    const { title } = req.body;

     if (isValidObjectId(id)) {
      try {
        await courseModel.findOneAndUpdate({ _id: id }, { title });
        return res.json({ message: "Course Update Succesfully" });
      } catch (error) {
        return res.status(500).json({ message: "Internal server Error" });
      }
     } else {
      return res.status(422).json({ message: "Course ID is not valid" }); 
    }
  }
};

export default handler;

// import connectToDB from "@/Utils/db";
// import coursesModel from "@/models/course";
// import { isValidObjectId } from "mongoose";

// const handler = async (req, res) => {
//   connectToDB();

//   if (req.method === "DELETE") {
//     const { id } = req.query;

//     if (isValidObjectId(id)) {
//       try {
//         await coursesModel.findOneAndDelete({ _id: id });
//         return res.json({ message: "Course Removed Successfully :))" });
//       } catch (err) {
//         return res.status(500).json({ message: "Internal server error !!" });
//       }
//     } else {
//       return res.status(422).json({ message: "Course ID is not valid !!" });
//     }
//   } else if (req.method === "PUT") {
//     const { id } = req.query;
//     const { title } = req.body;

//     if (isValidObjectId(id)) {
//       try {
//         await coursesModel.findOneAndUpdate(
//           { _id: id },
//           {
//             title,
//           }
//         );
//         return res.json({ message: "Course Updated Successfully :))" });
//       } catch (err) {
//         return res.status(500).json({ message: "Internal server error !!" });
//       }
//     } else {
//       return res.status(422).json({ message: "Course ID is not valid !!" });
//     }
//   }
// };

// export default handler;