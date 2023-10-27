import { Message } from "app/common_types/message.type";

export interface Friend {
    user_id: string;
    messages: Message[];
}

export interface RoomInUser {
    room_id: string;
    room_name: string;
}