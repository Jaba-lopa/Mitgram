import { observable } from "mobx";
import { RoomDB } from "../model/RoomDB";
import { RoomService } from "../services/RoomService";
import {Message} from 'app/common_types/message.type'

const ActiveRoomStore = observable({
    activeRoom: {} as RoomDB,
    setActiveRoom(room: RoomDB) {
        this.activeRoom = room;
    },

    addMessage(msg: Message) {
        if (msg.room_id === this.activeRoom.room_id) {
            this.activeRoom.room_messages = [...this.activeRoom.room_messages, msg]
        }
    },

    getMessages() {
        return this.activeRoom.room_messages;
    },

    async getRoom(room_id: string) {
        try {
            const response = await RoomService.getRoom(room_id);
            return response.data.room;
        } catch(err) {
            console.log('Error:', err)
        }
    },

    async getActiveRoom(room_id: string) {
        try {
            const room = await this.getRoom(room_id);
            if (room) this.setActiveRoom(room)
        } catch(err) {
            console.log(err)
        }
    },
})
export default ActiveRoomStore;