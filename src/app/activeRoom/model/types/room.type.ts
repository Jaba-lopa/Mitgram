export type RoomType = 'Public' | 'Private';
export const RoomTypes = ['Public', 'Private']
export type RoomMemberRole = 'Creater' | 'Admin' | 'User'
export interface RoomMember {
    user_id: string;
    role: RoomMemberRole;
}