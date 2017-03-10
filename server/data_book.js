import { Meteor } from 'meteor/meteor';
import { Categories } from '../imports/api/categories.js';
import { Books } from '../imports/api/books.js';
Meteor.startup(() => {
  //  var category_array = [
  //   { "name": "Tri thức hiện đại", "createAt": new Date() },
  //   { "name": "Nghiên cứu", "createAt": new Date() },
  //   { "name": "Sức khỏe và đời sống", "createAt": new Date() },
  //   { "name": "Sách tham khảo", "createAt": new Date() },
  //   { "name": "Văn học", "createAt": new Date() }
  // ];
  // var images_array = [
  //  "images/data/1.jpg",
  //  "images/data/2.jpg",
  //  "images/data/3.jpg",
  //  "images/data/4.jpg",
  //  "images/data/5.jpg",
  //  "images/data/6.png",
  //  "images/data/7.jpg",
  //  "images/data/8.jpg",
  //  "images/data/9.jpg",
  //  "images/data/10.jpg",
  //  "images/data/11.jpg",
  //  "images/data/12.jpg",
  //  "images/data/13.jpg",
  //  "images/data/14.jpg",
  // ];
   // var name_all_book = [
  //   '23 vấn đề họ không nói với bạn về tư bản chủ nghĩa',
  //   'Đắc nhân tâm',
  //   'Kinh tế học hài hước',
  //   'Lời hứa về một cây bút chì',
  //   'Nghịch lý của sự lựa chọn',
  //   'Quá lớn để bỏ qua',
  //   'Sức mạnh của thói quen',
  //   'The hard thing about hard things',
  //   'Trí tuệ xúc cảm',
  //   'Tư duy nhanh và chậm',
  //   'Từ tốt đến vĩ đại'
  // ];
});
