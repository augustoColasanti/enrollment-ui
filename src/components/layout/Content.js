import { useState } from "react";
import "../../assets/scss/Content.scss";
import { AddStudent } from "../AddStudent";
import { Students } from "../Students";
import { faPlus, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button";

export const Content = () => {
  const [showStudents, setShowStudents] = useState(true);

  return (
    <div id="content" data-testid="content">
      {showStudents ? (
        <div>
          <Students />
          <div>
            <Button
              onClick={() => setShowStudents(!showStudents)}
              faIcon={faPlus}
              text="Add student"
              testId="nav-button"
            />
          </div>
        </div>
      ) : (
        <div>
          <AddStudent />
          <div>
            <Button
              onClick={() => setShowStudents(!showStudents)}
              faIcon={faArrowLeft}
              text="Display students"
              testId="nav-button"
            />
          </div>
        </div>
      )}
    </div>
  );
};
