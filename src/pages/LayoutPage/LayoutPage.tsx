import UserStore from "app/user/store/UserStore";
import RoomsList from "./widgets/RoomsList/RoomsList";
import cl from './LayoutPage.module.scss'
import { useContext, useEffect } from "react";
import { SocketContext } from "app/socket/socketContext";
import { Outlet } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Message } from "app/common_types/message.type";
import ActiveRoomStore from "app/activeRoom/store/ActiveRoomStore";
const LayoutPage = () => {
    const socket = useContext(SocketContext);

    if (!UserStore.user || !UserStore.user.user_id) return <div>Загрузка</div>

    useEffect(() => {
        socket.emit('connectToServer', {
            user_id: UserStore.user.user_id
        })
        socket.on('connectToServer', (data) => {
            console.log(data)
        })
        socket.on('sendMessageInRoom', ((message: Message) => {
            ActiveRoomStore.addMessage(message)
        }))
        return () => {
            socket.off('connectToServer')
            socket.off('sendMessageInRoom')
        }
    }, [])

    return (
        <div className={cl.LayoutPage}>
            <div className={cl.RoomsList}>
                <RoomsList />
            </div>

            <div className={cl.RoomItem}>
                <Outlet />
            </div>
        </div>
    )
}
export default observer(LayoutPage);