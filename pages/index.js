import Course from "@/components/templates/index/Course";
import connectetToDB from "@/Utils/db";
import coursModel from "@/models/course";

const index = () => {
  return <Course />;
};

export async function getStaticProps(context) {
  connectetToDB();
  const courses = await coursModel.find({});

  console.log(courses);

  return {
    props: {},
  };
}

export default index;
