import { useState } from "react";

const useInputB = (validateValue) => {
  const [enterdValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validateValue(enterdValue);
  const hasError = !inputIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueInputBlur = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enterdValue,
    isValid: inputIsValid,
    hasError,
    valueChangeHandler,
    valueInputBlur,
    reset,
  };
};

export default useInputB;
