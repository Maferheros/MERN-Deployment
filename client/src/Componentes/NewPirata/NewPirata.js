import React, {useState} from "react";
import axios from "axios";
import { Link, useHistory} from "react-router-dom";

function NewPirata (props){
    const [ nombre, setNombre] = useState ('');
    const [imagen, setImagen] = useState('');
    const [tesoros, setTesoros ] = useState(0);
    const [frase, setFrase] = useState('');
    const [ posicion, setPosicion] = useState ('');
    const [pierna, setPierna] = useState(true);
    const [ojo, setOjo] = useState(true);
    const [ mano, setMano] = useState(true);

    const history = useHistory()
    const [errors, setErrors] = useState([]); 

    const agregarPirata = (event) => {
        event.preventDefault ();
        axios.post ('http://localhost:8080/pirate/new', {
            nombre,
            imagen,
            tesoros,
            frase,
            posicion,
            pierna,
            ojo,
            mano
        })
        .then( response => {history.push( "/pirates")})
        .catch ( err => {
            const errorResponse = err.response.data.errors;
            console.log(err.response);
            const errorArr = [];
            for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
            console.log(setErrors)
        })
    }

    return (
        <div>
            <h1> Add Pirate </h1>
            
            <button> <Link to= "/pirates"> Crew Board </Link></button>
            <form onSubmit={agregarPirata}>
            <nav>{ errors.map ((err,index) => <span className='text-danger' key={index}>{err}</span>)}</nav>
                <label htmlFor='nombre'> Pirate Name: </label>
                <input type="text" id="nombre" onChange={(event) => setNombre (event.target.value)}></input>
                {
                    nombre.length === 0?
                    <span className='text-danger'> Pirate Name must be exist!</span>:
                    ''
                }
            <nav>
            <label htmlFor='imagen'> Imagen URL: </label>
                <input type="text" id="imagen" onChange={(event) => setImagen (event.target.value)}></input>
                {
                    imagen.length === 0?
                    <span className='text-danger'> imagen URL must be exist!</span>:
                    ''
                }
            </nav>
            <nav>
            <label htmlFor='tesoros'> # of Treasure Chests: </label>
                <input type="number" id="tesoros" onChange={(event) => setTesoros (event.target.value)}></input>
                {
                    tesoros.length?
                    '':
                    <span className='text-danger'> Treasure must be exist!</span>
                }
            </nav>
            <nav>
            <label htmlFor='frase'> Pirate Phrase: </label>
                <input type="text" id="frase" onChange={(event) => setFrase (event.target.value)}></input>
                {
                    frase.length === 0?
                    <span className='text-danger'> Phrase must be exist!</span>:
                    ''
                }
            </nav>
            
            <div className = "posicion">
          <label htmlFor='posicion'> Posicion: </label>
          <select id = 'posicion' onChange={(event) => setPosicion(event.target.value)}>
            <option value = 'firstMate'> First Mate </option>
            <option value = 'quarterMaster'> QuarterMaster </option>
            <option value = 'boatswain'> PowdereMonkey </option>
            <option value = 'capitan'> Capitan </option>
          </select>
        </div>
            <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="pierna" name="pierna" checked={pierna} onChange={(e) => setPierna(e.target.checked)} />
                    <label className="form-check-label" htmlFor="pierna">Peg Leg</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="ojo" name="ojo" checked={ojo} onChange={(e) => setOjo(e.target.checked)} />
                    <label className="form-check-label" htmlFor="ojo">Eye Path</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="mano" name="mano" checked={mano} onChange={(e) => setMano(e.target.checked)} />
                    <label className="form-check-label" htmlFor="mano">Hook Hand</label>
                </div>
                <nav>
                <input type="submit"/>
                </nav>
            
            </form>
            
        </div>
    )

}

export default NewPirata;
