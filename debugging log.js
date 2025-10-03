// GOAL: MENJADI BACKEND DEVELOPER
// episode pertama: Javascript

// sumber: JavaScript® Notes for Professional by. GoalKicker.com

// Chapter 1: Getting started with JavaScript

// debugging

console.log("Hello World\n"); // standar
console.error("Errrorrr\n"); // menampilkan error
console.clear(); // membersihkan log yang ada

console.info("info info"); // memberikan info
console.warn("peringatan: ada masalah"); // memberikan peringatan
console.clear();

for (let i = 0; i <= 10; i++) {
  console.count(); // memberi tahuka berapa kali ia dipanggil result: default 1..n
  console.info("ini indeks ke:", i);
  console.countReset(); // melakaukan reset pemanggilan
  console.clear();
}

let obj = {
  hari: "senin",
  tanggal: 21,
  tahun: 2015,
  bulan: "maret"
};
let objOfArr = [
  {
    nama: "Frag",
    umur: 30,
    hobi: "coding",
  },
  {
    nama: "graf",
    umur: 40,
    hobi: "terbang",
  },
];

// menjadikan objek ke table
console.table(objOfArr); 
console.table(obj);
console.clear();

