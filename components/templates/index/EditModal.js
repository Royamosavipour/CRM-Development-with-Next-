import "@fortawesome/fontawesome-svg-core/styles.css";
import { useState } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faTag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Modal.module.css";

const EditModal = ({ hideEditModal, updateCourse } ) => {
  const [title, setTitle] = useState("");

  return (
    <div className={styles.modal_container} id="edit-modal">
      <div className={styles.modal_bg} onClick={hideEditModal}></div>
      <div className={styles.modal_content}>
        <h1 className={styles.modal_title}>اطلاعات جدید را وارد کنید</h1>
        <form className={styles.edit_user_form}>
          <div className={styles.input_field}>
            <span>
              <FontAwesomeIcon icon={faTag} />
            </span>
            <input
              type="text"
              value={title}
              spellCheck="false"
              onChange={event =>setTitle(event.target.value)}

              
            />
          </div>

          <button
            type="submit"
            className={styles.update_btn}
            onClick={(event) => updateCourse(event, title)}
          >
            اپدیت دوره
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
