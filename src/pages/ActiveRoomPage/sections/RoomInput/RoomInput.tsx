import { socket } from 'app/socket/socketContext'
import cl from './RoomInput.module.scss'
import {useState} from 'react'
import ActiveRoomStore from 'app/activeRoom/store/ActiveRoomStore'
import UserStore from 'app/user/store/UserStore'
const RoomInput = () => {
    const [message, setMessage] = useState('')
    const sendMessage = () => {
        socket.emit('sendMessageInRoom', {
            room_id: ActiveRoomStore.activeRoom.room_id,
            user_id: UserStore.user.user_id,
            message: message,
            username: UserStore.user.username
        })
        setMessage('')
    }
    return(
        <div className={cl.RoomInput}>
            <form onSubmit={(e) => {
                e.preventDefault()
                sendMessage()
            }}>
                <input className={cl.inputItem} value={message} onChange={(e) => setMessage(e.target.value)} type="search" placeholder='Написать сообщение...'/>
            </form>
        </div>
    )
}
export default RoomInput;