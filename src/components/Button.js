import "../assets/scss/Button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = ({ onClick, faIcon, text, disabled, testId }) => (
  <button
    id="button"
    type="button"
    onClick={onClick}
    disabled={disabled}
    data-testid={testId}
  >
    {faIcon && (
      <span>
        <FontAwesomeIcon
          className={!disabled ? "icon active-icon" : "icon"}
          icon={faIcon}
        />
        {text}
      </span>
    )}
  </button>
);
