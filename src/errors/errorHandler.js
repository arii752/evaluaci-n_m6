const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Ay algo salió mal! D: ' });
};

module.exports = errorHandler;