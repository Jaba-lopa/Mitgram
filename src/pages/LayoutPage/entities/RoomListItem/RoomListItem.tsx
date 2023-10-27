import { RoomInUser } from "app/user/model/types/UserTypes";
import cl from './RoomListItem.module.scss';
import ActiveRoomStore from "app/activeRoom/store/ActiveRoomStore";
import { useNavigate } from "react-router-dom";

interface RoomListItemProps {
    room: RoomInUser;
}

const RoomListItem = ({ room }: RoomListItemProps) => {
    const navigate = useNavigate()

    return (
        <div className={cl.RoomListItem} onClick={async () => {
            await ActiveRoomStore.getActiveRoom(room.room_id);
            navigate(`room/${room.room_id}`)
        }} style={room.room_id === ActiveRoomStore.activeRoom.room_id ? { backgroundColor: '#0f93ff' } : { backgroundColor: 'inherit' }}>
            <div className={cl.RoomName}>{room.room_name}</div>
        </div>
    )
}
export default RoomListItem;