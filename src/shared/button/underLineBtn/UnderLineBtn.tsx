import IBtnProps from "../IBtnProps";
import cl from './UnderLineBtn.module.scss';
const UnderLineBtn = ({children, style, onClick}: IBtnProps) => {
    return(
        <button onClick={(e) => {
            e.preventDefault()
            onClick ? onClick() : <></>
        }}
            className={cl.underLineBtnItem}
            style={style}
        >
            {children}
        </button>
    )
}
export default UnderLineBtn;