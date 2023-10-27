import UserStore from 'app/user/store/UserStore';
import cl from './HiddenMenu.module.scss'
import { observer } from 'mobx-react-lite';
import MenuBurger from 'shared/button/menuBurger/MenuBurger';
import CreateRoomStore from 'widgets/Modals/CreateRoomModal/store/CreateRoomStore';
import EnterRoomStore from 'widgets/Modals/EnterRoomModal/store/EnterRoomStore';

const HiddenMenu = ({isActive, toggle}: {
    isActive: boolean;
    toggle: Function;
}) => {
    if (!UserStore.user) return <div>Загрузка</div>
    return (
        <div className={cl.HiddenMenu} style={isActive ? { left: '0' } : { left: '-100%' }}>
            <MenuBurger onClick={toggle}/>
            <div style={{ color: "#efefef" }}>{UserStore.user.username}</div>
            <div onClick={() => {
                CreateRoomStore.setIsActive(true)
                toggle()
            }}>Создать группу</div>
            <div onClick={() => {
                EnterRoomStore.setIsActive(true)
                toggle()
            }}>Войти в группу</div>
            <div onClick={() => {
                UserStore.logout()
            }}>выйти из аккаунта</div>
        </div>
    )
}
export default observer(HiddenMenu);