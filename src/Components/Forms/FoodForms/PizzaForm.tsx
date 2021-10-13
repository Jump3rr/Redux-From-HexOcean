import React, { FC } from "react";
import { reduxForm, InjectedFormProps } from "redux-form";
import InputField from "../../../common/InputField";
import Field from "redux-form";
import SelectField from "../../../common/SelectField";
import styled from "styled-components";

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PizzaForm: FC<InjectedFormProps> = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} name="pizzaForm">
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
        <SelectField />
        <button type="submit">Submit</button>
      </FieldsContainer>
    </form>
  );
};

export default reduxForm({
  form: "painForm"
})(PizzaForm);
