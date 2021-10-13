import React, { FC, useState } from "react";
import { reduxForm, InjectedFormProps } from "redux-form";
import TextField from "../../common/fields/TextField";
import SelectField from "../../common/fields/SelectField";
import PizzaForm from "./FoodForms/PizzaForm";
import SandwichForm from "./FoodForms/SandwichForm";
import SoupForm from "./FoodForms/SoupForm";
import NumberField from "../../common/fields/NumberField";
import { FieldsContainer } from "../../common/styles/StyledComponents";
import styled from "styled-components";

const Button = styled.button`
  margin: 1vw;
  padding: 8px;
  background: none;
  border-style: solid;
  border-color: #fff;
  border-radius: 20px;
  transition: 1s;
  color: #fff;
  &:hover,
  &:focus {
    background: #8597a3;
    color: #000;
    box-shadow: 0 0 10pt 0.5pt #8597a3;
  }
  &:active {
    background-color: #fff;
    box-shadow: 0 0 2pt 0.5pt #8597a3;
    color: #000000;
    transition: 0.2s;
  }
`;

const MainForm: FC<InjectedFormProps> = (props) => {
  const { handleSubmit } = props;
  const [selected, changeSelect] = useState("");
  return (
    <form onSubmit={handleSubmit} name="mainForm">
      <FieldsContainer>
        <TextField name="name" label="Name" />
        <NumberField
          name="preparation_time"
          label="Preparation time"
          type="time"
          step="1"
        />
        <SelectField name="type" onChange={changeSelect} />
      </FieldsContainer>
      {selected === "pizza" && <PizzaForm />}
      {selected === "sandwich" && <SandwichForm />}
      {selected === "soup" && <SoupForm />}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default reduxForm({
  form: "mainForm"
})(MainForm);
