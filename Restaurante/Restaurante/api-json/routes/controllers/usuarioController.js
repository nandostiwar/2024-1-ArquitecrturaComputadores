const fs = require('fs');
const path = require('path');

// Obtén la ruta absoluta del archivo usuarios.json
const usuariosFilePath = path.join(__dirname, '../../db/usuarios.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath));

function login(req, res) {
  const { usuario, clave } = req.body;

  const usuarioEncontrado = usuarios.usuarios.find(u => u.usuario === usuario);

  if (!usuarioEncontrado || usuarioEncontrado.clave !== clave) {
    return res.status(401).json({ mensaje: 'Usuario o contraseña incorrectos' });
  }

  res.json({ mensaje: 'Inicio de sesión exitoso', tipoUsuario: usuarioEncontrado.tipo });
}

module.exports = {
  login
};
