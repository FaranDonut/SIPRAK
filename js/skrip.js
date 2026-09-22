/*
  Nama          : Muhammad Farand Danendra
  NIM           : 2510514025
  Kelas         : A - Sains Data
  Berkas        : js/skrip.js
  Perhitungan Variabel Berbasis NIM:
  - d1 sampai d10 = 2 5 1 0 5 1 4 0 2 5
  - ANGKA_A       = d9 = 2
  - ANGKA_B       = d10 = 5
  - BATAS_LULUS   = ((d9 + d10) mod 3) + 60
                  = ((2 + 5) mod 3) + 60
                  = (7 mod 3) + 60
                  = 1 + 60 = 61
  - BATAS_ULANG   = ((d9 + d10) mod 4) + 5
                  = ((2 + 5) mod 4) + 5
                  = (7 mod 4) + 5
                  = 3 + 5 = 8
  - TAHUN_MASUK   = 2025
  Tanggal ketik   : 15/09/2026
*/

var ANGKA_A = 2;
var ANGKA_B = 5;
var BATAS_LULUS = 61;
var BATAS_ULANG = 8;

// D.1: Menyapa pengunjung dengan meminta nama melalui prompt dan menampilkan pesan sambutan lewat pop-up alert
function sapaPengunjung(waktu) {
    var namaPengunjung = prompt("Silakan masukkan nama Anda:");
    
    if (namaPengunjung !== null && namaPengunjung.trim() !== "") {
        alert(waktu + ", " + namaPengunjung.trim() + "!\nSelamat datang di Sistem Informasi Praktikan (SIPRAK 2.0).");
    } else {
        alert(waktu + ", Praktikan!\nSelamat datang di Sistem Informasi Praktikan (SIPRAK 2.0).");
    }
}

// D.2: Menjumlahkan tiga jumlah SKS dan mengembalikan hasilnya murni dengan return
function totalSKS(a, b, c) {
    return a + b + c;
}

// D.3: Memeriksa nilai terhadap batas kelulusan dan mengembalikan status teks dengan return
function cekNilai(nilai, batas) {
    if (nilai >= batas) {
        return "Lulus";
    } else {
        return "Belum lulus";
    }
}

// Meminta nilai SKS dan uji praktikum via prompt, lalu menampilkan hasil ke alert dan DOM
function hitungSKSMahasiswa() {
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

    var sks1 = Number(inputSKS1);
    var sks2 = Number(inputSKS2);
    var sks3 = Number(inputSKS3);

    // Validasi agar nilai SKS berupa angka yang valid
    if (isNaN(sks1) || isNaN(sks2) || isNaN(sks3) || sks1 <= 0 || sks2 <= 0 || sks3 <= 0) {
        alert("Kesalahan Input: Seluruh nilai SKS harus berupa angka positif!");
        return;
    }

    var hasilTotalSKS = totalSKS(sks1, sks2, sks3);

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

    var status = cekNilai(nilaiAngka, BATAS_LULUS);
    
    // Tampilan hasil untuk Alert
    var pesanAlert = 
        "=========================================\n" +
        "    HASIL KALKULASI SKS & KELULUSAN     \n" +
        "=========================================\n\n" +
        "Rincian SKS Mata Kuliah:\n" +
        "   Mata Kuliah 1 : " + sks1 + " SKS\n" +
        "   Mata Kuliah 2 : " + sks2 + " SKS\n" +
        "   Mata Kuliah 3 : " + sks3 + " SKS\n" +
        "-----------------------------------------\n" +
        "Total Akumulasi : " + hasilTotalSKS + " SKS\n\n" +
        "Hasil Uji Kelulusan:\n" +
        "   Nilai Praktikum    : " + nilaiAngka + "\n" +
        "   Batas Kelulusan    : " + BATAS_LULUS + "\n" +
        "   Status Kelulusan   : " + status.toUpperCase() + "\n\n" +
        "=========================================";

    // Tampilan hasil untuk halaman web (DOM)
    var hasilElemen = document.getElementById("hasilSKS");
    if (hasilElemen) {
        hasilElemen.innerHTML =
            "Total 3 mata kuliah = " + hasilTotalSKS + " SKS.<br>" +
            "Nilai = " + nilaiAngka + ", Batas lulus = " + BATAS_LULUS + ", Status = " + status + ".";
    } 

    alert(pesanAlert);
}

// Menghubungkan nama fungsi yang dipanggil tombol pada jadwal.html
function jalankanKalkulator() {
    hitungSKSMahasiswa();
}

