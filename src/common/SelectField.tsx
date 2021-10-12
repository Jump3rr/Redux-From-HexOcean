import React from "react";
import { Field } from "redux-form";

const SelectField = () => {
  return (
    <Field name="select_food_type" component="select">
      <option />
      <option value="pizza">Pizza</option>
      <option value="soup">Soup</option>
      <option value="sandwich">Sandwich</option>
    </Field>
  );
};

export default SelectField;
