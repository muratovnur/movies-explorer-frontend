import { useState, useCallback } from "react";

//хук управления формой и валидации формы
export function useFormWithValidation(initialValues = {}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const newValues = {...values, [name]: value}

    if(target["name"] === "name" && target.validity.patternMismatch) { 
      target.setCustomValidity('Имя должно быть длиной от 2 до 30 символов и содержать только латиницу, кириллицу, пробел или дефис.')
    }
    else if(target["name"] === "name" && !target.validity.patternMismatch) { 
      target.setCustomValidity('')
    }

    if(target["name"] === "email" && target.validity.patternMismatch) { 
      target.setCustomValidity('Введите данные в формате: test@example.ru')
    }
    else if(target["name"] === "email" && !target.validity.patternMismatch) { 
      target.setCustomValidity('')
    }

    setValues(newValues);
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid((newValues.name !== initialValues.name || newValues.email !== initialValues.email) && target.closest("form").checkValidity())
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