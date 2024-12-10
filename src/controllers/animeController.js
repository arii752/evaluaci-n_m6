const animeService = require('../services/animeService');

// Para obtener todos los animes
const getAnimes = async (req, res) => {
    try {
        const animes = await animeService.getAllAnimes();
        res.json(animes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los animes ):' });
    }
};

// Para crear un nuevo anime
const createAnime = async (req, res) => {
    try {
        const newAnime = await animeService.createAnime(req.body);
        res.status(201).json(newAnime);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el anime ):' });
    }
};

// Para actualizar un anime
const updateAnime = async (req, res) => {
    try {
        const updatedAnime = await animeService.updateAnime(req.params.id, req.body);
        res.json(updatedAnime);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el anime ):' });
    }
};

// Para eliminar un anime
const deleteAnime = async (req, res) => {
    try {
        await animeService.deleteAnime(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el anime ):' });
    }
};

module.exports = {
    getAnimes,
    createAnime,
    updateAnime,
    deleteAnime,
};