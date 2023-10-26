import { AxiosResponse } from "axios";
import $apiUser from "../../http/apiUser";
import { AuthResponseModel } from "../model/AuthResponse";

export class AuthService {
    static async register(email: string, password: string, username: string): Promise<AxiosResponse<AuthResponseModel>> {
        return $apiUser.post('/register', { email, password, username })
    }
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponseModel>> {
        return $apiUser.post('/login', { email, password })
    }
    static async isAuth() {
        return $apiUser.get('/isAuth');
    }
    static async logout() {
        return $apiUser.get('/logout');
    }
}