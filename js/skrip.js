/*
  Nama          : Muhammad Farand Danendra
  NIM           : 2510514025
  Kelas         : A - Sains Data
  Berkas        : js/skrip.js
  Perhitungan Variabel Berbasis NIM:
  - Digit NIM     = 2 5 1 0 5 1 4 0 2 5
  - ANGKA_A       = 2
  - ANGKA_B       = 5
  - BATAS_LULUS   = ((2 + 5) mod 3) + 60
                  = (7 mod 3) + 60
                  = 1 + 60 = 61
  - BATAS_ULANG   = ((2 + 5) mod 4) + 5
                  = (7 mod 4) + 5
                  = 3 + 5 = 8
  - TAHUN_MASUK   = 2025 (dari dua digit pertama NIM)
  Tanggal ketik   : 22/09/2026
*/

var ANGKA_A = 2;
var ANGKA_B = 5;
var BATAS_LULUS = 61;
var BATAS_ULANG = 8;



// D.1: Menyapa pengunjung dengan meminta nama melalui prompt
function sapaPengunjung(waktu) {
    var namaPengunjung = prompt("Silakan masukkan nama Anda:");

    if (namaPengunjung !== null && namaPengunjung.trim() !== "") {
        alert(waktu + ", " + namaPengunjung.trim() + "!\nSelamat datang di Sistem Informasi Praktikan (SIPRAK 3.0).");
    } else {
        alert(waktu + ", Praktikan!\nSelamat datang di Sistem Informasi Praktikan (SIPRAK 3.0).");
    }
}

// D.2: Menjumlahkan tiga nilai SKS dan mengembalikan hasilnya dengan return
function totalSKS(a, b, c) {
    return a + b + c;
}

// D.3: Memeriksa nilai terhadap batas kelulusan
function cekNilai(nilai, batas) {
    if (nilai >= batas) {
        return "Lulus";
    } else {
        return "Belum lulus";
    }
}

// Meminta nilai SKS via prompt, lalu menampilkan hasil ke alert dan DOM
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

    var hasilElemen = document.getElementById("hasilSKS");
    if (hasilElemen) {
        hasilElemen.innerHTML =
            "Total 3 mata kuliah = " + hasilTotalSKS + " SKS.<br>" +
            "Nilai = " + nilaiAngka + ", Batas lulus = " + BATAS_LULUS + ", Status = " + status + ".";
    }

    alert(pesanAlert);
}

// Menghubungkan tombol di jadwal.html dengan hitungSKSMahasiswa
function jalankanKalkulator() {
    hitungSKSMahasiswa();
}

// D.4: Memvalidasi integritas data formulir pendaftaran asisten
function validasiFormulir() {
    var inputNama = document.getElementById("nama");
    var inputNim = document.getElementById("nim");

    if (!inputNama || inputNama.value.trim() === "") {
        alert("Validasi Gagal: Kolom Nama Lengkap wajib diisi!");
        if (inputNama) inputNama.focus();
        return false;
    }

    if (!inputNim || inputNim.value.trim().length !== 10) {
        var panjangSaatIni = inputNim ? inputNim.value.trim().length : 0;
        alert("Validasi Gagal: Panjang NIM harus tepat 10 digit angka!\n(NIM saat ini: " + panjangSaatIni + " karakter)");
        if (inputNim) inputNim.focus();
        return false;
    }

    alert("Validasi Berhasil: Data pendaftaran asisten valid dan siap dikirim!");
    return true;
}

// Menjalankan kode tabel telusur TP4 ke panel Console
function jalankanTabelTelusur() {
    var a = ANGKA_A;
    var b = ANGKA_B;
    var c = "" + a;

    function ubah(x) {
        x = x + 1;
        return x;
    }

    var d = ubah(a);

    console.log("=== HASIL EKSEKUSI TABEL TELUSUR TP4 (NIM: 2510514025) ===");
    console.log(1, a + b);
    console.log(2, c + b);
    console.log(3, a);
    console.log(4, d);
    console.log(5, ubah(b) + ubah(b));
    console.log(6, typeof c);

    alert("Kode Tabel Telusur TP4 berhasil dieksekusi!\nSilakan tekan tombol F12 lalu buka tab Console.");
}