// D.4: Memvalidasi integritas data formulir pendaftaran asisten sebelum dikirimkan ke server
function validasiFormulir() {
    var inputNama = document.getElementById("nama");
    var inputNim = document.getElementById("nim");

    // Pemeriksaan 1: Kolom nama tidak boleh kosong
    if (!inputNama || inputNama.value.trim() === "") {
        alert("Validasi Gagal: Kolom Nama Lengkap wajib diisi!");
        if (inputNama) inputNama.focus();
        return false;
    }

    // Pemeriksaan 2: Panjang NIM harus tepat 10 digit karakter
    if (!inputNim || inputNim.value.trim().length !== 10) {
        var panjangSaatIni = inputNim ? inputNim.value.trim().length : 0;
        alert("Validasi Gagal: Panjang NIM harus tepat 10 digit angka!\n(NIM saat ini: " + panjangSaatIni + " karakter)");
        if (inputNim) inputNim.focus();
        return false;
    }

    alert("Validasi Berhasil: Data pendaftaran asisten valid dan siap dikirim!");
    return true;
}

// Menjalankan kode tabel telusur ke panel Developer Tools Console (F12)
function jalankanTabelTelusur() {
    var a = ANGKA_A;
    var b = ANGKA_B;
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


/* =========================================================
   TAMBAHAN TP5 - BAGIAN D
   ========================================================= */

// D.1 TP5: Menentukan huruf mutu berdasarkan nilai
function hurufMutu(nilai) {
    if (nilai >= 80) {
        return "A";
    } else if (nilai >= 70) {
        return "B";
    } else if (nilai >= 60) {
        return "C";
    } else {
        return "D";
    }
}

// D.2 TP5: Menentukan nama hari berdasarkan angka 1 sampai 7
function namaHari(angka) {
    var hari;

    switch (angka) {
        case 1:
            hari = "Senin";
            break;
        case 2:
            hari = "Selasa";
            break;
        case 3:
            hari = "Rabu";
            break;
        case 4:
            hari = "Kamis";
            break;
        case 5:
            hari = "Jumat";
            break;
        case 6:
            hari = "Sabtu";
            break;
        case 7:
            hari = "Minggu";
            break;
        default:
            hari = "Angka tidak valid";
            break;
    }

    return hari;
}

// D.3 TP5: Membuat daftar slot jam kuliah dengan perulangan for
function buatDaftarJam() {
    var teks = "";
    var jam = 7;
    var menit = 30;

    for (var i = 0; i < BATAS_ULANG; i++) {
        if (menit < 10) {
            teks = teks + "<p>" + jam + ".0" + menit + "</p>";
        } else {
            teks = teks + "<p>" + jam + "." + menit + "</p>";
        }

        menit = menit + 50;

        if (menit >= 60) {
            jam = jam + 1;
            menit = menit - 60;
        }
    }

    document.getElementById("daftarJam").innerHTML = teks;
}
// Memvalidasi biodata dan membuka hasil pada jendela pop-up
function validasiBiodata() {
    var nim = document.getElementById("nim").value.trim();
    var nama = document.getElementById("nama").value.trim();
    var jenisKelamin = document.getElementById("jenisKelamin").value;
    var tahunMasuk = document.getElementById("tahunMasuk").value.trim();

    if (nim.length != 10 || isNaN(nim)) {
        alert("Kesalahan: NIM harus berupa 10 digit angka.");
        return false;
    }

    if (nama == "") {
        alert("Kesalahan: Nama tidak boleh kosong.");
        return false;
    }

    if (jenisKelamin == "") {
        alert("Kesalahan: Jenis Kelamin harus dipilih.");
        return false;
    }

    if (tahunMasuk.length != 4 || isNaN(tahunMasuk)) {
        alert("Kesalahan: Tahun Masuk harus berupa 4 digit angka.");
        return false;
    }

    var tahun = Number(tahunMasuk);
    var tahunSekarang = new Date().getFullYear();

    if (tahun > tahunSekarang || tahun < 2000) {
        alert("Kesalahan: Tahun Masuk tidak masuk akal.");
        return false;
    }

    var semester = (tahunSekarang - tahun) * 2;

    var alamat = "hasil.html"
        + "?nim=" + encodeURIComponent(nim)
        + "&nama=" + encodeURIComponent(nama)
        + "&jenisKelamin=" + encodeURIComponent(jenisKelamin)
        + "&tahunMasuk=" + encodeURIComponent(tahunMasuk)
        + "&semester=" + encodeURIComponent(semester);

    window.open(
        alamat,
        "hasilBiodata",
        "width=500,height=500"
    );

    return false;
}