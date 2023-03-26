import { useState, useCallback } from "react";

//хук управления формой и валидации формы
export function useFormWithValidation(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if(target["name"] === "name" && target.validity.patternMismatch) { 
      target.setCustomValidity('Поле может содержать только латиницу, кириллицу, пробел или дефис.')
    }
    else if(target["name"] === "name" && !target.validity.patternMismatch) { 
      target.setCustomValidity('')
    }
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}