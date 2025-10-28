// variable : wadah untuk menyimpan nilai
// var nama = "budi"; // cara lama, jarang dipakai
// let umur = 25; //bisa diubah nilainya
// const email = "budi@example.com"; //tidak bisa diubah nilainya

// tipe data

//tipe data primitive
// let angka = 10; // tipe data number
// let angka2 = "2";
// let teks = "Hello World"; // tipe data string
// let benar = true; // tipe data boolean
// let kosong = null; // tipe data null atau sengaja dikosongkan
// let tidakTerdefinisi; // tipe data undefined atau belum diberikan nilai

// tipe data non-primitive
// let array = [1, 2, 3, 4, 5, 6, 7 ]; // wadah untuk menyimpan banyak nilai dalam satu variabel
//disimpan secara berurutan dan diakses menggunakan indeks
//js dynamic typing, artinya tipe data bisa berubah-ubah

// let object = {
//     nama: "budi",
//     umur: 25,
//     email: "budi@example.com"
// }; // wadah untuk menyimpan banyak nilai dengan pasangan key-value

// //membuat array
// const buah = ["apel", "jeruk", "mangga"];

//mengakses nilai array
// console.log(buah[0]); // apel
// console.log(buah[1]); // jeruk
// console.log(buah[2]); // mangga

// mengetahui panjang array
// console.log(buah.length)

// //menambah elemen array
// buah.push("pisang"); //tambah di belakang array
// buah.unshift("anggur")//tambah di depan array

// //array of object
// const produk = [
//   { id: 1, nama: "Laptop", harga: 5000000 },
//   { id: 2, nama: "Mouse", harga: 50000 },
//   { id: 3, nama: "Keyboard", harga: 500000 },
//   { id: 4, nama: "Monitor", harga: 150000 },
// ];

// misal kalian adalah seorang manager toko
// pencatatan barang masuk - create
// pencarian barang - search
// update stok barang - update
// hapus barang - delete
// penghitungan total barang - calculation

// pencarian item
const produk = [
  { id: 1, nama: "Laptop", harga: 5000000 },
  { id: 2, nama: "Mouse", harga: 50000 },
  { id: 3, nama: "Keyboard", harga: 500000 },
  { id: 4, nama: "Monitor", harga: 150000 },
];

//mencari produk dengan id 2
const hasil = produk.find(item => item.id === 99);
// method array.find mengembalikan nilai pertama yg ditemukan dan mengembalikan undefined jika tidak ada yg ditemukan
// yg terjadi dibelakang penggunaan find:
//1. find akan mencari item pertama apakah item.id === 2, kalau belum sesuai dia akan melakukan perulangan berikutnya
// 2. kalau find sudah menemukan kondisi yg sesuai item.id === 2, find stop dan return item tersebut
//3. perulangan berikutnya tidak akan dilakukan oleh find
//4. kalau find tidak menemukan yg kondisinya sesuai dia akan return undefined


// menggunkan loop
// jalankan perulangan sebanyak data/object di dalam array
// tampung nilai sesuai kondisi pencarian
// setelah pencarian terpenuhi hentikan pencarian
// tampilkan hasil pencarian

// let hasil = null;

// for (let i = 0; i < produk.length; i++) {
//   if (produk[i].id === 3) {
//     hasil = produk[i];
//     break;
//   }
// }
console.log(hasil);
