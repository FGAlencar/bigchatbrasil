import React, { ReactNode } from 'react';
import {
    TableContainer,
    Table, 
    TableHead,
    TableBody,
    TableRow,
    TableCell, 
    Paper
} from '@mui/material'


export type TableColumn = {label:string, column:string, renderComponent:(value:any) => ReactNode | undefined}
type Props={
    columns: TableColumn[];
    data:any[],
    action?:(element:any, indexElement:number) => ReactNode;
}


const CommonTable:React.FC<Props> = ({
    columns,
    data,
    action
}) =>{
    
    const mapColumnsToHead = (columns: TableColumn[]) => 
        <TableRow>
            {columns.map(column => 
                <TableCell>{column.label}</TableCell>)
            }
            {action && <TableCell>Ações</TableCell> }
        </TableRow>

    const mapDataToRow = (data:any[]) =>
        data.map((element, indexElement) =>
            <TableRow>
                {columns.map(column =>
                    <TableCell>{column.renderComponent(element[column.column])}</TableCell>
                )}
                {
                    action && <TableCell>{action(element, indexElement)}</TableCell> 
                }
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