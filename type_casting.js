// type casting
// ialah conversi atau merubah jenis nilai ke dalam bentuk jenis nilai yang lain

// number ke string
console.log(String(123)); // "123"
console.log(typeof String(123)); // string

// atau pada nilai boolean
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(" "));

// type casting ada dua tipe yaitu implisit/ coercion dan eksplisit/conversion

// implisit/ coercion
console.log('5' + 10); // 510
console.log('5' - 10);  // -5

// eksplisit/ conversion
console.log(Number('5') + 10); // 15
console.log(String(5) + 10); // 510
console.log(Boolean(1));//true