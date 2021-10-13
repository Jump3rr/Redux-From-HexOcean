import React from "react";
import { Field } from "redux-form";
import { INumberField } from "../../entities/INumberField";
import { IInputField } from "../../entities/IInputField";
import {
  Label,
  SingleField,
  RequiredMsg,
  Input
} from "../../common/styles/StyledComponents";
import { required } from "../validation";

const renderField = ({
  input,
  type,
  meta: { touched, error },
  step,
  min,
  max
}: IInputField) => (
  <div>
    <div>
      <Input {...input} type={type} step={step} min={min} max={max} />
      {touched && error && <RequiredMsg>{error}</RequiredMsg>}
    </div>
  </div>
);

const NumberField = ({
  name,
  label,
  type,
  step,
  min,
  max,
  parse
}: INumberField) => {
  return (
    <SingleField>
      <Label>{label}</Label>
      <Field
        name={name}
        component={renderField}
        type={type}
        step={step}
        min={min}
        max={max}
        parse={parse}
        validate={required}
      />
    </SingleField>
  );
};

export default NumberField;
