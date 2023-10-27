import ActiveRoomStore from 'app/activeRoom/store/ActiveRoomStore';
import cl from './InfoAboutRoom.module.scss'
const InfoAboutRoom = () => {
    return (
        <div className={cl.InfoAboutRoom} onClick={() => {
            navigator.clipboard.writeText(ActiveRoomStore.activeRoom.room_id)
            alert('id скопирован')
        }}>
            <div className={cl.roomName}>{ActiveRoomStore.activeRoom.room_name}</div>
            <div className={cl.roomCountMembers}>участников: {ActiveRoomStore.activeRoom.room_members.length}</div>
        </div>
    )
}
export default InfoAboutRoom;