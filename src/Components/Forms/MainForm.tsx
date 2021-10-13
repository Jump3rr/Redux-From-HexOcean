import React, { FC, useState } from "react";
import { reduxForm, InjectedFormProps } from "redux-form";
import InputField from "../../common/InputField";
import SelectField from "../../common/SelectField";
import styled from "styled-components";
import PizzaForm from "./FoodForms/PizzaForm";
import SandwichForm from "./FoodForms/SandwichForm";
import SoupForm from "./FoodForms/SoupForm";

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
          name="preparation_time"
          label="Preparation time:"
          type="time"
          component="input"
          step="1"
        />
        <SelectField name="type" onChange={changeSelect} />
      </FieldsContainer>
      {selected === "pizza" && <PizzaForm />}
      {selected === "sandwich" && <SandwichForm />}
      {selected === "soup" && <SoupForm />}
      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: "mainForm"
})(MainForm);
