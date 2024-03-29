const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  postAuthor: {
    type: String,
    required: true,
    trim: true
  },
  topic: {
    type: String,
    required: false
  },

  genreKeywords: {
    type: [String]
  },

  albumReview: 
    {
      spotifyArtist: {
        type: String
      },
      spotifyAlbumName: {
        type: String
      },
      spotifyAlbumArt: {
        type: String
      },
    },

  responses: [
    {
      responseText: {
        type: String,
        required: true,
        minlength: 1
      },
      responseAuthor: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      }
    }
  ]
})


const Post = model('Post', PostSchema)

module.exports = Post