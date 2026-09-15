/*
  Nama          : Muhammad Farand Danendra
  NIM           : 2510514025
  Kelas         : A - Sains Data
  Berkas        : js/skrip.js
  Perhitungan Variabel Berbasis NIM:
  - d1 sampai d10 = 2 5 1 0 5 1 4 0 2 5
  - ANGKA_A     = d9 = 2
  - ANGKA_B     = d10 = 5
  - BATAS_LULUS = ((d9 + d10) mod 3) + 60 = ((2 + 5) mod 3) + 60 = (7 mod 3) + 60 = 1 + 60 = 61
  Tanggal ketik : 08/09/2026
*/

// D.1: Menyapa pengunjung dengan meminta nama melalui prompt dan menampilkan pesan sambutan lewat pop-up alert
function sapaPengunjung(waktu) {
    var namaPengunjung = prompt("Silakan masukkan nama Anda:");
    
    if (namaPengunjung !== null && namaPengunjung.trim() !== "") {
        alert(waktu + ", " + namaPengunjung.trim() + "!\nSelamat datang di Sistem Informasi Praktikan (SIPRAK 2.0).");
    } else {
        alert(waktu + ", Praktikan!\nSelamat datang di Sistem Informasi Praktikan (SIPRAK 2.0).");
    }
}

// D.2: Menghitung penjumlahan 3 nilai SKS dan mengembalikan hasilnya murni dengan return (bebas alert)
function totalSKS(a, b, c) {
    return a + b + c;
}

// D.3: Memeriksa nilai mahasiswa terhadap ambang kelulusan dan mengembalikan status teks dengan return
function cekNilai(nilai, batas) {
    if (nilai >= batas) {
        return "Lulus";
    } else {
        return "Belum lulus";
    }
}

// Meminta 3 nilai SKS dan 1 nilai uji praktikum via prompt, lalu menampilkan seluruh hasil dalam pop-up alert
function hitungSKSMahasiswa() {
    var BATAS_LULUS = 61; // Dihitung dari formula: ((2 + 5) mod 3) + 60 = 61

    // 1. Meminta masukan 3 nilai SKS mata kuliah dari KRS menggunakan dialog prompt
    var inputSKS1 = prompt("Masukkan jumlah SKS Mata Kuliah 1 (KRS: Pemrograman Web):", "3");
    if (inputSKS1 === null) {
        alert("Perhitungan SKS dibatalkan.");
        return;
    }

    var inputSKS2 = prompt("Masukkan jumlah SKS Mata Kuliah 2 (KRS: Basis Data Lanjut):", "3");
    if (inputSKS2 === null) {
        alert("Perhitungan SKS dibatalkan.");
        return;
    }

    var inputSKS3 = prompt("Masukkan jumlah SKS Mata Kuliah 3 (KRS: Analisis Big Data):", "2");
    if (inputSKS3 === null) {
        alert("Perhitungan SKS dibatalkan.");
        return;
    }

    // 2. Konversi tipe data teks dari prompt ke angka (Number) sesuai D.2.d
    var sks1 = Number(inputSKS1);
    var sks2 = Number(inputSKS2);
    var sks3 = Number(inputSKS3);

    // Validasi agar nilai SKS berupa angka yang valid
    if (isNaN(sks1) || isNaN(sks2) || isNaN(sks3) || sks1 <= 0 || sks2 <= 0 || sks3 <= 0) {
        alert("Kesalahan Input: Seluruh nilai SKS harus berupa angka positif!");
        return;
    }

    // 3. Memanggil fungsi totalSKS(a, b, c) yang mengembalikan hasil kalkulasi via return
    var hasilTotalSKS = totalSKS(sks1, sks2, sks3);

    // 4. Meminta masukan nilai uji coba praktikum untuk dicek kelulusannya
    var inputNilai = prompt(
        "Total 3 Mata Kuliah yang Anda input: " + hasilTotalSKS + " SKS.\n\n" +
        "Masukkan nilai praktikum yang ingin diuji coba (rentang 0 - 100):",
        "75"
    );

    if (inputNilai === null) {
        alert("Pengujian nilai praktikum dibatalkan.");
        return;
    }

    var nilaiAngka = Number(inputNilai);
    if (isNaN(nilaiAngka) || nilaiAngka < 0 || nilaiAngka > 100) {
        alert("Kesalahan Input: Nilai praktikum harus berupa angka antara 0 sampai 100!");
        return;
    }

    // 5. Memanggil fungsi cekNilai(nilai, batas) dengan BATAS_LULUS = 61
    var status = cekNilai(nilaiAngka, BATAS_LULUS);

    // 6. Menampilkan ringkasan lengkap menggunakan pop-up alert (msgbox)
    alert(
        "=========================================\n" +
        "    HASIL KALKULASI SKS & KELULUSAN     \n" +
        "=========================================\n\n" +
        "Rincian SKS Mata Kuliah:\n" +
        "  • Mata Kuliah 1 : " + sks1 + " SKS\n" +
        "  • Mata Kuliah 2 : " + sks2 + " SKS\n" +
        "  • Mata Kuliah 3 : " + sks3 + " SKS\n" +
        "-----------------------------------------\n" +
        "Total Akumulasi : " + hasilTotalSKS + " SKS\n\n" +
        "Hasil Uji Kelulusan:\n" +
        "  • Nilai Praktikum    : " + nilaiAngka + "\n" +
        "  • Batas Kelulusan    : " + BATAS_LULUS + "\n" +
        "  • Status Kelulusan   : " + status.toUpperCase() + "\n\n" +
        "========================================="
    );
}

// D.4: Memvalidasi integritas data formulir pendaftaran asisten sebelum dikirimkan ke server
function validasiFormulir() {
    var inputNama = document.getElementById("nama");
    var inputNim = document.getElementById("nim");

    // Pemeriksaan 1: Kolom nama tidak boleh kosong atau hanya berisi spasi
    if (!inputNama || inputNama.value.trim() === "") {
        alert("Validasi Gagal: Kolom Nama Lengkap wajib diisi!");
        if (inputNama) {
            inputNama.focus();
        }
        return false;
    }

    // Pemeriksaan 2: Panjang NIM harus tepat 10 digit karakter
    if (!inputNim || inputNim.value.trim().length !== 10) {
        alert("Validasi Gagal: Panjang NIM harus tepat 10 digit angka!\n(NIM saat ini: " + (inputNim ? inputNim.value.trim().length : 0) + " karakter)");
        if (inputNim) {
            inputNim.focus();
        }
        return false;
    }

    alert("Validasi Berhasil: Data pendaftaran asisten valid dan siap dikirim!");
    return true;
}

// Menjalankan kode uji coba Bagian Kedua (Tabel Telusur) ke panel Developer Tools Console (F12)
function jalankanTabelTelusur() {
    var a = 2;
    var b = 5;
    var c = "" + a;

    function ubah(x) {
        x = x + 1;
        return x;
    }

    var d = ubah(a);

    console.log("=== HASIL EKSEKUSI TABEL TELUSUR (NIM: 2510514025) ===");
    console.log(1, a + b);
    console.log(2, c + b);
    console.log(3, a);
    console.log(4, d);
    console.log(5, ubah(b) + ubah(b));
    console.log(6, typeof c);
    alert("Kode Tabel Telusur berhasil dieksekusi!\nSilakan tekan tombol F12 pada keyboard lalu buka tab Console.");
}