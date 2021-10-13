import React, { FC } from "react";
import InputField from "../../../common/InputField";
import styled from "styled-components";

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SandwichForm: FC = () => {
  return (
    <FieldsContainer>
      <InputField
        name="slices_of_bread"
        label="Slices of bread"
        type="number"
        component="input"
        min="1"
        parse={(newValue: string) => Number.parseInt(newValue, 10)}
      />
    </FieldsContainer>
  );
};
export default SandwichForm;
