import {useEffect, useState} from "react";

import Flight from "./Flight";

const Flights = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setFlights(value))
    }, [])

    let array = [];
    for (const flight of flights) {
        if (flight.launch_year !== '2020') {
            array.push(flight)
        }
    }

    return (
        <div>
            {array.map(value => <Flight key={value.flight_number} name={value.mission_name} year={value.launch_year}
                                        icon={value.links.mission_patch_small}/>)}
        </div>
    );
};

export default Flights;