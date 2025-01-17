import { StateStorage } from 'zustand/middleware';

const LocalStorage:StateStorage = {
    setItem: (name:string, value:any) => localStorage.setItem(name, JSON.stringify(value)),
    getItem: (name) => {
        const value = localStorage.getItem(name);
        return value ? JSON.parse(value) : null
    },
    removeItem:(name) => localStorage.removeItem(name)
}

export default LocalStorage;
