import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

const FileUploadInput = ({ inputLabel, label, width, ...props }) => {
  return (
    <Box my={1}>
      <Stack>
        <Typography variant="subtitle1" color="#283C92">
          {inputLabel}
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          sx={{
            height: "50px",
            // width: "90%",
            width: width ?? "auto",
            backgroundColor: "rgba(40, 60, 146, 0.11)",
            borderRadius: "6px",
          }}
        >
          <input
            className="input-textfield"
            value={props.value}
            {...props}
            step="0"
          />
          <Button
            variant="contained"
            // size="medium"
            sx={{
              boxShadow: "none",
              bgcolor: "#283C92",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#283C92",
              },
            }}
            component="label"
          >
            Select File
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default FileUploadInput;
