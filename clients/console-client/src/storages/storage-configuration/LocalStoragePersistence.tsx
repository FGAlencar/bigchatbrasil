import { StateStorage } from 'zustand/middleware';

const LocalStorage:StateStorage = {
    setItem: (name:string, value:any) => localStorage.set(name, JSON.stringify(value)),
    getItem: (name) => {
        const value = localStorage.getString(name);
        return value ? JSON.parse(value) : null
    },
    removeItem:(name) => localStorage.delete(name)
}

export default LocalStorage;
