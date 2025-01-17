import { Button } from "@mui/material";
import { CSSProperties } from "react";


type Props = {
    onClick: () => void,
    variant?: 'text' | 'outlined' | 'contained',
    label: string,
    style?: CSSProperties
}
const CommonButton:React.FC<Props> = ({
    onClick,
    label,
    variant = 'contained',
    style
}) =>{
    return <Button style={style} variant={variant} onClick={() => onClick()}> {label} </Button>
}

export default CommonButton;