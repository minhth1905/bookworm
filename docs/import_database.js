// db = connect("127.0.0.1:3001/meteor")
// db.categories.remove({});
// db.books.remove({});
// category_array = [
//   { "name": "Sách khoa học", "createAt": new Date() },
//   { "name": "Sách truyện", "createAt": new Date() },
//   { "name": "Sách giáo khoa", "createAt": new Date() }
// ];
// for (var i = 0; i < category_array.length; i++) {
//   db.categories.insert(category_array[i]);

//   var obj_id = db.categories.findOne({ "name": category_array[i].name })._id;
//     db.books.insert({
//       "name": "Harry Poster", "category_id": obj_id,
//       "cover": "images/1.jpg",  
//     "createAt": new Date()});

//     db.books.insert({
//       "name": "Harry Poster 2", "category_id": obj_id,
//     "cover": "images/1.jpg",  
//     "createAt": new Date()});

//     db.books.insert({
//       "name": "Harry Poster 3", "category_id": obj_id,
//     "cover": "images/1.jpg",  
//     "createAt": new Date()});

//     db.books.insert({
//       "name": "Harry Poster 4", "category_id": obj_id,
//     "cover": "images/1.jpg",  
//     "createAt": new Date()});

//     db.books.insert({
//       "name": "Harry Poster 5", "category_id": obj_id,
//     "cover": "images/1.jpg",  
//     "createAt": new Date()});
// }
