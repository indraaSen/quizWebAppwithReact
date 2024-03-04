import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DropDownComponent = ({
  handleChange,
  quizSubject,
  subs,
  DropDownHeading,
}: {
  quizSubject: string;
  handleChange: (val: string) => void;
  subs: string[];
  DropDownHeading: string;
}) => {
  return (
    <Box sx={{ minWidth: 320 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{DropDownHeading}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quizSubject}
          label="Subject"
          onChange={(e) => handleChange(e.target.value)}
        >
          {subs.map((sub) => (
            <MenuItem value={sub} sx={{ background: "F4F4F4" }}>
              {sub}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDownComponent;
