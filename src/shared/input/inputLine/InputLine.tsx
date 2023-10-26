import cl from './InputLine.module.scss'

interface InputLineProps {
    lineColor?: `#${string}`;
    placeholder: string;
    svg?: React.ReactNode;
    state: string;
    setState: Function;
}

const InputLine = ({lineColor, placeholder, svg, state, setState}: InputLineProps) => {
    return (
        <div className={cl.inputLineItem} style={{backgroundColor: lineColor}}>
            {svg ? svg : <></>}
            <input placeholder={placeholder} value={state} onChange={(e) => setState(e.target.value)}/>
        </div>
    )
}
export default InputLine;