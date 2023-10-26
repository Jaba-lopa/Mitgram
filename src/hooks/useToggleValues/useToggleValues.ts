import { useCallback, useState } from 'react';
function useToggleValues (values: any[]) {
    let step = 0;
    const [state, setState] = useState(values[step]);
    const toggleState = useCallback(() => {
        if (step + 1 < values.length) step += 1
        else step = 0
        setState(values[step])
    }, [])
    return [state, toggleState] as const;
}
export default useToggleValues;