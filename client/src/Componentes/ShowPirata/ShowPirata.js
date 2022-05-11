import {useParams} from 'react-router';
import {useEffect, useState} from 'react';
import axios from 'axios';

function ShowPirata (props){
    const {id} = useParams();
    const [listPirata, setListPirata] = useState ({});

    useEffect (() => {
        axios.get ( `http://localhost:8080/pirate/${id}`)
            .then( response => {
                setListPirata ( () => response.data);
            })
            .catch (err => {
                console.log (err);
            });
    }, [id]);

    return (
        <div>
            <h1> {listPirata.nombre}</h1>
            <table className='table table-hover'>
            <thead>
            <tr>
                <th>
                <img className="img-fluid" src={listPirata.imagen} />
                <h1>
                    {listPirata.frase}
                </h1>
                </th>
                <th>
                <h1> About</h1>
                <p> Position: {listPirata.posicion}</p>
                <p> Treasures: {listPirata.tesoros}</p>
                {
                    listPirata.pierna === true?
                    <p>Peg Leg: YES</p>:
                    <p>Peg Leg: NO</p>
                }
                {
                    listPirata.ojo === true?
                    <p>Eye Patch: YES</p>:
                    <p>Eye Patch: NO</p>
                }
                {
                    listPirata.mano === true?
                    <p>Hook Hand: YES</p>:
                    <p>Hook Hand: NO</p>
                }

                </th>
            </tr>
            </thead>
            </table>
        </div>
    )
}

export default ShowPirata;