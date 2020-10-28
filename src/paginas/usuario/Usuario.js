import React from 'react'
import CreateUSer from '../createUser/CreateUser';
import ListUser from '../listUser/ListUser';
import NavbarMenu from '../navbar/Navbar'

const Usuario = () => {

    return(
        <div>
            <NavbarMenu/>
            <CreateUSer/>
            <ListUser/>
        </div>
    );

}

export default Usuario;