// D.1 TP5: Menentukan huruf mutu berdasarkan nilai angka
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

// D.3 TP5: Membuat daftar slot jam kuliah dengan perulangan for,
// dibangun otomatis sebanyak BATAS_ULANG putaran (dimulai 07.30, tambah 50 menit)
function buatDaftarJam() {
    var wadah = document.getElementById("daftarJam");
    if (!wadah) return; // berhenti kalau bukan halaman jadwal

    var html = "";
    html += "<table class='tabel-rekap' title='Daftar slot jam kuliah'>";
    html += "<caption><b>Daftar Slot Jam Kuliah (BATAS_ULANG = " + BATAS_ULANG + ")</b></caption>";
    html += "<thead><tr class='judul'><th class='tengah'>No</th><th class='tengah'>Jam Mulai</th><th class='tengah'>Jam Selesai</th></tr></thead>";
    html += "<tbody>";

    var jam = 7;
    var menit = 30;

    for (var i = 1; i <= BATAS_ULANG; i++) {
        var jamMulai = jam;
        var menitMulai = menit;

        // Jam selesai = jam mulai + 50 menit
        var menitSelesai = menit + 50;
        var jamSelesai = jam;
        if (menitSelesai >= 60) {
            jamSelesai = jamSelesai + 1;
            menitSelesai = menitSelesai - 60;
        }

        var teksMulai = jamMulai + "." + (menitMulai < 10 ? "0" + menitMulai : menitMulai);
        var teksSelesai = jamSelesai + "." + (menitSelesai < 10 ? "0" + menitSelesai : menitSelesai);

        html += "<tr>";
        html += "<td class='tengah'>" + i + "</td>";
        html += "<td class='tengah'>" + teksMulai + "</td>";
        html += "<td class='tengah'>" + teksSelesai + "</td>";
        html += "</tr>";

        jam = jamSelesai;
        menit = menitSelesai;

        // Pembatas percobaan (nilai tambah PDF):
        // walau BATAS_ULANG salah diubah, perulangan tetap berhenti di 100.
        if (i >= 100) {
            html += "<tr><td colspan='3' class='tengah'><b>Batas percobaan tercapai, perulangan dihentikan paksa.</b></td></tr>";
            break;
        }
    }

    html += "</tbody></table>";
    wadah.innerHTML = html;
}

// Menjalankan uji hurufMutu() dan namaHari() dari halaman jadwal
function ujiHurufMutuDanHari() {
    var inputNilai = document.getElementById("nilaiUji");
    var inputHari = document.getElementById("hariUji");
    var wadah = document.getElementById("hasilUji");
    if (!wadah) return;

    var nilai = Number(inputNilai.value);
    var hari = Number(inputHari.value);

    if (isNaN(nilai) || nilai < 0 || nilai > 100) {
        wadah.innerHTML = "Nilai harus berupa angka 0 sampai 100.";
        return;
    }
    if (isNaN(hari) || hari < 1 || hari > 7) {
        wadah.innerHTML = "Angka hari harus 1 sampai 7.";
        return;
    }

    var mutu = hurufMutu(nilai);
    var nama = namaHari(hari);

    wadah.innerHTML =
        "Nilai " + nilai + " = Huruf Mutu <b>" + mutu + "</b><br>" +
        "Angka " + hari + " = Hari <b>" + nama + "</b>";
}


