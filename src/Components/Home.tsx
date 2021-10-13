import React, { FC } from "react";
import MainForm from "./Forms/MainForm";
import styled from "styled-components";
import Api from "../api/FrostyWood";
import { url } from "../api/ApiURL";
import { ToastContainer } from "react-toastify";

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: #282c34;
`;

export const Home: FC = () => {
  const handleSubmit = (data: any) => {
    Api.post(url, data)
      .then((res) => res)
      .catch((err) => err);
  };

  return (
    <MainWrapper>
      <MainForm onSubmit={handleSubmit} />
      <ToastContainer />
    </MainWrapper>
  );
};
