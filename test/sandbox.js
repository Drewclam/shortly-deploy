// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/db');
// var mongodb = mongoose.connection;
// var Schema = mongoose.Schema;
// var ObjectId = Schema.ObjectId;

// mongodb.on('error', console.error.bind(console, 'connection error:'));
// mongodb.once('open', function() {
//   console.log('sandbox schema: ', Schema);
//   var blogSchema = new Schema({
//     title:  String,
//     author: String
//   });
//   // add methods to schema
//   // create the model object (class)
//   var Blog = mongoose.model('Blog', blogSchema);
//   // create a new instance of the class
//   // var myBlog = new Blog({title: 'myBlog', author: 'blogAuthor'});
//   // // save the instance into database
//   // myBlog.save(function(err, instance) {
//   //   if (err) {
//   //     return console.error(err);
//   //   }
//   //   console.log('save successful.', instance);
//   // });
// });
