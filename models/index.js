const User = require('./User')
const Post = require('./Post')
const Vote = require('./Vote')
const Comment = require('./Comment')

// create associations
// associate one user to many posts
User.hasMany(Post, {
  foreignKey: 'user_id'
})

// associate one post to one user
Post.belongsTo(User, {
  foreignKey: 'user_id'
})

// associate a user to all of their votes on many posts
User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'user_id'
})

// associate posts a user has voted on to the user
Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id'
})

// associates a single vote to a user
Vote.belongsTo(User, {
  foreignKey: 'user_id'
})

// associate a vote to the post it was used on
Vote.belongsTo(Post, {
  foreignKey: 'post_id'
})

// associate a single user to all of their votes
// allows us to query a user and see all the votes they've cast
User.hasMany(Vote, {
  foreignKey: 'user_id'
})

// associate a single post to all of its votes
// allows us to query for a total count of votes on a single post
Post.hasMany(Vote, {
  foreignKey: 'post_id'
})

// associate one comment to one user
Comment.belongsTo(User, {
  foreignKey: 'user_id'
})

// associate one comment to one post
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
})

// associate many comments to one user
User.hasMany(Comment, {
  foreignKey: 'user_id'
})

// associate many comments to one post
Post.hasMany(Comment, {
  foreignKey: 'post_id'
})

module.exports = { User, Post, Vote, Comment }
