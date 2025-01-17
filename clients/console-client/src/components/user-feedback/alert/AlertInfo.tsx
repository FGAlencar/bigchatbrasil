import React, { useState } from "react";
import { AlertProps } from "./alert";
import UserAlert from "./Alert";


const AlertInfo:React.FC<AlertProps> =(props) =>{
    return  <UserAlert {...props} type='info'/>
}

export default AlertInfo;