import { Meteor } from 'meteor/meteor';
import { Categories } from '../imports/api/categories.js';
import { Books } from '../imports/api/books.js';
import '../imports/api/reviews.js';

Meteor.startup(() => {
  Categories.remove({});
  Books.remove({});
  category_array = [
    { "name": "Sách khoa học", "createAt": new Date() },
    { "name": "Sách truyện", "createAt": new Date() },
    { "name": "Sách giáo khoa", "createAt": new Date() }
  ];
  for (var i = 0; i < category_array.length; i++) {
    Categories.insert(category_array[i]);

    var obj_id = Categories.findOne({ "name": category_array[i].name })._id;
      Books.insert({
        "name": "Harry Poster", "category_id": obj_id,
        "cover": "images/1.jpg",  
      "createAt": new Date()});

      Books.insert({
        "name": "Harry Poster 2", "category_id": obj_id,
      "cover": "images/1.jpg",  
      "createAt": new Date()});

      Books.insert({
        "name": "Harry Poster 3", "category_id": obj_id,
      "cover": "images/1.jpg",  
      "createAt": new Date()});

      Books.insert({
        "name": "Harry Poster 4", "category_id": obj_id,
      "cover": "images/1.jpg",  
      "createAt": new Date()});

      Books.insert({
        "name": "Harry Poster 5", "category_id": obj_id,
      "cover": "images/1.jpg",  
      "createAt": new Date()});
  }
});

