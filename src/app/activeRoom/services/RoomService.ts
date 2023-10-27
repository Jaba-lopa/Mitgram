import $apiRoom from "app/http/apiRoom";
import { AxiosResponse } from "axios";
import { RoomResponse } from "../model/response/RoomResponse";
import { RoomDB } from "../model/RoomDB";
import { UserDto } from "app/user/model/UserDto";

export class RoomService {
    static async getRoom(room_id: string): Promise<AxiosResponse<RoomResponse>> {
        return $apiRoom.post('/getRoom', { room_id });
    }

    static async createRoom(room_name: string): Promise<AxiosResponse<{
        room: RoomDB,
        user: UserDto
    }>> {
        return $apiRoom.post('/createRoom', { room_name });
    }

    static async enterTheRoom(room_id: string): Promise<AxiosResponse<{
        updateRoom: RoomDB,
        user: UserDto
    }>> {
        return $apiRoom.post('/enterTheRoom', { room_id });
    }

    static async getRoomsLimit(limit: number): Promise<AxiosResponse<{
        rooms: RoomDB[]
    }>> {
        return $apiRoom.post('/getRoomsLimit', { limit });
    }
}