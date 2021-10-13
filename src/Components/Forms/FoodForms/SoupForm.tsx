import React, { FC } from "react";
import NumberField from "../../../common/fields/NumberField";
import { FieldsContainer } from "../../../common/styles/StyledComponents";

const SoupForm: FC = () => {
  return (
    <FieldsContainer>
      <NumberField
        name="spiciness_scale"
        label="Spiciness scale"
        type="range"
        min="1"
        max="10"
        step="1"
        parse={(newValue: string) => Number.parseInt(newValue, 10)}
      />
    </FieldsContainer>
  );
};
export default SoupForm;
