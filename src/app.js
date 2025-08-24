const express = require('express');
const app = express();

app.get('/', (_req, res) => {
  res.send('Hola Mundo, este es mi practica final. Julio Oniel Batista 2022-2145');
});

const port = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(port, () => console.log(`Servidor en http://localhost:${port}`));
}

module.exports = app; 
