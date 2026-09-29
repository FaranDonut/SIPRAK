<?php
/*
  Nama          : Muhammad Farand Danendra
  NIM           : 2510514025
  Kelas         : A - Sains Data
  Berkas        : telusur.php
  ANGKA_A       : 2 (d9 dari NIM 2510514025)
  ANGKA_B       : 5 (d10 dari NIM 2510514025)
  Deskripsi     : Tabel Telusur Tipe Data (Bagian Keempat TP6)
  Tanggal ketik : 29/09/2026
*/

$a = 2; // ANGKA_A = digit ke-9 NIM
$b = 5; // ANGKA_B = digit ke-10 NIM
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>SIPRAK - Tabel Telusur Tipe Data</title>
    <link rel="stylesheet" href="css/gaya.css">
</head>
<body>
    <iframe class="header-frame" src="atas.html" title="Kepala Halaman SIPRAK"></iframe>

    <nav class="menu-tabel" aria-label="Navigasi utama">
        <a href="index.html" accesskey="b">Beranda</a>
        <a href="profil.html" accesskey="p">Profil</a>
        <a href="kartu.php" accesskey="k">Kartu Mahasiswa</a>
        <a href="rekap.php" accesskey="e">Rekap Beban</a>
        <a class="aktif" href="telusur.php" accesskey="x">Tabel Telusur</a>
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
        <h2>TABEL TELUSUR TIPE DATA (BAGIAN KEEMPAT TP6)</h2>
        <p class="sub-keterangan">
            Mahasiswa: Muhammad Farand Danendra - NIM 2510514025 |
            Parameter: <code>$a = 2</code> (ANGKA_A = d<sub>9</sub>), <code>$b = 5</code> (ANGKA_B = d<sub>10</sub>)
        </p>

        <!-- Bagian Output Mentah var_dump() sesuai soal TP6 G -->
        <section class="item-tantangan">
            <h3>Hasil Eksekusi <code>var_dump()</code> di Server PHP:</h3>
            <pre><code><?php