// Memvalidasi biodata dan membuka hasil pada jendela pop-up
function validasiBiodata() {
    var nim = document.getElementById("nim").value.trim();
    var nama = document.getElementById("nama").value.trim();
    var jenisKelamin = document.getElementById("jenisKelamin").value;
    var tahunMasuk = document.getElementById("tahunMasuk").value.trim();

    // NIM harus tepat 10 digit angka
    if (!/^\d{10}$/.test(nim)) {
        alert("Kesalahan: NIM harus berupa 10 digit angka.");
        return false;
    }

    if (nama === "") {
        alert("Kesalahan: Nama tidak boleh kosong.");
        return false;
    }

    if (jenisKelamin === "") {
        alert("Kesalahan: Jenis Kelamin harus dipilih.");
        return false;
    }

    // Tahun masuk harus tepat 4 digit angka
    if (!/^\d{4}$/.test(tahunMasuk)) {
        alert("Kesalahan: Tahun Masuk harus berupa 4 digit angka.");
        return false;
    }

    var tahun = Number(tahunMasuk);
    var tahunSekarang = new Date().getFullYear();

    if (tahun < 2000 || tahun > tahunSekarang) {
        alert("Kesalahan: Tahun Masuk tidak masuk akal (2000 s.d. " + tahunSekarang + ").");
        return false;
    }

    var alamat = "hasil.html"
        + "?nim=" + encodeURIComponent(nim)
        + "&nama=" + encodeURIComponent(nama)
        + "&jenisKelamin=" + encodeURIComponent(jenisKelamin)
        + "&tahunMasuk=" + encodeURIComponent(tahunMasuk);

    window.open(
        alamat,
        "hasilBiodata",
        "width=600,height=500,scrollbars=yes,resizable=yes"
    );

    return false;
}

// Membaca query string dari URL lalu menampilkan seluruh data biodata
// pada halaman hasil.html (jendela pop-up)
function tampilkanHasilBiodata() {
    var wadah = document.getElementById("hasilBiodata");
    if (!wadah) return; // berhenti kalau bukan halaman hasil.html

    var params = new URLSearchParams(window.location.search);

    var nim = params.get("nim") || "(tidak ada)";
    var nama = params.get("nama") || "(tidak ada)";
    var jenisKelamin = params.get("jenisKelamin") || "(tidak ada)";
    var tahunMasuk = params.get("tahunMasuk") || "(tidak ada)";

    // Semester dihitung ulang dari objek Date (sesuai PDF)
    var tahunSekarang = new Date().getFullYear();
    var semester = "(tidak diketahui)";
    if (tahunMasuk !== "(tidak ada)" && !isNaN(tahunMasuk)) {
        semester = (tahunSekarang - Number(tahunMasuk)) * 2;
    }

    var html = "";
    html += "<table class='tabel-biodata'>";
    html += "<tr><td class='label'>NIM</td><td>" + nim + "</td></tr>";
    html += "<tr><td class='label'>Nama</td><td>" + nama + "</td></tr>";
    html += "<tr><td class='label'>Jenis Kelamin</td><td>" + jenisKelamin + "</td></tr>";
    html += "<tr><td class='label'>Tahun Masuk</td><td>" + tahunMasuk + "</td></tr>";
    html += "<tr><td class='label'>Semester Berjalan</td><td>" + semester + "</td></tr>";
    html += "</table>";

    wadah.innerHTML = html;

    // Pasang aksi tutup jendela pada tautan
    var tautanTutup = document.getElementById("tutupJendela");
    if (tautanTutup) {
        tautanTutup.addEventListener("click", function (e) {
            e.preventDefault();
            window.close();
        });
    }
}




// Class Mahasiswa: cetakan objek mahasiswa dengan nama, NIM, tahun masuk
class Mahasiswa {
    // Constructor: menyimpan nama, nim, dan tahunMasuk ke properti this
    constructor(nama, nim, tahunMasuk) {
        this.nama = nama;
        this.nim = nim;
        this.tahunMasuk = tahunMasuk;
    }

    // Method infoDasar: mengembalikan gabungan nama dan NIM
    infoDasar() {
        return this.nama + " - " + this.nim;
    }

