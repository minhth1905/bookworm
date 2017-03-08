import { Meteor } from 'meteor/meteor';
import { Categories } from '../imports/api/categories.js';
import { Books } from '../imports/api/books.js';
import { Reviews } from '../imports/api/reviews.js';

Meteor.startup(() => {
  // Categories.remove({});
  // Books.remove({});
  // Reviews.remove({});
  // category_array = [
  //   { "name": "Sách khoa học", "createAt": new Date() },
  //   { "name": "Sách truyện", "createAt": new Date() },
  //   { "name": "Sách giáo khoa", "createAt": new Date() }
  // ];
  // var content = "<h1>Tieu de bai viet</h1> <p>Jim Collin thấy rằng việc xuất bản cuốn sách sau 5 năm nghiên cứu là hoàn toàn xứng đáng.Sau nhiều năm ẩn mình, ông rất muốn nghe mọi người kể về những gì có thể áp dụng được cho bản thân họ, và những gì không phù hợp. Ông hy vọng rằng những trang sách này có giá trị và những người đọc nó sẽ quyết tâm áp dụng những gì đã học vào bất cứ điều gì họ làm.</p>";
  // for (var i = 0; i < category_array.length; i++) {
  //   Categories.insert(category_array[i]);

  //   var obj_id = Categories.findOne({ "name": category_array[i].name })._id;
  //   //book
  //   for(var pos = 0; pos < 6; pos ++) {
  //     var name_book = "Harry Poster " + (i + pos).toString();
  //     Books.insert({
  //       "name": name_book, 
  //       "category_id": obj_id,
  //       "cover": "images/1.jpg",  
  //       "createAt": new Date()});
  //     var bookId = Books.findOne({"name": name_book});
  //     //review
  //     for(var j = 0; j < 6 ; j++) {
  //       var tmp = "Tóm tắt " + bookId.name + " bản " + j.toString(); 
  //       Reviews.insert({
  //         "name": bookId.name, 
  //         "book_id": bookId._id, 
  //         "star": "3",
  //         "description": tmp,
  //         "user_rate": "100",  
  //         "content": content
  //       });
  //     }
  //   } 
  // }
});

