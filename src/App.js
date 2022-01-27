import {useReducer, createRef} from "react";

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

    return (
        <div>
            <form onSubmit={sendCat}>
                <div><label>Add cat <input type="text" name={'cat'} ref={cat}/></label></div>
                <button>Save</button>
            </form>
            <form onSubmit={sendDog}>
                <div><label>Add cat <input type="text" name={'dog'} ref={dog}/></label></div>
                <button>Save</button>
            </form>
            {state.cat && <div>
                {state.cat}
                <button>Delete</button>
            </div>}
            {state.dog && <div>
                {state.dog}
                <button>Delete</button>
            </div>}
        </div>
    );
}

export default App;
