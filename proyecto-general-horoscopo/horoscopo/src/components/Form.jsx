import './styles/Form.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const validateUser = (event) => {
        event.preventDefault();

        if (username === 'admin' && password === 'admin123') {
            setUser('admin');
            navigate('/admin');
        } else if (username === 'mesero' && password === 'mesero123') {
            setUser('mesero');
            navigate('/mesero');
        } else if (username === 'cocina' && password === 'cocina123') {
            setUser('cocina');
            navigate('/cocina');
        } else {
            alert('Credenciales inválidas');
        }
    };

    return (
        <form onSubmit={validateUser}>
            <h1 id="txtBienvenida">Inicio de Sesión</h1>
            <div className="form-group">
                <label htmlFor="username">Usuario:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" id="btnEnviar">Ingresar</button>
        </form>
    );
}

export default Form;
