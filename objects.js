// learning about objects

// object 
function User(name, age, thisYear) {
  this.name= name;
  this.age= age;
  this.thisYear= thisYear;
};

const user = new User("bot", null, null);
user.sayHello = () => { return "hello ^_^"; };

console.log(Object.assign({}, user)); // clone user into a new object with Object.assign
console.log({...user}); // clone user into a new object with spread operator
console.clear();

// object freze
// membekukan objek agar tidak bisa diubah

user.newProperty = true;
console.log(user); // property baru berhasil ditambahkan dengan value true

delete user.newProperty;
console.log(user); // property baru berhasil dihapus

// Object.freeze(user); // membekukan objek user
delete user.age;

console.table(user);

console.clear();



// membuat regulasi untuk properti yang sudah ada pada objek
Object.defineProperty(user, "name", {
value: "John", // value dari properti
writable: false, // menjadikan value tidak bisa ditulis ulang
configurable: false, // diberi izin atau tidak untuk dihapus atau diubah lagi nanti
enumerable: true // tidak akan muncul di perulangan seperti for...in
});

delete user.name; // tidak bisa dihapus karena configurable: false
console.log(user);
console.clear();


// getter dan setter untuk properti pada objek
// Object.defineProperty(user, "birth", {
//   get: function() {
//     return this.thisYear - this.age;
//   },
//   set: function(value) {
//     this.age = this.thisYear - value;
//     if(typeof value !== 'number') { 
//       throw new Error("periksa kembali value tahun anda");
//     }
//   },
//   configurable: true,
//   enumerable: true
// });

// console.log(user.birth); // memanggil getter

// objeck prototype
Object.prototype.birth = function() {
  return "anda lahir pada " + (this.thisYear - this.age);
};


// prtotoype inheritance
const hamid = Object.create(user); // membuat objek baru dengan prototype dari objek user
hamid.name = "hamid";
hamid.age = 20;
hamid.thisYear = 2024;

console.log(hamid.birth(),"\n"); // memanggil method birth dari prototype
console.log(hamid.sayHello()); // memanggil method sayHello dari prototype inheritance
