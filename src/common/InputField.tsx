import React from "react";
import { Field } from "redux-form";
import { IInputField } from "../entities/IInputField";
import styled from "styled-components";

const Label = styled.label`
  color: white;
  font-size: 20px;
  display: flex;
  margin-bottom: 1vh;
`;

const SingleField = styled.div`
  margin-bottom: 5vh;
`;

const InputField = ({
  name,
  label,
  placeholder,
  type,
  component,
  step,
  min,
  max,
  parse
}: IInputField) => {
  return (
    <SingleField>
      <Label>{label}</Label>
      <Field
        name={name}
        component={component}
        type={type}
        placeholder={placeholder}
        step={step}
        min={min}
        max={max}
        parse={parse}
      />
    </SingleField>
  );
};

export default InputField;
