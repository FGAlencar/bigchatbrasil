export type AppContextPageStorageDefinition = {
    title: string;
    setTitle:(string)=> void;
    getTitle: () => string;
}

export type AppContextStorageDefinition ={
    currentPage: AppContextPageStorageDefinition;
}