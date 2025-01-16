import { CSSProperties, ReactNode } from "react"
import React from 'react';
import { Box } from '@mui/material';
import { Property } from "csstype";

const ContainerStyle: CSSProperties = {
    display:'flex',
    margin:0,
    width:'100vw',
    height:'100vh'
}

type Props = {
    children: ReactNode,
    backgroundColor?: Property.BackgroundColor,
    justifyContent?: Property.JustifyContent,
    alignItem?: Property.AlignItems,
}

const FullScreenFlex: React.FC<Props> = ({
    children, 
    backgroundColor = 'white',
    justifyContent='start',
    alignItem='start'
}) =>{
    const style = {
        ...ContainerStyle, 
        backgroundColor, 
        justifyContent, 
        alignItem
    }

    return <Box 
                style={style}>
                    {children}
            </Box>
}

export default FullScreenFlex;