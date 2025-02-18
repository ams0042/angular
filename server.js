const express = require("express");
const path = require("path");

const app = express();

// Definir la carpeta donde está el build de Angular SSR
const DIST_FOLDER = path.join(__dirname, "dist/angular-crypto-invest/browser");

// Servir los archivos estáticos de Angular
app.use(express.static(DIST_FOLDER));

// Redirigir todas las rutas a index.html (para soportar Angular SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(DIST_FOLDER, "index.html"));
});

// Usar el puerto asignado por Render o el 3000 por defecto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor Angular SSR corriendo en http://localhost:${PORT}`);
});
