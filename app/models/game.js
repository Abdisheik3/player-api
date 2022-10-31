const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
        imgUrl: String,
        thumbnailUrl: String,
		apiId: {
			type: String,
			required: true,
            unique: true
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Game', gameSchema)
