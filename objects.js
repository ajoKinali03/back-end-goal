// learning about objects

// object cloning

let user = {
  name: "John",
  age: 30,
};

console.log(Object.assign({}, user)); // clone user into a new object with Object.assign
console.log({...user}); // clone user into a new object with spread operator
console.clear();

// object freze
// membekukan objek agar tidak bisa diubah

user.newProperty = true;
console.log(user); // property baru berhasil ditambahkan dengan value true

delete user.newProperty;
console.log(user); // property baru berhasil dihapus

Object.freeze(user); // membekukan objek user
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

