import ActiveRoomStore from 'app/activeRoom/store/ActiveRoomStore';
import cl from './RoomMessages.module.scss'
import { observer } from 'mobx-react-lite';
import RoomMessageItem from './components/RoomMessageItem';

const RoomMessages = () => {
    if (!ActiveRoomStore.activeRoom.room_id) return <div>Загрузка</div>

    return(
        <div className={cl.RoomMessages}>
            {ActiveRoomStore.getMessages().map((message, index) => 
                <RoomMessageItem key={index} message={message}/>
            )}
        </div>
    )
}
export default observer(RoomMessages);