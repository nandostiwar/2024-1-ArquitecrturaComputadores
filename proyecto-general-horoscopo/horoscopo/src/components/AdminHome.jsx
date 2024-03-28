import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

function AdminHome({ user }) {
    if (user !== 'admin' || !user) {
        return <Navigate to="/" />;
    }

    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState("");
    const [newProductName, setNewProductName] = useState("");
    const [newProductPrice, setNewProductPrice] = useState("");

    const handleSelect = (event) => {
        const product = event.target.value;
        setSelectedProduct(product);
    }

    const goHome = () => {
        navigate("/");
    }

    const handleEdit = async () => {
        try {
            const response = await fetch(`http://localhost:4000/v1/productos/${selectedProduct}`, {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ "nombre": newProductName, "precio": newProductPrice })
            });

            if (!response.ok) {
                throw new Error('Error al editar el producto');
            }

            // Manejar la respuesta exitosa si es necesario

        } catch (error) {
            console.error('Error:', error.message);
            // Manejar el error si es necesario
        }
    }

    return (
        <div className="container">
            <h2 id="textoAdmin">Edita un Producto</h2>
            <select id="editProductos" onChange={handleSelect}>
                <option value="">Selecciona un producto</option>
                <option value="Hamburguesa">Hamburguesa</option>
                <option value="Pizza">Pizza</option>
                <option value="Ensalada César">Ensalada César</option>
                {/* Agrega más opciones según los productos disponibles */}
            </select>
            <div>
                <label htmlFor="newProductName">Nuevo nombre del producto:</label>
                <input type="text" id="newProductName" value={newProductName} onChange={(e) => setNewProductName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="newProductPrice">Nuevo precio del producto:</label>
                <input type="number" id="newProductPrice" value={newProductPrice} onChange={(e) => setNewProductPrice(e.target.value)} />
            </div>
            <button id="btnEditar" onClick={handleEdit}>Editar</button>
            <button id="btnHomeAdmin" onClick={goHome}>Home</button>
        </div>
    );
}

export default AdminHome;
