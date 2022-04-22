import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { secondaryColor } from "../../assets/theme/theme";
const SelectInput = (props) => {
  const [inputData, setInputData] = useState("");
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
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth variant="standard">
        <InputLabel
          id="demo-simple-select-label"
          sx={{ color: secondaryColor }}
        >
          {props.label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={inputData}
          label="Age"
          onChange={handleChange}
        >
          {options}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectInput;
