import InputColor from 'shared/input/inputColor/InputColor';
import cl from './CreateRoomModal.module.scss'
import {useState} from 'react'
import CreateRoomStore from './store/CreateRoomStore';
import ColorBtn from 'shared/button/colorBtn/ColorBtn';
import RoomStore from 'app/rooms/RoomStore';
const CreateRoomModal = () => {
    const [room_name, setRoomName] = useState('')
    return (
        <div className={cl.BackSpaceModal} onClick={() => {
            CreateRoomStore.setIsActive(false)
        }}>
            <div className={cl.CreateRoomModal} onClick={(e) => {
                e.stopPropagation()
            }}>
                <div style={{ fontSize: '0.9rem' }}>Выберите название комнаты</div>
                <InputColor placeholder='название...' state={room_name} setState={setRoomName}/>
                <ColorBtn onClick={() => {
                    RoomStore.createRoom(room_name)
                    CreateRoomStore.setIsActive(false)
                }}>Создать</ColorBtn>
            </div>
        </div>
    )
}
export default CreateRoomModal;