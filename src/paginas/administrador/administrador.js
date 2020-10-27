import React from 'react';
import Login from '../login/Login'
import Navbar from '../navbar/Navbar';

const adminsitrador  = (handleLogout) =>{
    return(
        <section className ="administrador">
            <Navbar/>
        <nav>
            <h2>Prueba Front-end </h2>
            <button >Salir</button>
        </nav>

        </section>
    )
}

export default adminsitrador;