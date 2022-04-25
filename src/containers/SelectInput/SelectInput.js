import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { secondaryColor } from "../../assets/theme/theme";
const SelectInput = (props) => {
  const [inputData, setInputData] = useState(props.defaultValue);
  const handleChange = (event) => {
    setInputData(event.target.value);
    const optionId = props.options.find(
      (option) => option.name.trim() === event.target.value.trim()
    ).id;
    props.onChange(optionId);
  };
  const options = props.options.map((option) => (
    <MenuItem value={option.name} key={option.name} id={option.id}>
      {option.name}
    </MenuItem>
  ));
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "left",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <FormControl
        variant="standard"
        color={props.color}
        component="form"
        sx={{
          width: {
            lg: "15em",
            xs: "9em",
          },
        }}
      >
        <InputLabel
          id="demo-simple-select-label"
          sx={{ color: secondaryColor }}
          component="label"
        >
          {props.label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={inputData}
          label="Routes"
          component="input"
          onChange={handleChange}
          color={props.color}
          sx={{
            "::before": { borderBottomColor: props.color },
          }}
        >
          {options}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectInput;
