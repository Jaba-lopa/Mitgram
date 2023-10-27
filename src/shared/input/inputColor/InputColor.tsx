import { IntefaceInput } from "../interfaceInput";
import cl from './InputColor.module.scss'
const InputColor = ({placeholder, state, setState, style, type}: IntefaceInput) => {
    return (
        <input 
            type={type ? type : 'text'}
            placeholder={placeholder} 
            value={state} 
            onChange={(e) => setState(e.target.value)}
            style={style}
            className={cl.inputColorItem}
        />
    )
}
export default InputColor;