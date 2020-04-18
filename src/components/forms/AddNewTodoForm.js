import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "../common/Inputs";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

let AddNewTodoForm = (props) => {
  const [formDetails, setFormDetails] = useState({
    authorName: "",
    avatarUrl: "",
    content: "",
    title: "",
  });

  return (
    <FormWrapper>
      <Input label="Author Name: " />
      <Input label="Avatar Url: " />
      <Input label="Content: " />
      <Input label="Title: " />
    </FormWrapper>
  );
};

export default AddNewTodoForm;

AddNewTodoForm.propTypes = {};
