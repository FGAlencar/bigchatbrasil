import CommonInput from "./CommonInput";
import { InputProps } from "./InputProps.d";


const InputText: React.FC<InputProps>= (props) => {
    return (
        <CommonInput 
            {...props}
            type="text" />
    )
}

export default InputText;