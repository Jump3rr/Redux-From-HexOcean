import React, { FC } from "react";
import MainForm from "./Forms/MainForm";
import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: #282c34;
`;

export const Home: FC = () => {
  const handleSubmit = () => {
    console.log("abc");
  };
  return (
    <MainWrapper>
      <MainForm onSubmit={handleSubmit} />
    </MainWrapper>
  );
};
