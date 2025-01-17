import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import LocalStorage from './storage-configuration/LocalStoragePersistence';
import { UsuarioStorage } from '../types/config/UsuarioStorage';
import { Usuario } from '../types/Usuario';



const UsuarioStograge = create<UsuarioStorage>()(persist(
    (set, get) =>({
        user: undefined,
        lastLogin: undefined,
        logs:[],
        login: (user:Usuario) => set((state:UsuarioStorage) => ({...state, user, lastLogin: new Date().toISOString()} as UsuarioStorage)),
        logout: ():void => set((state:UsuarioStorage) => ({...state, user:undefined, lastLogin: undefined})),
        getUser: ():Usuario | undefined => get().user,
        getLastLogin: ():string | undefined => get().lastLogin,
        requireNewLogin: (): boolean => {
            const lastLogin = get().lastLogin
            if( lastLogin === undefined || lastLogin === null) return true
            const lastLoginDate = new Date(lastLogin);
            const diffInMillisecond = new Date().getTime() - lastLoginDate.getTime();
            const diffInSecond = diffInMillisecond / 1000;
            const diffInMinutes = diffInSecond  / 60
            const diffInHours = diffInMinutes / 60;

            return diffInHours >= 10;

        }
    }),
    
    {
        name:'usuario-storage',
        storage: createJSONStorage(() => LocalStorage)
    }))

export default UsuarioStograge;
