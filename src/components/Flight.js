import './Flight.css'

const Flight = (props) => {

    const {name, year, icon} = props;

    return (
        <div className={'main'}>
            <div className={'left'}>
                <h1>{name}</h1>
                <h2>{year}</h2>
            </div>
            <div className={'right'}><img src={icon} alt={name}/></div>
        </div>
    )

}

export default Flight