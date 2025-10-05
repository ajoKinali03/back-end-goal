let bit = new ArrayBuffer(8);

let int8 = new Int8Array(3 * 10);
let uint8 = new Uint8Array(bit);
let uint8clamped = new Uint8ClampedArray(bit);

for (let i = 0; i < int8.length; i += 3) {
  int8[i] += 1;     // x bertambah
  int8[i + 1] -= 5; // y berkurang
  int8[i + 2] = git0;  // z tetap
}

console.log(int8);