echo "Baris 1: "; var_dump($a + $b);
echo "Baris 2: "; var_dump($a . $b);
echo "Baris 3: "; var_dump($a / 2);
echo "Baris 4: "; var_dump("$a" + 1);
echo "Baris 5: "; var_dump((int) ($b . "5x"));
echo "Baris 6: "; var_dump($a == "$a");
echo "Baris 7: "; var_dump($a === "$a");
echo "Baris 8: "; var_dump(5 + "10");
?></code></pre>
        </section>

        <br>

        <!-- Tabel Perbandingan Ramalan vs Hasil var_dump -->
        <table class="tabel-telusur" border="1" title="Tabel Telusur Tipe Data TP6">
            <thead>
                <tr class="judul">
                    <th class="kolom-no">No</th>
                    <th>Ekspresi Kode</th>
                    <th class="kolom-ramalan">Ramalan Nilai</th>
                    <th class="kolom-ramalan">Ramalan Tipe</th>
                    <th class="kolom-hasil">Hasil var_dump</th>
                    <th>Penjelasan bila berbeda / Rincian Logika</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="tengah">1</td>
                    <td><code>$a + $b</code></td>
                    <td class="tengah"><code>7</code></td>
                    <td class="tengah"><code>integer</code></td>
                    <td class="tengah"><code>int(7)</code></td>
                    <td>Sesuai ramalan. Operator <code>+</code> melakukan penjumlahan aritmatika biasa antara integer 2 dan 5.</td>
                </tr>
                <tr>
                    <td class="tengah">2</td>
                    <td><code>$a . $b</code></td>
                    <td class="tengah"><code>"25"</code></td>
                    <td class="tengah"><code>string</code></td>
                    <td class="tengah"><code>string(2) "25"</code></td>
                    <td>Sesuai ramalan. Operator titik (<code>.</code>) adalah penggabungan (concatenation) string di PHP. Kedua integer dikonversi ke string lalu disambung.</td>
                </tr>
                <tr>
                    <td class="tengah">3</td>
                    <td><code>$a / 2</code></td>
                    <td class="tengah"><code>1</code></td>
                    <td class="tengah"><code>integer</code></td>
                    <td class="tengah"><code>int(1)</code></td>
                    <td>Sesuai ramalan untuk NIM genap. Karena 2 dibagi 2 menghasilkan bilangan bulat tanpa sisa, PHP memberikan tipe <code>int</code>. (Lihat analisis khusus di bawah).</td>
                </tr>
                <tr>
                    <td class="tengah">4</td>
                    <td><code>"$a" + 1</code></td>
                    <td class="tengah"><code>3</code></td>
                    <td class="tengah"><code>integer</code></td>
                    <td class="tengah"><code>int(3)</code></td>
                    <td>Sesuai ramalan. String <code>"2"</code> otomatis dikonversi (type juggling) menjadi integer 2 oleh operator <code>+</code>, lalu dijumlahkan dengan 1.</td>
                </tr>
                <tr>
                    <td class="tengah">5</td>
                    <td><code>(int) ($b . "5x")</code></td>
                    <td class="tengah"><code>0 / Galat</code></td>
                    <td class="tengah"><code>integer</code></td>
                    <td class="tengah"><code>int(55)</code></td>
                    <td><strong>Meleset pada nilai:</strong> Awalnya saya meramalkan terjadi error atau 0 karena ada karakter <code>"x"</code>. Namun PHP memindai angka dari awal karakter string <code>"55x"</code> dan mengabaikan huruf di belakangnya, sehingga menghasilkan integer 55.</td>
                </tr>
                <tr>
                    <td class="tengah">6</td>
                    <td><code>$a == "$a"</code></td>
                    <td class="tengah"><code>true</code></td>
                    <td class="tengah"><code>boolean</code></td>
                    <td class="tengah"><code>bool(true)</code></td>
                    <td>Sesuai ramalan. Operator <code>==</code> adalah <em>loose comparison</em> (membandingkan nilai saja). PHP mengubah string <code>"2"</code> ke integer 2 sehingga nilainya setara.</td>
                </tr>
                <tr>
                    <td class="tengah">7</td>
                    <td><code>$a === "$a"</code></td>
                    <td class="tengah"><code>false</code></td>
                    <td class="tengah"><code>boolean</code></td>
                    <td class="tengah"><code>bool(false)</code></td>
                    <td>Sesuai ramalan. Operator <code>===</code> adalah <em>strict comparison</em> (memeriksa nilai DAN tipe data). Karena <code>int</code> tidak sama dengan <code>string</code>, hasilnya false.</td>
                </tr>
                <tr>
                    <td class="tengah">8</td>
                    <td><code>5 + "10"</code></td>
                    <td class="tengah"><code>15</code></td>
                    <td class="tengah"><code>integer</code></td>
                    <td class="tengah"><code>int(15)</code></td>
                    <td>Sesuai ramalan. String numerik <code>"10"</code> secara otomatis diubah menjadi integer 10 oleh PHP sebelum dijumlahkan dengan 5.</td>
                </tr>
            </tbody>
        </table>

        <br>

        <!-- Penjelasan Khusus Baris 3 sesuai Instruksi Modul Praktikum -->
        <section class="item-tantangan">
            <h3>Analisis Khusus Baris 3: Mengapa Tipe Data Dapat Berbeda Antar Mahasiswa?</h3>
            <p>
                Pada soal Baris 3 (<code>var_dump($a / 2);</code>), hasilnya dapat menghasilkan tipe data yang berbeda antara satu mahasiswa dan mahasiswa lainnya:
            </p>
            <ul>
                <li>
                    <strong>Kasus NIM Genap (Mahasiswa Ini: NIM 2510514025, ANGKA_A = 2):</strong><br>
                    Operasi yang dijalankan adalah <code>2 / 2</code>. Karena 2 habis dibagi 2 dan menghasilkan bilangan bulat sempurna tanpa sisa desimal, 
                    PHP mengembalikan nilai <code>1</code> dengan tipe <strong>integer</strong> (<code>int(1)</code>).
                </li>
                <li>
                    <strong>Kasus NIM Ganjil (Contoh Teman dengan ANGKA_A = 3 atau 7):</strong><br>
                    Operasi yang dijalankan adalah <code>3 / 2</code> atau <code>7 / 2</code>. Karena pembagian tersebut menghasilkan angka pecahan dengan sisa (misalnya <code>1.5</code> atau <code>3.5</code>), 
                    maka PHP secara otomatis mengubah tipe data hasilnya menjadi <strong>float</strong> (<code>float(1.5)</code>).
                </li>
            </ul>
            <p>
                Kedua jawaban tersebut <strong>sama-sama benar</strong> secara spesifikasi PHP karena perilaku operator pembagian (<code>/</code>) di PHP ditentukan oleh hasil operasi matematikanya: jika menghasilkan bilangan bulat maka bertipe integer, sedangkan jika terdapat desimal maka otomatis bertipe float.
            </p>
        </section>
    </div>

    <footer>
        <p>&copy; 2026 SIPRAK - Sistem Informasi Praktikan | Mahasiswa: Muhammad Farand Danendra (2510514025)</p>
    </footer>

    <script src="js/skrip.js"></script>
</body>
</html>
