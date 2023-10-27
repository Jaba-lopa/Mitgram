import { IntefaceInput } from '../interfaceInput';
import cl from './InputLine.module.scss'

interface InputLineProps extends IntefaceInput{
    lineColor?: `#${string}`;
    svg?: React.ReactNode;
}

const InputLine = ({lineColor, placeholder, svg, state, setState, type}: InputLineProps) => {
    return (
        <div className={cl.inputLineItem} style={{backgroundColor: lineColor}}>
            {svg ? svg : <></>}
            <input 
                placeholder={placeholder} 
                value={state} 
                onChange={(e) => setState(e.target.value)}
                type={type ? type : 'text'
                }
                />
        </div>
    )
}
export default InputLine;