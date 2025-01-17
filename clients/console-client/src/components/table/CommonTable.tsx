import React from 'react';
import {
    TableContainer,
    Table, 
    TableHead,
    TableBody,
    TableRow,
    TableCell, 
    Paper
} from '@mui/material'


export type TableColumn = {label:string, column:string}
type Props={
    columns: TableColumn[];
    data:any[]
}


const CommonTable:React.FC<Props> = ({
    columns,
    data
}) =>{
    
    const mapColumnsToHead = (columns: TableColumn[]) => 
        <TableRow>
            {columns.map(column => 
                <TableCell>{column.label}</TableCell>)
            }
        </TableRow>

    const mapDataToRow = (data:any[]) =>
        data.map(element =>
            <TableRow>
                {columns.map(column =>
                    <TableCell>{element[column.column]}</TableCell>
                )}
            </TableRow>

        )

    return  <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        {mapColumnsToHead(columns)}
                    </TableHead>
                    <TableBody>
                        {mapDataToRow(data)}
                    </TableBody>
                </Table>
            </TableContainer>
            
}

export default CommonTable;