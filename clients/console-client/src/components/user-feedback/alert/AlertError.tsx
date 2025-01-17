import React, { useState } from "react";
import { AlertProps } from "./alert";
import UserAlert from "./Alert";


const AlertError:React.FC<AlertProps> =(props) =>{
    return  <UserAlert {...props} type='error'/>
}

export default AlertError;