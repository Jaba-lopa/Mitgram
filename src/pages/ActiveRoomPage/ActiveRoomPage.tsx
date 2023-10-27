import cl from './ActiveRoomPage.module.scss'
import InfoAboutRoom from "./sections/InfoAboutRoom/InfoAboutRoom";
import RoomMessages from "./sections/RoomMessages/RoomMessages";
import RoomInput from "./sections/RoomInput/RoomInput";

const ActiveRoomPage = () => {
    return (
        <div className={cl.ActiveRoomPage}>
            <section>
                {/* Информация о чате */}
                <InfoAboutRoom/>
            </section>

            <section>
                {/* Сам чат */}
                <RoomMessages/>
            </section>

            <section>
                {/* Поле ввода сообщения */}
                <RoomInput />
            </section>
        </div>
    )
}
export default ActiveRoomPage;