const fs = require('fs/promises');
const path = require('path');

const signosFilePath = path.join(__dirname, '../../db/signos.json');

const getAllSignos = async (req, res) => {
    try {
        const signosData = await fs.readFile(signosFilePath);
        const signosJson = JSON.parse(signosData);
        res.json(signosJson);
    } catch (error) {
        console.error("Error al obtener todos los signos:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

const getOneSigno = async (req, res) => {
    const oneSigno = req.params.signo;
    try {
        const signosData = await fs.readFile(signosFilePath);
        const signosJson = JSON.parse(signosData);
        const result = signosJson[oneSigno];
        
        if (result) {
            res.json(result);
        } else {
            res.status(404).json({ message: "Signo no encontrado" });
        }
    } catch (error) {
        console.error("Error al obtener un solo signo:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

const login = async (req, res) => {
    const { user, password } = req.body;
    res.json({
        user: user,
        password: password
    });
};

const updateSigno = async (req, res) => {
    const signoEditar = req.params.signoEditar;
    const { textoEditar } = req.body;

    try {
        const signosData = await fs.readFile(signosFilePath);
        const signosJson = JSON.parse(signosData);

        if (signosJson.hasOwnProperty(signoEditar)) {
            signosJson[signoEditar] = textoEditar;
            await fs.writeFile(signosFilePath, JSON.stringify(signosJson, null, 2), { encoding: 'utf-8' });
            res.json({ message: "Signo actualizado" });
        } else {
            res.status(404).json({ message: "Signo no encontrado" });
        }
    } catch (error) {
        console.error("Error al actualizar el signo:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

module.exports = {
    getAllSignos,
    getOneSigno,
    updateSigno,
    login
};
