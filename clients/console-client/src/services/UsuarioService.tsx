import axios from "axios";
import { LoginRequest } from "../types/LoginRequest";
import { Usuario } from "../types";

export const logar = (form:LoginRequest) =>
    axios.put("/api/usuario/login", form)

export const registrar=(form:Usuario) =>
    axios.post("/api/usuario", form)