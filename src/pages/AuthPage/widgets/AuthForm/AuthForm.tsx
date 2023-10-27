import { useState } from "react";
import InputLine from "shared/input/inputLine/InputLine";
import cl from './AuthForm.module.scss'
import ColorBtn from "shared/button/colorBtn/ColorBtn";
import UnderLineBtn from "shared/button/underLineBtn/UnderLineBtn";
import useToggleValues from "hooks/useToggleValues/useToggleValues";
import UserStore from "app/user/store/UserStore";

const AuthForm = () => {
    // const [formType, setFormType] = useState<'register' | 'login'>('register')
    const [formType, toggleFormType] = useToggleValues(['register','login'])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    return (
        <form className={cl.AuthForm}>
            <div>
                <div className={cl.AuthForm__inputs}>
                    <InputLine 
                    svg={
                        <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 7.5L0 16L0 1L8 7.5Z" fill="#A0A0A0"/>
                            <path d="M17.5 7L25 16V1L17.5 7Z" fill="#A0A0A0"/>
                            <path d="M13 9.5L0 0H25L13 9.5Z" fill="#A0A0A0"/>
                            <path d="M13 10.5L17 8L23.9282 16H12.4641H1L9 8L13 10.5Z" fill="#A0A0A0"/>
                        </svg>
                    } 
                    placeholder="email" 
                    state={email} setState={setEmail}/>
                    <InputLine
                     svg={
                      <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.75 9C19.75 9.45786 19.7572 9.88266 19.764 10.2845C19.7772 11.0581 19.7889 11.7465 19.7448 12.4218C19.6804 13.4082 19.5013 14.128 19.1405 14.681C18.4621 15.7209 16.719 16.75 11.5 16.75C6.28089 16.75 4.53782 15.7209 3.85939 14.681C3.49864 14.128 3.31954 13.4082 3.25512 12.4218C3.21103 11.7465 3.22274 11.0581 3.2359 10.2845C3.24274 9.88267 3.24996 9.45787 3.24996 9C3.24996 4.78261 6.87907 1.25 11.5 1.25C16.1209 1.25 19.75 4.78261 19.75 9Z" stroke="#A0A0A0" strokeWidth="2.5"/>
                        <rect y="12" width="23" height="13" rx="2" fill="#A0A0A0"/>
                      </svg>
                     }
                     placeholder="password"
                     state={password} setState={setPassword}
                     type="password"
                     />
                     {formType === 'register'
                        ?   <InputLine
                            svg={
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11.5" cy="7.5" r="7.5" fill="#A0A0A0"/>
                                    <path d="M1.03134 23.453C2.88599 20.671 6.00831 19 9.35184 19H14.6482C17.9917 19 21.114 20.671 22.9687 23.453L24 25H0L1.03134 23.453Z" fill="#A0A0A0"/>
                                </svg>
                            }
                            placeholder="username" 
                            state={username} setState={setUsername}/>
                        :   <></>
                     }
                    
                </div>
                <div className={cl.AuthForm__buttons}>
                     <ColorBtn onClick={(e: any) => {
                        if (formType === 'login')   UserStore.login(email, password)
                        else                        UserStore.register(email, password, username)
                     }}>{formType === 'register' ? 'Sign up' : 'Log in'}</ColorBtn>
                     <UnderLineBtn onClick={() => {
                        toggleFormType()
                     }}>{formType === 'login' ? 'Sign up' : 'Sign in'}</UnderLineBtn>
                </div>
            </div>
        </form>
    )
}
export default AuthForm;