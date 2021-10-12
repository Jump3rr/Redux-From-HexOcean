import React, { FC } from "react";
import { reduxForm, InjectedFormProps } from "redux-form";
import TextInput from "../../common/TextInput";

let MainForm: FC<InjectedFormProps> = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} name="mainForm">
      <TextInput name="name" placeholder="Name" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: "mainForm"
})(MainForm);
