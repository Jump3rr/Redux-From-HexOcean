import styled from "styled-components";

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: white;
  font-size: 20px;
  display: flex;
  margin-bottom: 1vh;
`;

export const SingleField = styled.div`
  margin-bottom: 5vh;
`;

export const RequiredMsg = styled.div`
  margin-top: 1vh;
  color: #ff0000;
  font-size: 0.7em;
`;

export const Input = styled.input`
  border: 0;
  background-color: transparent;
  border-bottom: 2px solid #eee;
  font: inherit;
  font-size: 14px;
  font-weight: 30px;
  transition: 0.5s;
  color: #8597a3;
  text-align: center;
  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
  &:focus {
    outline: 0;
    border-bottom-color: blue;
    color: #fff;
  }
`;
