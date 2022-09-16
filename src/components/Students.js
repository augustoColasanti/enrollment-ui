import { useEffect, useState } from "react";
import "../assets/scss/Students.scss";
import { APIUtils } from "../common/APIUtils";
import { Title } from "./Title";

export const Students = () => {
  const [students, setStudents] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleGetStudentsSuccess = (data) => {
    setStudents(data);
  };

  const handleGetStudentsError = () => {
    alert("Something went wrong.");
    setHasError(true);
  };

  const handleGetStudentsFinally = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      APIUtils.get(
        "students?sort=ASC",
        handleGetStudentsSuccess,
        handleGetStudentsError,
        handleGetStudentsFinally
      );
    };

    fetchData();
  }, []);

  return (
    <div id="students" data-testid="students">
      <Title text="ROSTER" />
      {isLoaded && !hasError ? (
        <table cellSpacing="0" data-testid="students-table">
          <thead>
            <tr key="header">
              <th colSpan="2">Start Date</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student.id}>
                  <td className="student-name">{student.name}</td>
                  <td>{student.startDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No student created yet.</td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr key="footer">
              <td colSpan="2">Total: {students.length}</td>
            </tr>
          </tfoot>
        </table>
      ) : isLoaded && hasError ? (
        <div data-testid="tech-issues-message">
          We are facing some technical issues. Please try again later.
        </div>
      ) : (
        <div data-testid="loading-students">Loading...</div>
      )}
    </div>
  );
};
