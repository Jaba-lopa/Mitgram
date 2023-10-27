import { useEffect } from 'react';
import cl from './AuthPage.module.scss'
import AuthForm from "./widgets/AuthForm/AuthForm";
import { observer } from 'mobx-react-lite';
import UserStore from 'app/user/store/UserStore';
const AuthPage = () => {
    useEffect(() => {
        console.log('изменился')
    }, [UserStore.user])
    return(
        <div className={cl.AuthPage}>
            <AuthForm />
        </div>
    )
}
export default observer(AuthPage);