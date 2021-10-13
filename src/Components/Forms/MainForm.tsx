import React, { FC, useState } from "react";
import {
  reduxForm,
  InjectedFormProps,
  FormSection,
  formValueSelector,
  change
} from "redux-form";
import InputField from "../../common/InputField";
import Field from "redux-form";
import SelectField from "../../common/SelectField";
import styled from "styled-components";
import PizzaForm from "./FoodForms/PizzaForm";
import { connect } from "react-redux";

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

let MainForm: FC<InjectedFormProps> = (props) => {
  const { handleSubmit } = props;
  const [selected, changeSelect] = useState("abc");

  return (
    <form onSubmit={handleSubmit} name="mainForm">
      <FieldsContainer>
        <InputField
          name="name"
          label="Name"
          placeholder="Name"
          type="text"
          component="input"
        />
        <InputField
          name="preperation_time"
          label="Preparation time:"
          type="time"
          component="input"
          step="1"
        />
        <SelectField name="foodType" onChange={changeSelect} />
      </FieldsContainer>
      {selected === "pizza" && (
        <FormSection name="pizza">
          <PizzaForm />
        </FormSection>
      )}
      {selected === "sandwich" && (
        <FormSection name="pizza">
          <PizzaForm />
        </FormSection>
      )}
      {selected === "soup" && (
        <FormSection name="pizza">
          <PizzaForm />
        </FormSection>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: "mainForm"
})(MainForm);

const selector = formValueSelector("mainForm");
MainForm = connect((state) => {
  const dishTypeValue = selector(state, "type");
  return {
    dishTypeValue
  };
})(MainForm);
