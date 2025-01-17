import { Backdrop, CircularProgress } from "@mui/material"

type Props ={
    loading: boolean
}
const LoadingSpinner:React.FC<Props> = ({loading}) =>{
    return  <div>
                <Backdrop 
                    sx={{ backgroundColor:'rgba(255,255,255,0.7)', color:'#1976d2',zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={loading}>
                        <CircularProgress color="inherit"/>
                </Backdrop>
            </div>
}

export default LoadingSpinner;