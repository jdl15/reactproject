import { ACTIONS } from '../calculator'

export default function OperationButton({dispatch, operation}) {
    return (
        <button onClick={() => {
            if (operation === "%") {
                dispatch({ type: ACTIONS.CHOOSE_PERCENTAGE });
            } else {
                dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } });
            }
        }}>
            {operation}
        </button>
    )
}