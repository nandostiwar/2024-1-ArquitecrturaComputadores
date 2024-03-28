const fs = require('fs/promises');
const path = require('path');

const productosFilePath = path.join(__dirname, '../../db/productos.json');

const getAllProductos = async (req, res) => {
    try {
        const productosData = await fs.readFile(productosFilePath);
        const productosJson = JSON.parse(productosData);
        res.json(productosJson);
    } catch (error) {
        console.error("Error al obtener todos los productos:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

const getOneProducto = async (req, res) => {
    const idProducto = parseInt(req.params.idProducto);
    try {
        const productosData = await fs.readFile(productosFilePath);
        const productosJson = JSON.parse(productosData);
        const producto = productosJson.productos.find(producto => producto.id === idProducto);
        
        if (producto) {
            res.json(producto);
        } else {
            res.status(404).json({ message: "Producto no encontrado" });
        }
    } catch (error) {
        console.error("Error al obtener un solo producto:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

const createProducto = async (req, res) => {
    const { nombre, precio } = req.body;

    try {
        const productosData = await fs.readFile(productosFilePath);
        const productosJson = JSON.parse(productosData);

        const nuevoProducto = {
            id: productosJson.productos.length + 1,
            nombre,
            precio
        };

        productosJson.productos.push(nuevoProducto);

        await fs.writeFile(productosFilePath, JSON.stringify(productosJson, null, 2), { encoding: 'utf-8' });
        
        res.status(201).json({ message: "Producto creado", producto: nuevoProducto });
    } catch (error) {
        console.error("Error al crear un producto:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

const updateProducto = async (req, res) => {
    const idProducto = parseInt(req.params.idProducto);
    const { nombre, precio } = req.body;

    try {
        const productosData = await fs.readFile(productosFilePath);
        const productosJson = JSON.parse(productosData);

        const index = productosJson.productos.findIndex(producto => producto.id === idProducto);

        if (index !== -1) {
            productosJson.productos[index].nombre = nombre;
            productosJson.productos[index].precio = precio;

            await fs.writeFile(productosFilePath, JSON.stringify(productosJson, null, 2), { encoding: 'utf-8' });
            
            res.json({ message: "Producto actualizado" });
        } else {
            res.status(404).json({ message: "Producto no encontrado" });
        }
    } catch (error) {
        console.error("Error al actualizar un producto:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

const deleteProducto = async (req, res) => {
    const idProducto = parseInt(req.params.idProducto);

    try {
        const productosData = await fs.readFile(productosFilePath);
        const productosJson = JSON.parse(productosData);

        const index = productosJson.productos.findIndex(producto => producto.id === idProducto);

        if (index !== -1) {
            productosJson.productos.splice(index, 1);

            await fs.writeFile(productosFilePath, JSON.stringify(productosJson, null, 2), { encoding: 'utf-8' });
            
            res.json({ message: "Producto eliminado" });
        } else {
            res.status(404).json({ message: "Producto no encontrado" });
        }
    } catch (error) {
        console.error("Error al eliminar un producto:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

module.exports = {
    getAllProductos,
    getOneProducto,
    createProducto,
    updateProducto,
    deleteProducto
};


