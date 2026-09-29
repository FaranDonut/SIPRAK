<?php
/*
  Nama          : Muhammad Farand Danendra
  NIM           : 2510514025
  Kelas         : A - Sains Data
  Berkas        : kartu.php
  ANGKA_A       : 2 (d9)
  ANGKA_B       : 5 (d10)
  TAHUN_MASUK   : 2025
  Perhitungan   :
  - Tahun sekarang dari date("Y") : 2026
  - Bulan sekarang dari date("n") : 9 (September)
  - Selisih tahun = 2026 - 2025 = 1 tahun
  - Semester berjalan = (1 * 2) + 1 = 3
  - Lama studi dalam bulan = (1 * 12) + (9 - 8 + 1) = 14 bulan
  - Modulus semester: (3 % 2 != 0) -> "Ganjil"
  Tanggal ketik : 29/09/2026
*/

// a. Simpan data diri dalam variabel PHP
$nama        = "Muhammad Farand Danendra";
$nim         = "2510514025";
$kelas       = "A - Sains Data";
$prodi       = "S1 Sains Data";
$tahunMasuk  = 2025;

// c. Hitung semester berjalan dari tahun sekarang dikurangi tahun masuk
// Ambil tahun sekarang dengan date("Y"), jangan ditulis mati
$tahunSekarang = (int) date("Y");
$bulanSekarang = (int) date("n"); // 1 sampai 12
$selisihTahun  = $tahunSekarang - $tahunMasuk;

// Semester berjalan (asumsi semester ganjil dimulai Agustus / bulan >= 8)
$semesterBerjalan = ($selisihTahun * 2) + ($bulanSekarang >= 8 ? 1 : 0);
if ($semesterBerjalan <= 0) {
    $semesterBerjalan = 1;
}

// d. Hitung pula lama studi dalam bulan, lalu gunakan operator modulus untuk menentukan apakah semester ganjil atau genap
$lamaStudiBulan = ($selisihTahun * 12) + ($bulanSekarang - 8 + 1);
if ($lamaStudiBulan <= 0) {
    $lamaStudiBulan = ($selisihTahun * 12) + $bulanSekarang;
}

// Penentuan ganjil atau genap menggunakan operator modulus (%)
$statusSemester = ($semesterBerjalan % 2 != 0) ? "Ganjil" : "Genap";
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>SIPRAK - Kartu Mahasiswa Dinamis</title>
    <link rel="stylesheet" href="css/gaya.css">
