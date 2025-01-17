import { FormControl, FormHelperText, TextField } from "@mui/material"
import { CSSProperties } from "react";
import { InputProps } from "./InputProps";


const CommonInput: React.FC<InputProps>= ({
    name, 
    placeholder = "",
    label,
    helperText,
    type = 'text',
    size = '100%',
    value,
    onChange
}) => {

    return (<>
            <FormControl  
                sx={{width:size}}>
            <TextField
                name={name}
                id={`input-${name}`}
                type={type}
                label={label}
                value={value}
                aria-describedby={helperText ? `input-${name}-helper`: undefined  }
                onChange={e => onChange(e.target.name, e.target.value)}
            />
        {helperText && <FormHelperText id={`input-${name}-helper`}>helperText</FormHelperText>}
        </FormControl>
    </>)
}

export default CommonInput;