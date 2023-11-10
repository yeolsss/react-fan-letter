export const getMembers = [
  new Member('0', '권경열', ''),
  new Member('1', '송용승', ''),
  new Member('2', '전민석', ''),
  new Member('3', '박유나', ''),
  new Member('4', '이진호', ''),
  new Member('5', '조미래', ''),
  new Member('6', '김명섭', ''),
];
function Member(id, name, img) {
  this.id = id;
  this.name = name;
  this.img = img;
}

export function Letter(id, nickName, content, date) {
  this.id = id;
  this.nickName = nickName;
  this.content = content;
  this.date = date;
}
