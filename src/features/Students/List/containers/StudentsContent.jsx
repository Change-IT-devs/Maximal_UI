import React, { startTransition, useEffect, useState } from "react";
import "./StudentsContent.scss";
import StudentsList from "../components/StudentsList/StudentsList";
import StudentsCards from "../components/StudentsCards/StudentsCards";
import { MAX_WIDTH_TABLET } from "../../../../constants";
import { deleteStudentApi, getAllStudentsApi } from "../../api";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../../../components";

const StudentsContent = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [listEnable, setListEnable] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    if (windowWidth > MAX_WIDTH_TABLET) {
      setListEnable(true);
    } else {
      setListEnable(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getAllStudentsApi();
        setStudents(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const removeStudent = (id) => {
    try {
      startTransition(async () => {
        await deleteStudentApi(id);
      });
      const filteredStudents = students.filter((s) => s._id !== id);
      setStudents([...filteredStudents]);
      document.activeElement.blur();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="students_list">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="list_head">
            <h1 className="list_title">Studentlar</h1>
            <button
              className="list_button"
              onClick={() => navigate("/students/new")}
            >
              <span>+</span> O'quvchi qo'shish
            </button>
          </div>
          <div className="list_body">
            {listEnable ? (
              <StudentsList students={students} removeStudent={removeStudent} />
            ) : (
              <StudentsCards
                students={students}
                removeStudent={removeStudent}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default StudentsContent;
