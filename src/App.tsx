// src/App.jsx
import React from 'react';
import UserFollow from './UserFollow';
import './App.css'; // Asegúrate de que el archivo de estilos está importado
import './UserFollow.css'
const App = () => {
    return (
        <div className="App">
            <h1>Usuarios a seguir</h1>
            <UserFollow 
                username="mylo." 
                name="MYlO. (G.C.)" 
                pictureUrl="https://api.dicebear.com/9.x/lorelei/svg?flip=false" 
            />
            {/* Puedes agregar más componentes UserFollow aquí */}
        </div>
    );
};

export default App;

