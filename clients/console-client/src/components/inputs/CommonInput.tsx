import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material"
import { CSSProperties } from "react";
import { InputProps } from "./InputProps";


const style:CSSProperties = {

}



const CommonInput: React.FC<InputProps>= ({
    name, 
    placeholder = "",
    label,
    helperText,
    type = 'text',
    size = '100%',
    onChange
}) => {

    return (<>
            <FormControl  
                sx={{width:size}}>
            { label && <InputLabel htmlFor={`input-${name}`}>{label}</InputLabel>}
            <Input
                name={name}
                id={`input-${name}`}
                placeholder={placeholder} 
                type={type}
                style={style}
                aria-describedby={helperText ? `input-${name}-helper`: undefined  }
                onChange={e => onChange(e.target.name, e.target.value)}
            />
        {helperText && <FormHelperText id={`input-${name}-helper`}>helperText</FormHelperText>}
        </FormControl>
    </>)
}

export default CommonInput;