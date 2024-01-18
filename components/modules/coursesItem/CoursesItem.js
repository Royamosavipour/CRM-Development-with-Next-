import DeleteModal from "@/components/templates/index/DeleteModal";
import EditModal from "@/components/templates/index/EditModal";
import { useState } from "react";
import styles from "@/styles/Course.module.css";
import swal from "sweetalert";




const CoursesItem = ({ title, _id }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const hideEditModal = () => setShowEditModal(false);
  const hideDeleteModal = () => setShowDeleteModal(false);

  const removeCourse = async () => {
    const res = await fetch(`/api/courses/${_id}`, {
      method:'DELETE'
    });
    const data = await res.json();

    if (res.status === 200) {
      setShowDeleteModal(false)
      swal({
        title: 'Cours Success Delete',
        buttons: 'OK',
        icon:'success'
  })
}
    const updateCourse = async ({title}) => {
      const res = await fetch(`/api/courses/${_id}`, {
        method: 'PUT',
        headers:{"Content-Type":"aplication/json"},
        body:JSON.stringify({title})
      })
      if (res.status===200) {
        setShowEditModal(false)
        swal({
          title: 'Cours Success Update ',
          buttons: 'OK',
          icon:'success'

      })
}


  };

  return (
    <>
      <li className={styles.courses_item}>
        <div className={styles.courses_img_title}>
          <img
            src="/images/courses/PWA.jpg"
            alt="course-item-img"
            className={styles.courses_img}
          />
          <h5 className={styles.courses_name}>{title}</h5>
        </div>
        <div className={styles.courses_btns}>
          <a
            href="#"
            className={styles.courses_btn_edit}
            onClick={() => setShowEditModal(true)}
          >
            {" "}
            Edit{" "}
          </a>
          <a
            href="#"
            className={styles.courses_btn_delete}
            onClick={() => setShowDeleteModal(true)}
          >
            {" "}
            Delete{" "}
          </a>
        </div>
      </li>
      {showEditModal && <EditModal hideEditModal={hideEditModal} />}
      {showDeleteModal && <DeleteModal removeCourse={removeCourse} hideDeleteModal={hideDeleteModal} />}
    </>
  );
};

export default CoursesItem;
