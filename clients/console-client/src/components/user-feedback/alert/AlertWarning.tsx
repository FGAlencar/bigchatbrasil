import React, { useState } from "react";
import { AlertProps } from "./alert";
import UserAlert from "./Alert";


const AlertWarning:React.FC<AlertProps> =(props) =>{
    return  <UserAlert {...props} type='warning'/>
}

export default AlertWarning;