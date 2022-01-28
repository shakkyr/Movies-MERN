const Movie = require('../models/Movie');




exports.readAll = async (req, res) => {
	try {
		const movies = await Movie.find({});

		res.json({ movies });
	} catch (err) {
		console.log(err, 'movieController.readAll error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};


exports.read = async (req, res) => {
	try {
		const movieId = req.params.movieId;
		const movie = await Movie.findById(movieId);

		res.json(movie);
	} catch (err) {
		console.log(err, 'movieController.read error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};


exports.delete = async (req, res) => {
	try {
		const movieId = req.params.movieId;
		const deletedMovie = await Movie.findByIdAndDelete(movieId);


		res.json(deletedMovie);
	} catch (err) {
		console.log(err, 'movieController.delete error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};