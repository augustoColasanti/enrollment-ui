import { Title } from "./Title";
import "../assets/scss/AddStudent.scss";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../components/Button";
import { Input } from "../components/Input.js";
import { useState } from "react";
import { APIUtils } from "../common/APIUtils";

export const AddStudent = () => {
  const initialForm = {
    name: {
      value: "",
      valid: false,
      touched: false,
      validationRules: {
        isRequired: true,
      },
    },
    startDate: {
      value: "",
      valid: false,
      touched: false,
      validationRules: {
        isRequired: true,
        minLength: 10,
      },
    },
  };
  const [formControls, setFormControl] = useState(initialForm);

  const requiredValidator = (value) => {
    return value.trim() !== "";
  };

  const minLengthValidator = (value, minLength) => {
    return value.length >= minLength;
  };

  const validate = (value, rules) => {
    let isValid = true;

    for (let rule in rules) {
      switch (rule) {
        case "isRequired":
          isValid = isValid && requiredValidator(value);
          break;
        case "minLength":
          isValid = isValid && minLengthValidator(value, rules[rule]);
          break;

        default:
          isValid = true;
      }
    }

    return isValid;
  };

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormControl({
      ...formControls,
      [name]: {
        ...formControls[name],
        value: value,
        touched: true,
        valid: validate(value, formControls[name].validationRules),
      },
    });
  };

  const handleAddStudentSuccess = () => {
    alert("Information was saved.");
    setFormControl(initialForm);
  };

  const handleAddStudentError = () => {
    alert("Something went wrong.");
  };

  const addStudent = () => {
    const body = {
      name: formControls.name.value,
      startDate: formControls.startDate.value,
    };
    APIUtils.post(
      "students",
      body,
      handleAddStudentSuccess,
      handleAddStudentError
    );
  };

  return (
    <div id="add-student" data-testid="add-student">
      <Title text="ENROLLMENT" />
      <form>
        <div className="field">
          <label>
            Name<span className="required-icon">*</span>
            <br />
            <Input
              type="text"
              name="name"
              value={formControls.name.value}
              onChange={changeHandler}
              touched={formControls.name.touched}
              valid={formControls.name.valid}
              testId="name-input"
            />
          </label>
        </div>
        <div className="field">
          <label>
            Start Date<span className="required-icon">*</span>
            <br />
            <Input
              type="date"
              name="startDate"
              value={formControls.startDate.value}
              onChange={changeHandler}
              touched={formControls.startDate.touched}
              valid={formControls.startDate.valid}
              testId="start-date-input"
            />
          </label>
        </div>
        <div>
          <Button
            onClick={addStudent}
            faIcon={faFloppyDisk}
            text="Save"
            disabled={!formControls.name.valid || !formControls.startDate.valid}
            testId="save-button"
          />
        </div>
      </form>
    </div>
  );
};
