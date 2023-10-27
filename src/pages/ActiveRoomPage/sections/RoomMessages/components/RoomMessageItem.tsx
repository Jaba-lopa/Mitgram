import { Message } from "app/common_types/message.type";
import cl from './RoomMessageItem.module.scss'

interface RoomMessageItemProps {
    message: Message;
}

const RoomMessageItem = ({ message }: RoomMessageItemProps) => {
    return (
        <div className={cl.RoomMessageItem}>
            <div>
                <div className={cl.sender}>{message.username}</div>
                <div className={cl.messageText}>{message.message}</div>
                {/* <div className={cl.messageDate}>{message.date}</div> */}
            </div>
        </div>
    )
}
export default RoomMessageItem;