/*
  Nama          : Muhammad Farand Danendra
  NIM           : 2510514025
  Kelas         : A - Sains Data
  Berkas        : js/skrip.js
  ANGKA_A       : 2
  ANGKA_B       : 5
  BATAS_LULUS   : ((2 + 5) mod 3) + 60 = (7 mod 3) + 60 = 61
  Tanggal ketik : 15/09/2026
*/

// D.1: Menyapa pengunjung dengan prompt lalu menampilkan sapaan melalui alert.
function sapaPengunjung(waktu) {
    var nama = prompt("Masukkan nama Anda:");
    if (nama != null && nama != "") {
        alert(waktu + ", " + nama + "! Selamat datang di SIPRAK 3.0.");
    } else {
        alert(waktu + ", Praktikan! Selamat datang di SIPRAK 3.0.");
    }
}

// D.2: Menjumlahkan SKS tiga mata kuliah KRS sendiri dan mengembalikannya dengan return.
function totalSKS(a, b, c) {
    var total = a + b + c;
    return total;
}

// D.3: Memeriksa kelulusan nilai berdasarkan ambang batas (BATAS_LULUS = 61).
function cekNilai(nilai, batas) {
    if (nilai >= batas) {
        return "Lulus";
    } else {
        return "Belum lulus";
    }
}

// D.4: Memvalidasi nama tidak boleh kosong dan NIM tepat 10 digit sebelum form dikirim.
function validasiFormulir() {
    var namaInput = document.getElementById("nama").value;
    var nimInput = document.getElementById("nim").value;

    if (namaInput.trim() == "") {
        alert("Peringatan: Kolom Nama Lengkap tidak boleh kosong!");
        return false;
    }

    if (nimInput.length != 10) {
        alert("Peringatan: Panjang NIM harus tepat 10 karakter! (Saat ini: " + nimInput.length + " karakter)");
        return false;
    }

    alert("Formulir valid! Data pendaftaran siap dikirim.");
    return true;
}

// Fungsi pembantu untuk memanggil totalSKS() dan cekNilai() dari tombol jadwal.html.
function hitungSKSMahasiswa() {
    // 3 Matkul KRS: Pemrograman Web (3), Pembelajaran Mesin (3), Analisis Big Data (2)
    var matkul1 = Number(prompt("Masukkan SKS Pemrograman Web:", "3"));
    var matkul2 = Number(prompt("Masukkan SKS Pembelajaran Mesin:", "3"));
    var matkul3 = Number(prompt("Masukkan SKS Analisis Big Data:", "2"));

    // Menghitung total SKS di luar fungsi totalSKS
    var hasilSKS = totalSKS(matkul1, matkul2, matkul3);

    // Memeriksa kelulusan dengan BATAS_LULUS milik sendiri (61)
    var nilaiUji = Number(prompt("Masukkan nilai praktikum yang ingin diuji (0 - 100):", "75"));
    var batasSaya = 61;
    var statusLulus = cekNilai(nilaiUji, batasSaya);

    // Hasil ditampilkan kepada pengguna di luar fungsi totalSKS dan cekNilai
    alert("HASIL PERHITUNGAN JADWAL PRAKTIKUM:\n" +
          "------------------------------------\n" +
          "- Total SKS 3 Mata Kuliah : " + hasilSKS + " SKS\n" +
          "- Nilai Praktikum         : " + nilaiUji + "\n" +
          "- Batas Kelulusan (NIM)   : " + batasSaya + "\n" +
          "- Status Kelulusan        : " + statusLulus);
}

// Bagian E: Menjalankan kode Tabel Telusur ke panel Console browser (F12).
function jalankanTabelTelusur() {
    var a = 2;
    var b = 5;
    var c = "" + a;

    function ubah(x) {
        x = x + 1;
        return x;
    }

    var d = ubah(a);

    console.log("=== OUTPUT TABEL TELUSUR TP4 (NIM: 2510514025) ===");
    console.log(1, a + b);
    console.log(2, c + b);
    console.log(3, a);
    console.log(4, d);
    console.log(5, ubah(b) + ubah(b));
    console.log(6, typeof c);

    alert("Kode Tabel Telusur telah dieksekusi!\nSilakan tekan F12 lalu buka tab Console untuk melihat 6 baris hasil.");
}