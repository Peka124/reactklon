import { Link } from 'react-router-dom'

function ListaKnjiga(props) {

    const knjige = props.knjige;

    const slika = "https://i.pinimg.com/originals/65/66/01/6566013dfc4af1e6070bfbe5df6774fb.jpg";

    return (
        <div className='div-knjiga'>

            {knjige.map(knjiga => {
                return (
                    <div>
                        <div className="card text-center">
                            <img src={slika} id='slika-search' className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">{knjiga.name}</h3>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><h4>Pisac: {knjiga.authors[0]}</h4></li>
                                <li className="list-group-item"><h5>Rejting: {knjiga.rating}</h5></li>
                                <li className="list-group-item"><h6>URL:<Link to={knjiga.url}>{knjiga.url}</Link></h6></li>
                            </ul>
                        </div>
                    </div>
                );
            })}





        </div>
    )
}

export default ListaKnjiga;