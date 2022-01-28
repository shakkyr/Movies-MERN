const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const MovieSchema = new mongoose.Schema(
	{
		movieName: {
			type: 'String',
			required: true,
		},
		movieDesc: {
			type: 'String',
			trim: true,
		},
	
		
	},
	{ timestamps: true }
);

MovieSchema.index({ movieName: 'text' });
const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
