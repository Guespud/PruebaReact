import React,{useState}from 'react';
import Input from './componentes/inputs /Inputs';
import Label from './componentes/label/Label';
import Tittle from './componentes/tittles/Tittle';
import './Login.css';


const Login = () =>{

    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');

    function handleChange(name,value){
if(name == 'usuario'){
setUser(value)
}else{
    setPassword(value)
}
    }

    function Login(){
      let account = {user,password}
      if(account){
          console.log("account",account)
      }
    }

return(
    <div className = "login-container">
        <Tittle  text = 'Inicio de sesión'/>
        <Label text='Usuario'/>
        <Input 
        attribute = {{
            id:'usuario',
            name: 'usuario',
            type:'text',
            placeholder: 'Usuario'
        }}
        handlechage={handleChange}
        />
        <Label text='Contrasena'/>
        <Input 
        attribute = {{
            id:'contrasena',
            name: 'contrasena',
            type:'password',
            placeholder:'contraseña'
        }}
        handlechage={handleChange}
        />
       <button onClick = {Login}>
       Iniciar sesión
       </button>
    </div>
);
    
};

export default Login;