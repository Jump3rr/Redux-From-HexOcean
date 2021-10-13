import React, { FC } from "react";
import InputField from "../../../common/InputField";
import styled from "styled-components";

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PizzaForm: FC = () => {
  return (
    <FieldsContainer>
      <InputField
        name="no_of_slices"
        label="Number of slices"
        type="number"
        component="input"
        min="1"
        max="20"
        parse={(newValue: string) => Number.parseInt(newValue, 10)}
      />
      <InputField
        name="diameter"
        label="Diameter"
        type="number"
        component="input"
        min="1"
        max="20"
        parse={(newValue: string) => Number.parseFloat(newValue)}
      />
    </FieldsContainer>
  );
};
export default PizzaForm;
