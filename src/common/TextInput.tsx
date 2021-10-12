import React from "react";
import { Field } from "redux-form";
import { ITextInput } from "../entities/ITextInput";
//import styled from "styled-components";

const TextInput = ({ name, placeholder }: ITextInput) => {
  return (
    <Field
      name={name}
      component="input"
      type="text"
      placeholder={placeholder}
    />
  );
};

export default TextInput;
