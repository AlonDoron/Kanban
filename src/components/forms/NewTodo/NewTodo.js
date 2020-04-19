import React from "react";
import PropTypes from "prop-types";
import { Input } from "../../common";
import { useForm } from "../../utils";
import { Button } from "../../common";
import { FormWrapper } from "./NewTodo.style";

let NewTodo = (props) => {
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

export default NewTodo;

NewTodo.propTypes = {
  name: PropTypes.string,
  submitForm: PropTypes.func,
  closeModal: PropTypes.func,
};
