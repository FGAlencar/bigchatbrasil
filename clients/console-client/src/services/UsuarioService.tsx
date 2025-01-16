import axios from "axios";
import { LoginRequest } from "../types/LoginRequest";

export const logar = (form:LoginRequest) =>
    axios.put("/api/usuario/login", form)