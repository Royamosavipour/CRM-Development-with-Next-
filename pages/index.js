import Course from "@/components/templates/index/Course";
import connectetToDB from "@/Utils/db";
import coursModel from "@/models/course";

const index = ({courses}) => {
  return <Course courses={ courses} />;
};

export async function getStaticProps(context) {
  connectetToDB();
  const courses = await coursModel.find({});


  return {
    props: {
      courses:JSON.parse(JSON.stringify(courses))
    },
    revalidate: 60 * 60 * 12,
  };
}

export default index;
