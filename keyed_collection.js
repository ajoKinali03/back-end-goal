// keyed collection
// terdiri dari map, set, weakmap, weakset
// map ialah struktur data yang menyimpan pasangan kunci-nilai
// di mana setiap kunci memiliki kebebasan tipe primitifnya(sting, number, obj, dll) dan digunakan untuk mengakses nilai yang terkait dengannya.
// hal ini mirip seperti permberian label pada sebuah item untuk memudahkan pencarian dan pengelolaan data.
// sedangkan set ialah struktur data yang menyimpan nilai-nilai unik tanpa duplikasi
// sedangkan weak ialah struktur data yang menyimpan referensi versi lemah ke objek-objeknya
// yang memungkinkan pengumpulan sampah otomatis ketika tidak ada referensi kuat ke objek tersebut.
// ini berguna untuk mengelola memori secara efisien dan mencegah kebocoran memori dalam aplikasi yang kompleks.


// map
const hamid = {id: 1, nama: 'Hamid'};
const azwar = {id: 2, nama: 'Azwar'};
const raise = {id: 3, nama: 'Raise'};

// cara membuat map dan set data
const userLogin = new Map([[hamid, "online"], [azwar, "online"]]);

// cara lain set data atau set ulang data
userLogin.set(hamid, "offline");


// cara mendapatkan data
console.log(userLogin.get(hamid)); // offline

// map method
console.log(userLogin.size); // 2
console.log(userLogin.has(azwar));  // true
userLogin.delete(raise); // menghapus data berdasarkan key
console.log(userLogin.has(raise));  // false
// userLogin.clear(); //clear all data
// console.log(userLogin.size); // 0


// set
const angka = new Set([1,2,3,4,5,5,5,5,5]);

console.log(angka); // Set(5) { 1, 2, 3, 4, 5 } duplikasi data diabaikan

// set method
console.log(angka.size); // 5
console.log(angka.has(3)); // true
angka.delete(3);
console.log(angka.has(3)); // false
// angka.clear(); // clear all data
// console.log(angka.size); // 0