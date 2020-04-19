import React from "react";
import PropTypes from "prop-types";
import { Input } from "../common/Inputs";
import styled from "styled-components";
import { useForm } from "../utils";
import { Button } from "../common";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

let AddNewTodoForm = (props) => {
  const handleFormSubmit = () => {
    let formData = [];
    formData.push({ name: props.name, values });
    props.submitForm(...formData);
  };

  const [values, handleChange, handleSubmit] = useForm(handleFormSubmit);

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input
        value={values.authorName || ""}
        onChange={handleChange}
        name="authorName"
        label="Assigned To"
        type="text"
        required
      />

      <Input
        value={values.avatarUrl || ""}
        onChange={handleChange}
        name="avatarUrl"
        label="Avatar Url"
        type="text"
      />

      <Input
        value={values.content || ""}
        onChange={handleChange}
        name="content"
        label="Content"
        type="text"
      />

      <Input
        value={values.title || ""}
        onChange={handleChange}
        name="title"
        label="Title"
        type="text"
        required
      />

      <Button text="Create" type="submit" />
      <Button text="Reset" type="reset" />
      <Button text="Close" onButtonClick={props.closeModal} />
    </FormWrapper>
  );
};

export default AddNewTodoForm;

AddNewTodoForm.propTypes = {
  name: PropTypes.string,
  submitForm: PropTypes.func,
  closeModal: PropTypes.func,
};
