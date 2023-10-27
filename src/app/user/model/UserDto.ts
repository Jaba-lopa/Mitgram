import { Friend, RoomInUser } from "./types/UserTypes";

export interface UserDto {
    user_id: string;
    email: string;
    username: string;
    rooms: RoomInUser[];
    friends: Friend[];
    register_date: string;
}