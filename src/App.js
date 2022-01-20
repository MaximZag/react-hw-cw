import {useState} from "react";

import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";

function App() {
    const [car, setCar] = useState(null);

    const update = data => {
        setCar(data)
    }
    return (
        <>
            <Form update={update}/>
            <Cars trigger={car}/>
        </>
    );
}

export default App;