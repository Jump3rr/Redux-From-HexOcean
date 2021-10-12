import React, { FC } from "react";
import MainForm from "./Forms/MainForm";

export const Home: FC = () => {
  const handleSubmit = () => {
    console.log("abc");
  };
  return (
    <div>
      <MainForm onSubmit={handleSubmit} />
    </div>
  );
};
