import { Usuario } from "../types/Usuario"

export type UsuarioStorage = {
    user?: Usuario;
    lastLogin?: string;
    logs?: string[];
    login: (user:Usuario) => void;
    logout: () => void;
    getUser: () => Usuario | undefined;
    getLastLogin: () => string | undefined;
    requireNewLogin: () => boolean

}