
const Flight=(props)=>{

    const {name, year, icon}=props;

    return(
        <div>
            <h1>{name}</h1>
            <h2>{year}</h2>
            <img src={icon} alt={name}/>
        </div>
    )

}

export default Flight