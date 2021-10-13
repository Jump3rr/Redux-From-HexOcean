import React from "react";
import { Field } from "redux-form";
import { ISelectField } from "../../entities/ISelectField";
import {
  Label,
  SingleField,
  RequiredMsg
} from "../../common/styles/StyledComponents";
import { required } from "../validation";
import { IInputField } from "../../entities/IInputField";
import styled from "styled-components";

const Select = styled.select`
  background-color: transparent;
  border: none;
  transition: 0.7s;
  color: #8597a3;
  &:hover,
  &:focus {
    background-color: #8597a3;
    color: white;
  }
`;

const renderSelectField = ({
  input,
  meta: { touched, error },
  children
}: IInputField) => (
  <div>
    <Select {...input}>{children}</Select>
    {touched && error && <RequiredMsg>{error}</RequiredMsg>}
  </div>
);

const SelectField = ({ name, onChange }: ISelectField) => {
  return (
    <SingleField>
      <Label>Type</Label>
      <Field
        name={name}
        component={renderSelectField}
        onChange={(e: any) => onChange(e.target.value)}
        validate={required}
      >
        <option />
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="sandwich">Sandwich</option>
      </Field>
    </SingleField>
  );
};

export default SelectField;
