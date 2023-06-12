import { useState } from 'react'
import ListaKnjiga from '../komponente/ListaKnjiga';

function Knjige() {

    const [pretraga, setPretraga] = useState('');
    const [knjige, setKnjige] = useState([]);


    function handlePretraga(e) {
        setPretraga(e.target.value)
    }


    function pretraziKnjige() {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4916172c11msh0beee19c8846ca4p127267jsn0bc7bcd7fc43',
                'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
            }
        };

        fetch(`https://hapi-books.p.rapidapi.com/search/${pretraga}`, options)
            .then(response => response.json())
            .then(response => setKnjige(response))
            .catch(err => console.error(err));
    }


    return (
        <div>
            <h1 className='mt-4'>Pretrazi knjige</h1>
            <div className="pretrazi">
                <input type="text" className="form-control" onChange={handlePretraga} value={pretraga} />
                <button onClick={pretraziKnjige} className="btn btn-primary mt-2">Pretraga</button>
            </div>

            <div className='kndiv'>
                <ListaKnjiga knjige={knjige} />
            </div>

        </div>


    )
}

export default Knjige;