import React from "react";
import { FormGroup, Typography } from "@mui/material";
import { ErrorMessage, useField } from "formik";

const TextField = ({ label, ...props }) => {
  // const [field] = useField(props);
  return (
    <FormGroup>
      <Typography
        variant="body1"
        sx={{ color: "#828282", marginBottom: "4px", paddingLeft: "0px" }}
      >
        {label}
      </Typography>
      <input
        className="input-textfield"
        value={props.value}
        {...props}
        step="0"
      />
      {/* <ErrorMessage
        component="div"
        name={props.name}
        className="error-message"
      /> */}
    </FormGroup>
  );
};

export default TextField;
