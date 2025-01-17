import { Alert, AlertTitle, Box, Collapse, IconButton } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from'@mui/icons-material/Close'
import { AlertCommonProps } from "./alert";


const UserAlert:React.FC<AlertCommonProps> =({
    type,
    title="Ops...",
    message="Não foi possível concluir a operação. Por favor, contate o suporte!",
    onClose
  }) =>{
    const[show, setShow] = useState<boolean>(true);

    return  <Box position={'absolute'} width={'100vw'} bottom={0} left={0}>
                <Collapse in={show}>
                    <Alert severity={type} 
                        action={
                            <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setShow(false);
                                onClose && onClose()
                            }}
                            >
                            <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}>
                            <AlertTitle>{title}</AlertTitle>
                            {message}
                    </Alert>
                </Collapse>
            </Box>
}

export default UserAlert;