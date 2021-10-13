import React, { FC } from "react";
import NumberField from "../../../common/fields/NumberField";
import { FieldsContainer } from "../../../common/styles/StyledComponents";

const SandwichForm: FC = () => {
  return (
    <FieldsContainer>
      <NumberField
        name="slices_of_bread"
        label="Slices of bread"
        type="number"
        min="1"
        max="999999999999999934463"
        step="1"
        parse={(newValue: string) => Number.parseInt(newValue, 10)}
      />
    </FieldsContainer>
  );
};
export default SandwichForm;
