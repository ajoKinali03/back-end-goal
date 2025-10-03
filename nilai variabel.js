// GOAL: MENJADI BACKEND DEVELOPER
// episode pertama: Javascript

// sumber: JavaScript® Notes for Professional by. GoalKicker.com

// Chapter 2: JavaScript Variables

// nilai variabel

let varNull = null; // varibel kosong
let bukanAngka = NaN; // ketika sebuah veriabel tidak terdefinisi sebagai angka
// contoh:
console.log(parseInt("ini bukan angka"))// output: NaN
console.clear()

let varUndefined; // variabel yang belum memiliki nilai
console.log(varUndefined)// output: undefined
console.clear()

// nilai 1 dan 0 atau on dan off atau nilai yang memeriksa salah atau benar jadi ini adalah logic value
let booleanTrue = true; // nilai memerikasa apakah benar
let booleanFalse = false; // nilai memeriksa apakah salah
//contoh
console.log(1 == 1); // true
console.log(1 == 2); // false
console.log("aku" == "ado"); // false
console.clear()


let varString = "ini tulisan biasa"; // string atau nilai yang bisa disebut teks biasa
let varInteger = 1; // integer atau angka
let varFloat = 1.0; // float atau angka berkoma

let varLong = 1212012910291; // angka besar
let vardouble = 1212012910291.11; // angka besar berkoma

let arr = [1, 2, 3, 4] // array adalah nilai yang bisa ditampung lebih dari satu
let obj = { // objek adalah nilai mirip seperti array namun bisa memiliki sub nilai
  nama: "olaa",
  umur: 12,
  tinggal: "bumi"
}



