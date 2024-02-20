import React from "react";
import { FormGroup, Typography } from "@mui/material";
import { ErrorMessage, useField } from "formik";

const TextArea = ({ label, ...props }) => {
  // const [field] = useField(props);

  return (
    <FormGroup>
      <Typography
        variant="body1"
        sx={{ color: "#828282", marginBottom: "4px" , paddingLeft:"0px" }}
      >
        {label}
      </Typography>
      <textarea className="text-area" {...props} />
      {/* <ErrorMessage
        component="div"
        name={props.name}
        className="error-message"
      /> */}
    </FormGroup>
  );
};

export default TextArea;
