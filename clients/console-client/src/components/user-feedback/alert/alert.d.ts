export type AlertCommonProps={
    type: 'success' | 'info' | 'warning' | 'error';
} & AlertProps;

export type AlertProps ={
    message?: string;
    title?:string;
    onClose?:() => void;
};