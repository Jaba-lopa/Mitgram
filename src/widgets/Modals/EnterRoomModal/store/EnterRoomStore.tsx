import { observable } from "mobx";

const EnterRoomStore = observable({
    isActive: false,
    setIsActive(bool: boolean) {
        this.isActive = bool;
    }
})
export default EnterRoomStore;