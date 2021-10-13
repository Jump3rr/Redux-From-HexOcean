import React, { FC } from "react";
import NumberField from "../../../common/fields/NumberField";
import { FieldsContainer } from "../../../common/styles/StyledComponents";

const PizzaForm: FC = () => {
  return (
    <FieldsContainer>
      <NumberField
        name="no_of_slices"
        label="Number of slices"
        type="number"
        min="1"
        max="999999999999999934463"
        step="1"
        parse={(newValue: string) => Number.parseInt(newValue, 10)}
      />
      <NumberField
        name="diameter"
        label="Diameter"
        type="number"
        min="0.00001"
        step="any"
        max="999999999999999934463"
        parse={(newValue: string) => Number.parseFloat(newValue)}
      />
    </FieldsContainer>
  );
};
export default PizzaForm;
