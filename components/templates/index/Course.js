import CoursesItem from "@/components/modules/coursesItem/CoursesItem";
import { useState } from "react";
import AddCourseModal from "./AddCourseModal";
import styles from "@/styles/Course.module.css";

const Course = ({ courses }) => {
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const [data, setData] = useState([...courses]);
  const hideAddCourseModal = () => setShowAddCourseModal(false);

  const getCourses = async () => {
    const res = await fetch(`/api/courses`);
    const coursesData = await res.json();
    if (res.status === 200) {
      setData(coursesData);
    }
  };

  return (
    <>
      <section className={styles.courses}>
        <div className={styles.courses_top}>
          <h2 className={styles.courses_title}> courses</h2>
          <a
            href="#"
            className={styles.new_course_btn}
            onClick={() => setShowAddCourseModal(true)}
          >
            Add New Course
          </a>
        </div>
        <ul className={styles.courses_list}>
          {data.map((cours) => (
            <CoursesItem {...cours} />
          ))}
        </ul>
      </section>

      {showAddCourseModal && (
        <AddCourseModal
          getCourses={getCourses}
          hideAddCourseModal={hideAddCourseModal}
        />
      )}
    </>
  );
};

export default Course;
