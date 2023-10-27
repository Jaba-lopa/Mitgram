import InputColor from 'shared/input/inputColor/InputColor';
import cl from './EnterRoomModal.module.scss'
import {useState} from 'react'
import EnterRoomStore from './store/EnterRoomStore';
import ColorBtn from 'shared/button/colorBtn/ColorBtn';
import RoomStore from 'app/rooms/RoomStore';
const EnterRoomModal = () => {
    const [room_id, setRoomId] = useState('')
    return (
        <div className={cl.BackSpaceModal} onClick={() => {
            EnterRoomStore.setIsActive(false)
        }}>
            <div className={cl.EnterRoomModal} onClick={(e) => {
                e.stopPropagation()
            }}>
                <div style={{ fontSize: '0.9rem' }}>Введите id комнаты</div>
                <InputColor placeholder='id...' state={room_id} setState={setRoomId}/>
                <ColorBtn onClick={async () => {
                    await RoomStore.enterTheRoom(room_id)
                    EnterRoomStore.setIsActive(false)
                }}>Вступить</ColorBtn>
            </div>
        </div>
    )
}
export default EnterRoomModal;