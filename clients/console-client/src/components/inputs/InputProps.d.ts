export type InputProps = {
    name:string,
    placeholder?: string,
    label?: string;
    helperText?:string;
    type?:string;
    value?:any;
    size?:string
    value?:any,
    onChange: (name:string, value:any) => void;
}

export type InputRadioItem = {
    label:string;
    value: any
}

export type InputRadioProps = {
    options:InputRadioItem[],
    row?:boolean
} & InputProps;