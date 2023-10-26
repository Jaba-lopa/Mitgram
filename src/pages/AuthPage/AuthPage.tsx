import cl from './AuthPage.module.scss'
import AuthForm from "./widgets/AuthForm/AuthForm";
const AuthPage = () => {
    return(
        <div className={cl.AuthPage}>
            <AuthForm />
        </div>
    )
}
export default AuthPage;