/*
  Nama          : Muhammad Farand Danendra
  NIM           : 2510514025
  Kelas         : A - Sains Data
  Berkas        : js/skrip.js
  Perhitungan Angka Berbasis NIM:
  - d1 sampai d10 = 2 5 1 0 5 1 4 0 2 5
  - ANGKA_A = d9 = 2
  - ANGKA_B = d10 = 5
  - BATAS_LULUS = ((d9 + d10) mod 3) + 60
                 = ((2 + 5) mod 3) + 60
                 = (7 mod 3) + 60
                 = 1 + 60 = 61
  Tanggal ketik : 15/09/2026
*/

var ANGKA_A = 2;
var ANGKA_B = 5;
var BATAS_LULUS = 61;

// Menyapa pengunjung dengan meminta nama melalui prompt lalu menampilkan alert.
function sapaPengunjung(waktu) {
    var nama = prompt("Masukkan nama Anda:");

    if (nama === null || nama === "") {
        alert(waktu + ", Praktikan!");
    } else {
        alert(waktu + ", " + nama + "!");
    }
}

// Menjumlahkan tiga jumlah SKS dan mengembalikan hasilnya dengan return.
function totalSKS(a, b, c) {
    return a + b + c;
}

// Memeriksa nilai terhadap batas kelulusan dan mengembalikan statusnya.
function cekNilai(nilai, batas) {
    if (nilai >= batas) {
        return "Lulus";
    } else {
        return "Belum lulus";
    }
}

// Mengambil tiga nilai SKS dan nilai praktikum lalu menampilkan hasil di halaman jadwal.
function jalankanKalkulator() {
    var a = Number(prompt("Masukkan SKS mata kuliah pertama:", "3"));
    var b = Number(prompt("Masukkan SKS mata kuliah kedua:", "3"));
    var c = Number(prompt("Masukkan SKS mata kuliah ketiga:", "2"));
    var nilai = Number(prompt("Masukkan nilai praktikum:", "75"));

    var hasilSKS = totalSKS(a, b, c);
    var hasilNilai = cekNilai(nilai, BATAS_LULUS);

    document.getElementById("hasilSKS").innerHTML =
        "Total 3 mata kuliah = " + hasilSKS + " SKS.<br>" +
        "Nilai = " + nilai + ", Batas lulus = " + BATAS_LULUS + ", Status = " + hasilNilai + ".";
}

// Memeriksa nama dan NIM pada formulir sebelum data dikirim.
function validasiFormulir() {
    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;

    if (nama.trim() === "") {
        alert("Nama Lengkap tidak boleh kosong.");
        return false;
    }

    if (nim.length !== 10) {
        alert("NIM harus tepat 10 karakter.");
        return false;
    }

    return true;
}

// Menampilkan hasil tabel telusur ke panel Console sesuai ANGKA_A dan ANGKA_B.
function jalankanTabelTelusur() {
    var a = ANGKA_A;
    var b = ANGKA_B;
    var c = "" + a;

    // Menambah parameter satu lalu mengembalikan hasilnya.
    function ubah(x) {
        x = x + 1;
        return x;
    }

    var d = ubah(a);

    console.log(1, a + b);
    console.log(2, c + b);
    console.log(3, a);
    console.log(4, d);
    console.log(5, ubah(b) + ubah(b));
    console.log(6, typeof c);
}
