import React from "react";
import { Field } from "redux-form";
import { IInputField } from "../entities/IInputField";
//import styled from "styled-components";

const InputField = ({
  name,
  placeholder,
  type,
  component,
  step
}: IInputField) => {
  return (
    <Field
      name={name}
      component={component}
      type={type}
      placeholder={placeholder}
      step={step}
    />
  );
};

export default InputField;
