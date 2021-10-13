import React, { useState } from "react";
import { Field } from "redux-form";
import styled from "styled-components";
import { ISelectField } from "../entities/ISelectField";

const Label = styled.label`
  color: white;
  font-size: 20px;
  display: flex;
  margin-bottom: 1vh;
`;
const SingleField = styled.div`
  margin-bottom: 5vh;
`;

const SelectField = ({ name, onChange }: ISelectField) => {
  return (
    <SingleField>
      <Label>Type</Label>
      <Field
        name="select_food_type"
        component="select"
        onChange={(e: any) => onChange(e.target.value)}
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
