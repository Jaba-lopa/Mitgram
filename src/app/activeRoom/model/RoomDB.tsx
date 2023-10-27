import { Message } from "app/common_types/message.type";
import { RoomMember, RoomType } from "./types/room.type";

export interface RoomDB {
    room_id: string;
    room_name: string;
    room_members: RoomMember[];
    room_type: RoomType;
    room_messages: Message[];
}