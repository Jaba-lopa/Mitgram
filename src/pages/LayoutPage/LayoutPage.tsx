import UserStore from "app/user/store/UserStore";
import { observer } from "mobx-react-lite";

const LayoutPage = () => {
    return (
        <div>
            LayoutPage
            <button onClick={(e) => {
                e.preventDefault()
                UserStore.logout();
            }}>logout</button>
        </div>
    )
}
export default LayoutPage;