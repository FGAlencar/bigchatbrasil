import { Input } from "@mui/material"
import { CSSProperties } from "react";


const style:CSSProperties = {

}

type Props = {
    name:string,
    placeholder?: string, 
    onChange: (name:string, value:string) => void;
}

const InputText: React.FC<Props>= ({
    name, 
    placeholder = "Digite...",
    onChange
}) => {
    return <Input
                name={name}
                placeholder={placeholder} 
                type="text" 
                style={style}
                onChange={e => onChange(e.target.name, e.target.value)}
            />
}

export default InputText;