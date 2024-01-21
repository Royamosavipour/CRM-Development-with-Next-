import connectetToDB from "@/Utils/db";
import courseMoudel from "@/models/course";

const handler = async (req, res) => {
  connectetToDB();

  if (res.method === "GET") {
    const courses = await courseMoudel.find({});
    return res.json(courses);


    
  } else if (req.method === "POST") {
    try {
      const { title } = req.body;
      if (!title.trim() || title.length < 2) {
        return res.status(422).json({ message: "Title is not valid!" });
      }
      await courseMoudel.create({ title });
      return res.status(201).json({ message: "course creat successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Unkowe internal server error  !!" });
    }
  }
};

export default handler;
