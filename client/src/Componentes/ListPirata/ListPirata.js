import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

function ListPirata (props) {
    const [piratas, setPiratas] = useState([]);
    const {removeFromDom} = props;

    useEffect (() => {
        axios.get('http://localhost:8080/pirates')
        .then (response => {
            console.log(response.data);
            setPiratas (response.data);
        })
        .catch(err => console.log(err));
    }, [piratas]);

    
    const deletePirata = (id) => {
        axios.delete ( `http://localhost:8080/delete/${id}`)
            .then (response => {
                removeFromDom (id)
            });
    }

    return (
        <div>
            <h1> Pirate Crew </h1>
            <Link to="/pirate/new"> <button> New Pirata </button> </Link>
            <table className='table table-hover'>
            <tbody>
                    {
                        piratas.map ((pirata,index) => (
                            <tr key={index}>
                                <td> <img className="img-fluid" src={pirata.imagen} /></td>
                                <td> <h3> {pirata.nombre} </h3> </td>
                                <td> <button onClick={() => deletePirata(pirata._id)}> Walk the Plank </button> 
                                <Link to= {"/pirate/" + pirata._id} > <button> View Pirata </button> </Link></td>
                            </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListPirata;