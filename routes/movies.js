const express = require('express');
const router = express.Router();
const { authenticatateJWT } = require('../middleware/authenticator');
const movieController = require('../controllers/movie');

router.get('/', movieController.readAll);
router.get('/:movieId', movieController.read);
router.delete('/:movieId', authenticatateJWT, movieController.delete);

module.exports = router;