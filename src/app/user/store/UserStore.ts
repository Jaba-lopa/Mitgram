import { observable } from "mobx";
import { UserDto } from "../model/UserDto";
import { AuthService } from "../services/AuthService";
const UserStore = observable({
    user: {} as UserDto,
    setUser(userDto: UserDto) {
        this.user = userDto;
    },
    isAuth: false,
    setIsAuth(bool: boolean){
        this.isAuth = bool;
    },
    isPending: false,
    setIsPending(bool: boolean) {
        this.isPending = bool;
    },

    async register(email: string, password: string, username: string) {
        this.setIsPending(true)
        try{
            const response = await AuthService.register(email, password, username)
            UserStore.setUser(response.data.user)
            UserStore.setIsAuth(true)
        } catch(err) {
            console.log(err)
        }
        this.setIsPending(false)
    },

    async login(email: string, password: string) {
        this.setIsPending(true)
        try{
            const response = await AuthService.login(email, password)
            UserStore.setUser(response.data.user)
            UserStore.setIsAuth(true)
        } catch(err) {
            console.log(err)
        }
        this.setIsPending(false)
    },

    async checkIsAuth() {
        this.setIsPending(true)
        try{
            const response = await AuthService.isAuth();
            UserStore.setUser(response.data.user)
            UserStore.setIsAuth(response.data.isAuth)
        } catch(err) {
            console.log(err)
        }
        this.setIsPending(false)
    },

    async logout() {
        this.setIsPending(true)
        try{
            await AuthService.logout();
            UserStore.setUser({} as UserDto)
            this.setIsAuth(false)
        } catch(err) {
            console.log(err)
        }
        this.setIsPending(false)
    },
})
export default UserStore;