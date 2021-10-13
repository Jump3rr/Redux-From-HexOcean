import React from "react";
import { Field } from "redux-form";
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

const SelectField = () => {
  return (
    <SingleField>
      <Label>Type</Label>
      <Field name="select_food_type" component="select">
        <option />
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="sandwich">Sandwich</option>
      </Field>
    </SingleField>
  );
};

export default SelectField;
