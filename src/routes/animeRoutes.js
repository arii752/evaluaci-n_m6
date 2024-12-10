const express = require('express');
const router = express.Router();
const animeController = require('../controllers/animeController');

// Obtener todos los animes!
router.get('/', animeController.getAnimes);

// Crear un nuevo anime!
router.post('/', animeController.createAnime);

// Actualizar un anime!
router.put('/:id', animeController.updateAnime);

// Eliminar un anime!
router.delete('/:id', animeController.deleteAnime);

module.exports = router;