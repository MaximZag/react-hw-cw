import './App.css';
import {useReducer} from "react";

const reducer = (state, action) => {

    state = {...state, [action.payload + 'a']: state[action.payload + 'a'] + 1}
    if (action.type === 'inc') {
        state = {...state, [action.payload]: state[action.payload] + 1}
    } else if (action.type === 'dec') {
        state = {...state, [action.payload]: state[action.payload] - 1}
    } else if (action.type === 'reset') {
        state = {...state, [action.payload]: state[action.payload] = 0}
    }
    return state
}

function App() {

    const [state, dispatch] = useReducer(reducer, {count1: 0, count1a: 0, count2: 0, count2a: 0, count3: 0, count3a: 0})


    return (
        <div className={'main'}>
            <div className={'counter'}>
                <div>{state.count1}</div>
                <div>{state.count1a}</div>
                <button onClick={() => dispatch({type: 'inc', payload: 'count1'})}>Inc</button>
                <button onClick={() => dispatch({type: 'dec', payload: 'count1'})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset', payload: 'count1'})}>Reset</button>
            </div>
            <div className={'counter'}>
                <div>{state.count2}</div>
                <div>{state.count2a}</div>
                <button onClick={() => dispatch({type: 'inc', payload: 'count2'})}>Inc</button>
                <button onClick={() => dispatch({type: 'dec', payload: 'count2'})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset', payload: 'count2'})}>Reset</button>
            </div>
            <div className={'counter'}>
                <div>{state.count3}</div>
                <div>{state.count3a}</div>
                <button onClick={() => dispatch({type: 'inc', payload: 'count3'})}>Inc</button>
                <button onClick={() => dispatch({type: 'dec', payload: 'count3'})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset', payload: 'count3'})}>Reset</button>
            </div>
        </div>
    );
}

export default App;
