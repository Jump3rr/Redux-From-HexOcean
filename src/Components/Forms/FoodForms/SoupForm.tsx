import React, { FC } from "react";
import InputField from "../../../common/InputField";
import styled from "styled-components";

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SoupForm: FC = () => {
  return (
    <FieldsContainer>
      <InputField
        name="spiciness_scale"
        label="Spiciness scale"
        type="range"
        component="input"
        min="1"
        max="10"
        step="1"
        parse={(newValue: string) => Number.parseInt(newValue, 10)}
      />
    </FieldsContainer>
  );
};
export default SoupForm;
