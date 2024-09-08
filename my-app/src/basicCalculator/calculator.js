import './style.css';
import React, { useReducer } from 'react';
import './component/buttons.css';
import DigitButton from './component/digitButtons';
import OperationButton from './component/operationButtons';

export const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CHOOSE_PERCENTAGE: 'choose-percentage',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    EVALUATE: 'evaluate'
}

function reducer(state, {type, payload}) {
    switch(type) {
        case ACTIONS.ADD_DIGIT:
            if(state.overwrite){
                return{
                    ...state,
                    currentOperand: payload.digit,
                    overwrite: false,
                }
            }
            if((payload.digit === '.' && state.currentOperand.includes('.'))) return state;
            return {
                ...state,
                currentOperand: `${state.currentOperand || ''}${payload.digit}`
            }
        case ACTIONS.CHOOSE_OPERATION:
            if(state.currentOperand == null && state.previousOperand == null) return state; // if no digit is entered, return current state
            if(state.currentOperand == null) {
                return{
                    ...state,
                    operation: payload.operation,
                }
            }
            if(state.previousOperand == null) {
                return{
                    ...state,
                    operation: payload.operation,
                    previousOperand: state.currentOperand,
                    currentOperand: null,
                }
            }
            return{
                ...state,
                previousOperand: evaluate(state),
                operation: payload.operation,
                currentOperand: null,
            }
        case ACTIONS.CHOOSE_PERCENTAGE:
            if(state.currentOperand == null) return state;
            const current = parseFloat(state.currentOperand);
            if (isNaN(current)) return state;
            return {
                ...state,
                currentOperand: (current / 100).toString(),
            };
        case ACTIONS.CLEAR:
            return {};
        case ACTIONS.DELETE_DIGIT:
            if(state.overwrite){
                return{
                    ...state,
                    currentOperand: null,
                    overwrite: false,
                }
            }
            if(state.currentOperand == null) return state;
            if(state.currentOperand.length === 1) return{
                ...state,
                currentOperand: null,
            }
            return{
                ...state,
                currentOperand: state.currentOperand.slice(0, -1),
            }
        case ACTIONS.EVALUATE:
            if(state.operation == null || state.previousOperand == null || state.currentOperand == null) return state;
            return{
                ...state,
                overwrite: true,
                previousOperand: null,
                operation: null,
                currentOperand: evaluate(state),
            }
        default:
            return state;
    }

}

function evaluate({currentOperand, previousOperand, operation}) {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if(isNaN(prev) || isNaN(current)) return "";
    let computation = "";
    switch(operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '×':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        case '%':
            computation = current / 100;
            break;
        default:
            computation = "";
    }
    return computation.toString();
}

const INTEGER_FORMATTER = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
});
function formatOperand(operand) {
    if(operand == null) return;
    const [integer, decimal] = operand.split('.');
    if(decimal == null) return INTEGER_FORMATTER.format(parseFloat(integer));
    return `${INTEGER_FORMATTER.format(parseFloat(integer))}.${decimal}`;
}


function Calculator() {
    const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer,{})

    return (
        <div className='calculator'>
            <div className="calculator-grid">
                <div className="output">
                    <div className="previous-operand">{formatOperand(previousOperand)} {operation}</div>
                    <div className="current-operand">{formatOperand(currentOperand)}</div>
                </div>
                <button onClick={() => dispatch({type:ACTIONS.CLEAR})}>AC</button>
                <button onClick={() => dispatch({type:ACTIONS.DELETE_DIGIT})}>DEL</button>
                <OperationButton operation="%" dispatch={dispatch} />
                <OperationButton operation="/" dispatch={dispatch} />
                <DigitButton digit="7" dispatch={dispatch} />
                <DigitButton digit="8" dispatch={dispatch} />
                <DigitButton digit="9" dispatch={dispatch} />
                <OperationButton operation="×" dispatch={dispatch} />
                <DigitButton digit="4" dispatch={dispatch} />
                <DigitButton digit="5" dispatch={dispatch} />
                <DigitButton digit="6" dispatch={dispatch} />
                <OperationButton operation="-" dispatch={dispatch} />
                <DigitButton digit="1" dispatch={dispatch} />
                <DigitButton digit="2" dispatch={dispatch} />
                <DigitButton digit="3" dispatch={dispatch} />
                <OperationButton operation="+" dispatch={dispatch} />
                <DigitButton className="span-two" digit="0" dispatch={dispatch} />
                <DigitButton digit="." dispatch={dispatch} />
                <button onClick={() => dispatch({type:ACTIONS.EVALUATE})}>=</button>
            </div>
        </div>
    );
}

export default Calculator;