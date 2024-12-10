const express = require('express');
const app = express();
const animeRoutes = require('./routes/animeRoutes'); 

app.use(express.json()); 
app.use('/anime', animeRoutes); 

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});