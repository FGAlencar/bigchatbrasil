import React, { useState } from "react";
import { AlertProps } from "./alert";
import UserAlert from "./Alert";


const AlertSuccess:React.FC<AlertProps> =(props) =>{
    return  <UserAlert {...props} type='success'/>
}

export default AlertSuccess;