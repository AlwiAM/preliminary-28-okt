// //for loop: jika butuh kontrol penuh
// const buah = ["apel", "alpukat", "durian"];

// for (let i = 0; i < buah.length; i++) {
//   console.log(`Buah ke ${i + 1}: ${buah[i]}`);
// }


//foreach: loop ke semua nilai
// const produk = [
//   { id: 1, nama: "Laptop", harga: 5000000 },
//   { id: 2, nama: "Mouse", harga: 50000 },
//   { id: 3, nama: "Keyboard", harga: 500000 },
//   { id: 4, nama: "Monitor", harga: 150000 },
// ];

// produk.forEach((item) => {
//   console.log(` ${item.nama} - Rp ${item.harga}`);
// });


//map digunakan untuk merubah array jadi array baru

// const angka = [1,2,3,4]

// //mengalikan nilai angka dengan 2
// const hasil = angka.map(number => number * 2);
// console.log(hasil);


const produk = [
  { id: 1, nama: "Laptop", harga: 5000000 },
  { id: 2, nama: "Mouse", harga: 50000 },
  { id: 3, nama: "Keyboard", harga: 500000 },
  { id: 4, nama: "Monitor", harga: 150000 },
];

const namaProduk = produk.map(item => item.nama);
console.log(namaProduk);

