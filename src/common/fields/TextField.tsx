import React from "react";
import { Field } from "redux-form";
import { ITextField } from "../../entities/ITextField";
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
  placeholder,
  meta: { touched, error }
}: IInputField) => (
  <div>
    <div>
      <Input {...input} placeholder={placeholder} type={type} />
      {touched && error && <RequiredMsg>{error}</RequiredMsg>}
    </div>
  </div>
);

const TextField = ({ name, label }: ITextField) => {
  return (
    <SingleField>
      <Label>{label}</Label>
      <Field
        name={name}
        component={renderField}
        type="text"
        placeholder={label}
        validate={required}
      />
    </SingleField>
  );
};

export default TextField;
