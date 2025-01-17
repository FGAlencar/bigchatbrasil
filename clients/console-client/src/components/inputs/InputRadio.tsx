import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { FormControl, FormLabel } from "react-bootstrap";
import { InputRadioProps } from "./InputProps";

const InputRadio:React.FC<InputRadioProps> = ({
    name,
    value,
    options,
    label,
    row=false,
    onChange
}) =>{
    return(
        <Box>
            <FormLabel id={`labelFor-${name}`}>{label}</FormLabel>
            <RadioGroup
                aria-labelledby={`labelFor-${name}`}
                name={name}
                value={value}
                row={row}
                sx={{width:'100%'}}
                onChange={e => onChange(e.target.name, e.target.value)}>
                {options.map(option => 
                    <FormControlLabel 
                        key={option.value}
                        value={option.value} 
                        control={<Radio />} 
                        label={option.label} /> )}
            </RadioGroup>
      </Box>
      )
}

export default InputRadio;
