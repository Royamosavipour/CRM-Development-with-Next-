import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faFile,
  faTag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Modal.module.css";
import { useState } from "react";
import swal from "sweetalert";

const AddCourseModal = ({ hideAddCourseModal }) => {
  const [title, setTitle] = useState("");

  const addNewCourse = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    if (res.status === 201) {
      swal({
        title: 'Course Create succesfully',
        buttons: 'Ok',
        icon:'success'
      })
      console.log("course create successfully ");
      setTitle("");
    }
    const data = await res.json();
  };

  return (
    <div className={styles.modal_container} id="add-new-course-modal">
      <div className={styles.modal_bg} onClick={hideAddCourseModal}></div>
      <div className={styles.modal_content}>
        <h1 className={styles.modal_title}>Add Course   </h1>
        <form
          action="#"
          className={styles.edit_user_form}
          onSubmit={addNewCourse}
        >
          <div className={styles.input_field}>
            <span>
              <FontAwesomeIcon icon={faTag} />
            </span>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              type="text"
              placeholder="Name course "
              spellCheck="false"
            />
          </div>
          <button type="submit" className={styles.update_btn}>
             Create Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourseModal;
