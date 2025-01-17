import { create } from 'zustand';
import { AppContextStorageDefinition } from '../types/config/AppContextStorage';


const AppContextStorage = create<AppContextStorageDefinition>()(
    (set, get) =>({
        currentPage:{
            title:'Home',
            setTitle: (title:string) => set(state => ({...state, currentPage:{...state.currentPage, title}})),
            getTitle:() => get().currentPage.title,
        },
    
    }))
    
export default AppContextStorage;
