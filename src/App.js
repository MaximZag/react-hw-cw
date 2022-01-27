import {useReducer, createRef, useState, useEffect} from "react";

import Cat from "./components/Cat/Cat";
import Dog from "./components/Dog/Dog";

const reducer = (state, action) => {
    if (action.type === 'cat') {
        state = {...state, cat: action.payload}
    } else if (action.type === 'dog') {
        state = {...state, dog: action.payload}
    }
    return state
}

function App() {
    const cat = createRef()
    const dog = createRef()

    const sendCat = (e) => {
        e.preventDefault()
        dispatch({type: 'cat', payload: cat.current.value})
    }

    const sendDog = (e) => {
        e.preventDefault()
        dispatch({type: 'dog', payload: dog.current.value})
    }


    const [state, dispatch] = useReducer(reducer, {cat: '', dog: ''});

    let [inputsArray, setInputsArray] = useState({cat: [], dog: []})

    const pusher = () => {
        let newObject = {...inputsArray}
        if (state.cat !== '' && state.cat !== newObject.cat[newObject.cat.length - 1]) {
            newObject.cat.push(state.cat)
        }
        if (state.dog !== '' && state.dog !== newObject.dog[newObject.dog.length - 1]) {
            newObject.dog.push(state.dog)
        }
        setInputsArray(newObject)
    }

    useEffect(() => {
        pusher()
    }, [state])

    return (
        <div>
            <form onSubmit={sendCat}>
                <div><label>Add cat <input type="text" name={'cat'} ref={cat}/></label></div>
                <button>Save</button>
            </form>
            <form onSubmit={sendDog}>
                <div><label>Add dog <input type="text" name={'dog'} ref={dog}/></label></div>
                <button>Save</button>
            </form>
            {inputsArray && inputsArray.cat.map(value => <Cat key={value} value={value}/>)}
            <hr/>
            {inputsArray && inputsArray.dog.map(value => <Dog key={value} value={value}/>)}
        </div>
    );
}

export default App;
