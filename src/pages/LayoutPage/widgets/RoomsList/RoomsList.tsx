import InputColor from 'shared/input/inputColor/InputColor';
import cl from './RoomsList.module.scss'
import { useState } from 'react';
import UserStore from 'app/user/store/UserStore';
import { observer } from 'mobx-react-lite';
import RoomListItem from 'pages/LayoutPage/entities/RoomListItem/RoomListItem';
import HiddenMenu from '../HiddenMenu/HiddenMenu';
import useToggleValues from 'hooks/useToggleValues/useToggleValues';
import MenuBurger from 'shared/button/menuBurger/MenuBurger';
import CreateRoomStore from 'widgets/Modals/CreateRoomModal/store/CreateRoomStore';
import CreateRoomModal from 'widgets/Modals/CreateRoomModal/CreateRoomModal';
import RoomStore from 'app/rooms/RoomStore';
import {useEffect} from 'react'
import EnterRoomStore from 'widgets/Modals/EnterRoomModal/store/EnterRoomStore';
import EnterRoomModal from 'widgets/Modals/EnterRoomModal/EnterRoomModal';
const RoomsList = () => {
    const [roomname, setRoomName] = useState('');
    const [isMenuActive, toggleIsActive] = useToggleValues([false, true])

    useEffect(() => {
        RoomStore.getRoomsLimit(10)
    }, [])

    if (!UserStore.user || !UserStore.user.rooms) {
        return <div>Загрузка</div>
    }

    return (
        <div className={cl.RoomsWrapper}>
            {CreateRoomStore.isActive
                ? <CreateRoomModal/>
                : <></>
            }

            {EnterRoomStore.isActive
                ? <EnterRoomModal/>
                : <></>
            }

            <HiddenMenu isActive={isMenuActive} toggle={toggleIsActive}/>
            <div className={cl.RoomsSort}>
                {/* Поиск комнат */}
                <div className={cl.userMenu}>
                    {/* менюшка пользователя */}
                    <MenuBurger onClick={toggleIsActive}/>
                </div>

                <div className={cl.inputSort}>
                    {/* поиск */}
                    <InputColor state={roomname} setState={setRoomName} placeholder='Поиск' style={{
                        fontSize: '16px',
                        width: '100%',
                        backgroundColor: '#242f3d'
                    }}/>
                </div>
            </div>
            <div className={cl.Rooms}>
                {/* Список комнат */}
                {UserStore.user.rooms.map((room) => 
                    <RoomListItem key={room.room_id} room={room}/>
                )}
                <div className={cl.line}></div>
                <div className={cl.allRooms}>Все группы</div>
            </div>
        </div>
    )
}
export default observer(RoomsList);