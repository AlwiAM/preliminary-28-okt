//error handling:
// safety net jika ada kesalahan program, program tidak crash dan bisa tetap berjalan
//try bagian yang nantinya erornya di cek
// catch kalau ada eror di try catch menangkapnya
// throw melemparkan pesan eror beserta letak erornya

//validasi pengecekan ulang apakah jalan program seperti inputan data sesuai dengan rules yang ada

function bagi(a, b) {
  if (b === 0) {
    throw new Error("Tidak bisa membagi dengan nol!!!");
  }
  return a / b;
}

try {
  console.log(bagi(10, 2));
  console.log(bagi(10, 0));
  console.log("ini tidak akan dijalankan");
} catch (error) {
  console.log("Terjadi kesalahan:", error.message);
}

console.log("program ini tetap jalan");

//buatkan object inventaris yang memiliki function(id, nama, stok, harga)
// untuk menambahkan barang 
//dimana ada validasi duplikasi
//jika barang valid ditambahkan ke array data sebagai propertynya inventaris
//gunakan eror handling