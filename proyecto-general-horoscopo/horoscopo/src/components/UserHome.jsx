import { Navigate, useNavigate } from "react-router-dom";
import './styles/UserHome.css';
import { useState } from "react";

function UserHome({ user }) {
    // Verificar si el usuario es "user" y está autenticado
    if (user !== "user" || !user) {
        return <Navigate to="/" />;
    }

    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [orderStatus, setOrderStatus] = useState("Procesando");

    // Función para manejar el evento de selección de producto
    const handleSelect = (event) => {
        const product = event.target.value;
        setSelectedProduct(product);
    }

    // Función para manejar el cambio de estado del pedido
    const handleChangeStatus = () => {
        setOrderStatus(orderStatus === "Procesando" ? "Listo" : "Procesando");
    }

    // Función para redirigir al usuario a la página de inicio
    const goHome = () => {
        navigate("/");
    }

    return (
        <div className="container">
            <div id="txtSeleccionPage"><h3>Realizar un Pedido</h3></div>
            <select id="selectProducts" onChange={handleSelect}>
                <option value="">Seleccione un producto</option>
                <option value="Hamburguesa">Hamburguesa</option>
                <option value="Pizza">Pizza</option>
                <option value="Ensalada César">Ensalada César</option>
                {/* Agregar más opciones según los productos disponibles */}
            </select>
            <div>
                <h3>Estado del Pedido: {orderStatus}</h3>
                <button onClick={handleChangeStatus}>
                    Cambiar Estado del Pedido a {orderStatus === "Procesando" ? "Listo" : "Procesando"}
                </button>
            </div>
            <button id="btnHome" onClick={goHome}>Home</button>
        </div>
    );
}

export default UserHome;
