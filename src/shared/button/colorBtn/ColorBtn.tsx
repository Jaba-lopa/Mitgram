import IBtnProps from '../IBtnProps';
import cl from './ColorBtn.module.scss'
const ColorBtn = ({children, style, onClick}: IBtnProps) => {
    return (
        <button 
         className={cl.colorBtnItem}
         style={style}
         onClick={(e) => {
            e.preventDefault()
            onClick ? onClick() : <></>
        }}>
            {children}
        </button>
    )
}
export default ColorBtn;