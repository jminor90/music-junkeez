const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
})


const Post = model('post', PostSchema)

module.exports = Post