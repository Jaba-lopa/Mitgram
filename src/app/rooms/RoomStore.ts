import { RoomDB } from "app/activeRoom/model/RoomDB";
import { RoomService } from "app/activeRoom/services/RoomService";
import ActiveRoomStore from "app/activeRoom/store/ActiveRoomStore";
import UserStore from "app/user/store/UserStore";
import { observable } from "mobx";

const RoomStore = observable({
    rooms: <RoomDB[]>[],
    setRooms(rooms: RoomDB[]) {
        this.rooms = rooms;
    },
    async createRoom(room_name: string) {
        try {
            const response = await RoomService.createRoom(room_name);
            UserStore.setUser(response.data.user);
        } catch(err) {
            console.log(err)
        }
    },

    async enterTheRoom(room_id: string) {
        try {
            const response = await RoomService.enterTheRoom(room_id);
            UserStore.setUser(response.data.user);
            console.log(response.data)
            ActiveRoomStore.setActiveRoom(response.data.updateRoom)
            return response.data.updateRoom;
        } catch(err) {
            console.log(err)
        }
    },

    async getRoomsLimit(limit: number) {
        try {
            const response = await RoomService.getRoomsLimit(limit);
            this.setRooms(response.data.rooms)
            // UserStore.setUser(response.data.user);
        } catch(err) {
            console.log(err)
        }
    },
})
export default RoomStore;