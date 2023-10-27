import { observable } from "mobx";

const CreateRoomStore = observable({
    isActive: false,
    setIsActive(bool: boolean) {
        this.isActive = bool;
    }
})
export default CreateRoomStore;