    // Method hitungSemester: menghitung semester berjalan dari selisih tahun
    hitungSemester(tahunSekarang) {
        return (tahunSekarang - this.tahunMasuk) * 2;
    }
}

// Class Praktikan: turunan (extends) dari Mahasiswa dengan tambahan kelas praktikum
class Praktikan extends Mahasiswa {
    // Constructor: wajib memanggil super() sebelum memakai this
    constructor(nama, nim, tahunMasuk, kelasPraktikum) {
        super(nama, nim, tahunMasuk);
        this.kelasPraktikum = kelasPraktikum;
    }

    // Method infoLengkap: memanggil method induk lalu menambahkan kelas praktikum
    infoLengkap(tahunSekarang) {
        return this.infoDasar()
            + " | Kelas " + this.kelasPraktikum
            + " | Semester " + this.hitungSemester(tahunSekarang);
    }
}

// Menampilkan objek Mahasiswa dan Praktikan ke halaman profil
function tampilkanProfil() {
    var wadah = document.getElementById("daftar-profil");
    if (!wadah) return; // berhenti kalau bukan halaman profil

    var tahunSekarang = new Date().getFullYear();

    // Satu objek Mahasiswa (data saya sendiri)
    var mhsSaya = new Mahasiswa(
        "Muhammad Farand Danendra",
        "2510514025",
        2025
    );

    // Objek Praktikan 1: data saya sendiri
    var praktikanSaya = new Praktikan(
        "Muhammad Farand Danendra",
        "2510514025",
        2025,
        "A - Sains Data"
    );

    // Objek Praktikan 2: data teman sekelas
    var praktikanTeman = new Praktikan(
        "Arkaan Cexing",
        "2510514026",
        2025,
        "A - Sains Data"
    );

    var html = "";

    html += "<h3>Objek Mahasiswa</h3>";
    html += "<p>" + mhsSaya.infoDasar()
        + " | Semester " + mhsSaya.hitungSemester(tahunSekarang) + "</p>";

    html += "<h3>Objek Praktikan 1 (data saya)</h3>";
    html += "<p>" + praktikanSaya.infoLengkap(tahunSekarang) + "</p>";

    html += "<h3>Objek Praktikan 2 (data teman sekelas)</h3>";
    html += "<p>" + praktikanTeman.infoLengkap(tahunSekarang) + "</p>";

    wadah.innerHTML = html;
}




// Menjalankan kode Tabel Telusur Perulangan TP5 ke Console
function jalankanTabelTelusurTP5() {
    var a = ANGKA_A;
    var b = ANGKA_B;

    // Baris 1: for, akumulasi 1..a
    var hasil = 0;
    for (var i = 1; i <= a; i++) {
        hasil = hasil + i;
    }
    console.log(1, hasil);

    // Baris 2: while, naik kelipatan 2 sampai >= b
    var j = 0;
    while (j < b) {
        j = j + 2;
    }
    console.log(2, j);

    // Baris 3: do...while, turun kelipatan a sampai <= 0
    var k = 10;
    do {
        k = k - a;
    } while (k > 0);
    console.log(3, k);

    // Baris 4: for mundur, menempel angka dari a ke 1
    var teks = "";
    for (var i2 = a; i2 >= 1; i2--) {
        teks = teks + i2;
    }
    console.log(4, teks);

    // Baris 5: nested loop 3 x 2
    var n = 0;
    for (var p = 0; p < 3; p++) {
        for (var q = 0; q < 2; q++) {
            n++;
        }
    }
    console.log(5, n);

    alert("Kode Tabel Telusur Perulangan TP5 berhasil dieksekusi.\n"
        + "Tekan F12 lalu buka tab Console untuk melihat kelima hasil.");
}

document.addEventListener("DOMContentLoaded", function () {
    tampilkanProfil();         // aktif hanya di profil.html
    tampilkanHasilBiodata();   // aktif hanya di hasil.html
    buatDaftarJam();           // aktif hanya di jadwal.html
});