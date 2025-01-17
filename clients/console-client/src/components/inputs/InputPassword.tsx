import { InputProps } from "./InputProps.d";
import CommonInput from "./CommonInput";


const InputPassword: React.FC<InputProps>= (props) => {
    return <CommonInput
                {...props}
                type="password" 
            />
}

export default InputPassword;