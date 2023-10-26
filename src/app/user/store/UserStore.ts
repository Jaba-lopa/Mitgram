import { observable } from "mobx";
import { UserDto } from "../model/UserDto";
import { AuthService } from "../services/AuthService";
const UserStore = observable({
    user: <UserDto>{},
    setUser(userDto: UserDto) {
        this.user = userDto
    },
    isPending: false,
    setIsPending(bool: boolean) {
        this.isPending = bool;
    },

    async register(email: string, password: string, username: string) {
        this.setIsPending(true)
        try{
            const response = await AuthService.register(email, password, username)
            this.setUser(response.data.user)
        } catch(err) {
            console.log(err)
        }
        this.setIsPending(false)
    },

    async login(email: string, password: string) {
        this.setIsPending(true)
        try{
            const response = await AuthService.login(email, password)
            this.setUser(response.data.user)
        } catch(err) {
            console.log(err)
        }
        this.setIsPending(false)
    },

    async checkIsAuth() {
        this.setIsPending(true)
        try{
            const response = await AuthService.isAuth();
            this.setUser(response.data.user)
            console.log('user: ', this.user)
        } catch(err) {
            console.log(err)
        }
        this.setIsPending(false)
    },

    async logout() {
        this.setIsPending(true)
        try{
            await AuthService.logout();
            this.setUser({} as UserDto)
        } catch(err) {
            console.log(err)
        }
        this.setIsPending(false)
    },
})
export default UserStore;