</head>
<body>
    <iframe class="header-frame" src="atas.html" title="Kepala Halaman SIPRAK"></iframe>

    <nav class="menu-tabel" aria-label="Navigasi utama">
        <a href="index.html" accesskey="b">Beranda</a>
        <a href="profil.html" accesskey="p">Profil</a>
        <a class="aktif" href="kartu.php" accesskey="k">Kartu Mahasiswa</a>
        <a href="rekap.php" accesskey="e">Rekap Beban</a>
        <a href="telusur.php" accesskey="x">Tabel Telusur</a>
        <a href="bukti.php" accesskey="s">Bukti Server</a>
        <a href="jadwal.html" accesskey="j">Jadwal</a>
        <a href="galeri.html" accesskey="g">Galeri</a>
        <a href="daftar.html" accesskey="d">Pendaftaran</a>
        <a href="biodata.html" accesskey="o">Biodata</a>
        <a href="jurnal.html" accesskey="r">Jurnal Eksplorasi</a>
        <a href="profil.html#prestasi" accesskey="t">Prestasi</a>
        <a href="https://www.upnvj.ac.id" accesskey="u" target="_blank">UPNVJ Resmi</a>
        <a href="mailto:muhammadpanji@upnvj.ac.id" accesskey="m">Mail Dosen</a>
    </nav>

    <div id="isi">
        <h2>KARTU TANDA MAHASISWA DINAMIS (KTM)</h2>
        <p class="sub-keterangan">Seluruh data identitas dan perhitungan semester di bawah dihasilkan langsung oleh PHP di sisi server.</p>

        <div class="kotak-profil">
            <span class="badge-status">Mahasiswa Aktif (<?php echo $statusSemester; ?>)</span>

            <table class="tabel-profil" title="Kartu Identitas Mahasiswa Dinamis">
                <tbody>
                    <tr>
                        <td rowspan="8" class="kolom-foto">
                            <img src="gambar/get_foto_mahasiswa.jpeg" alt="Foto Resmi Mahasiswa" class="foto-profil"><br>
                            <small><b><?php echo $nim; ?></b></small>
                        </td>
                        <!-- b. Sebagian data ditampilkan memakai petik dua ("...") yang membaca isi variabel -->
                        <?php
                            echo "<td class='label'>Nama Lengkap</td>";
                            echo "<td><strong>$nama</strong></td>";
                        ?>
                    </tr>
                    <tr>
                        <?php
                            echo "<td class='label'>NIM</td>";
                            echo "<td>$nim</td>";
                        ?>
                    </tr>
                    <tr>
                        <!-- b. Sebagian data ditampilkan memakai penyambungan string dengan tanda titik (.) -->
                        <?php
                            echo '<td class="label">Kelas Praktikum</td>';
                            echo '<td>' . $kelas . '</td>';
                        ?>
                    </tr>
                    <tr>
                        <?php
                            echo '<td class="label">Program Studi</td>';
                            echo '<td>' . $prodi . '</td>';
                        ?>
                    </tr>
                    <tr>
                        <?php
                            echo '<td class="label">Tahun Masuk</td>';
                            echo '<td>' . $tahunMasuk . '</td>';
                        ?>
                    </tr>
                    <tr>
                        <!-- c. Semester berjalan dihitung dari tahun sekarang (date("Y")) dikurangi tahun masuk -->
                        <?php
                            echo '<td class="label">Semester Berjalan</td>';
                            echo '<td>Semester ' . $semesterBerjalan . ' (' . $statusSemester . ') &mdash; <em>Tahun Server: ' . $tahunSekarang . '</em></td>';
                        ?>
                    </tr>
                    <tr>
                        <!-- d. Lama studi dalam bulan dan hasil operator modulus -->
                        <?php
                            echo '<td class="label">Lama Studi</td>';
                            echo '<td>Sekitar ' . $lamaStudiBulan . ' Bulan (Perhitungan Modulus: <code>' . $semesterBerjalan . ' % 2 = ' . ($semesterBerjalan % 2) . '</code> &rarr; <strong>' . $statusSemester . '</strong>)</td>';
                        ?>
                    </tr>
                    <tr>
                        <td class="label">Waktu Pembuatan</td>
                        <td><?php echo date("d-m-Y H:i:s"); ?> WIB</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <br>

        <!-- e. Tampilkan satu baris yang memakai petik satu dengan variabel di dalamnya beserta keterangannya -->
        <section class="item-tantangan">
            <h3>Demonstrasi Perbedaan Petik Ganda ("...") vs Petik Tunggal ('...')</h3>
            
            <p><strong>1. Sintaks dengan Petik Ganda (Interpolasi Variabel Aktif):</strong></p>
            <pre><code>echo "Halo, nama saya $nama dengan NIM $nim.";</code></pre>
            <p><strong>Hasil tampilan:</strong> <?php echo "Halo, nama saya $nama dengan NIM $nim."; ?></p>

            <br>

            <p><strong>2. Sintaks dengan Petik Tunggal (Variabel di Dalamnya):</strong></p>
            <pre><code>echo 'Halo, nama saya $nama dengan NIM $nim.';</code></pre>
            <p><strong>Hasil tampilan:</strong> <?php echo 'Halo, nama saya $nama dengan NIM $nim.'; ?></p>

            <br>

            <p><strong>Penjelasan Mengapa Isi Variabel Tidak Muncul pada Petik Tunggal:</strong></p>
            <p>
                Pada bahasa pemrograman PHP, string yang diapit tanda petik tunggal (<code>'...'</code>) diperlakukan sebagai <em>string literal murni</em>. 
                PHP tidak memindai kode di dalam petik tunggal untuk mencari ekspresi variabel atau karakter khusus (kecuali <code>\'</code> dan <code>\\</code>). 
                Oleh karena itu, tanda dollar dan nama variabel seperti <code>$nama</code> dan <code>$nim</code> dicetak apa adanya sebagai teks mentah. 
                Sebaliknya, pada string berpetik ganda (<code>"..."</code>), PHP melakukan proses yang disebut <em>variable interpolation / variable parsing</em>, 
                di mana setiap nama variabel akan dievaluasi dan digantikan dengan nilai yang disimpannya sebelum string dicetak ke browser.
            </p>
        </section>
    </div>

    <footer>
        <p>&copy; 2026 SIPRAK - Sistem Informasi Praktikan | Mahasiswa: Muhammad Farand Danendra (2510514025)</p>
    </footer>

    <script src="js/skrip.js"></script>
</body>
</html>
