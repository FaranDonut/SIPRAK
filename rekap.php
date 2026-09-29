<?php
/*
  Nama          : Muhammad Farand Danendra
  NIM           : 2510514025
  Kelas         : A - Sains Data
  Berkas        : rekap.php
  ANGKA_A       : 2 (d9)
  ANGKA_B       : 5 (d10)
  TAHUN_MASUK   : 2025
  Deskripsi     : Rekapitulasi Beban Studi KRS Semester Berjalan dengan PHP
  Tanggal ketik : 29/09/2026
*/

// a. Simpan seluruh mata kuliah dari KRS beserta SKS-nya di dalam sebuah array asosiatif
$krs = [
    "Bahasa Inggris"                   => 3,
    "Interaksi Manusia dan Komputer"   => 3,
    "Analisis Big Data"                => 2,
    "Pemrograman Web"                  => 3,
    "Pembelajaran Mesin"               => 3,
    "Basis Data Lanjut"                => 3,
    "Rekayasa Data"                    => 2,
    "Data Mining"                      => 3,
];

// e. Gunakan switch untuk menampilkan nama hari ini berdasarkan angka hari dari date("N") (1 = Senin s.d. 7 = Minggu)
$angkaHari = (int) date("N");
switch ($angkaHari) {
    case 1:
        $namaHari = "Senin";
        break;
    case 2:
        $namaHari = "Selasa";
        break;
    case 3:
        $namaHari = "Rabu";
        break;
    case 4:
        $namaHari = "Kamis";
        break;
    case 5:
        $namaHari = "Jumat";
        break;
    case 6:
        $namaHari = "Sabtu";
        break;
    case 7:
        $namaHari = "Minggu";
        break;
    default:
        $namaHari = "Tidak Diketahui";
        break;
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>SIPRAK - Rekap Beban Studi</title>
    <link rel="stylesheet" href="css/gaya.css">
</head>
<body>
    <iframe class="header-frame" src="atas.html" title="Kepala Halaman SIPRAK"></iframe>

    <nav class="menu-tabel" aria-label="Navigasi utama">
        <a href="index.html" accesskey="b">Beranda</a>
        <a href="profil.html" accesskey="p">Profil</a>
        <a href="kartu.php" accesskey="k">Kartu Mahasiswa</a>
        <a class="aktif" href="rekap.php" accesskey="e">Rekap Beban</a>
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
        <h2>REKAPITULASI BEBAN STUDI MAHASISWA (KRS)</h2>
        <p class="sub-keterangan">
            Hari ini: <strong><?php echo $namaHari; ?></strong>, <?php echo date("d F Y"); ?> |
            Mahasiswa: Muhammad Farand Danendra (2510514025)
        </p>

        <!-- Tabel Rekapitulasi SKS yang dibangun otomatis oleh PHP -->
        <table class="tabel-rekap" title="Rekapitulasi Beban SKS Semester Berjalan">
            <caption><b>Daftar Mata Kuliah dan Beban SKS (Foreach PHP)</b></caption>
            <thead>
                <tr class="judul">
                    <th>No</th>
                    <th>Nama Mata Kuliah</th>
                    <th>Bobot SKS</th>
                </tr>
            </thead>
            <tbody>
                <?php
                // b. Bangun baris-baris tabelnya dengan foreach. Dilarang menulis baris tabel satu per satu dengan tangan.
                // c. Jumlahkan total SKS di dalam perulangan yang sama.
                $totalSKS = 0;
                $nomorUrut = 1;

                foreach ($krs as $matkul => $sks) {
                    $totalSKS += $sks;
                    echo "<tr>";
                    echo "<td>$nomorUrut</td>";
                    echo "<td style='text-align: left; padding-left: 14px;'>$matkul</td>";
                    echo "<td>$sks</td>";
                    echo "</tr>";
                    $nomorUrut++;
                }
                ?>
            </tbody>
            <tfoot>
                <tr class="total">
                    <td colspan="2" style="text-align: right; padding-right: 14px;"><b>Total SKS Semester Ini</b></td>
                    <td><b><?php echo $totalSKS; ?></b></td>
                </tr>
            </tfoot>
        </table>

        <br>

        <?php
        // d. Gunakan if, elseif, else untuk menampilkan status beban:
        // - Ringan bila total kurang dari 18
        // - Normal bila 18 sampai 21
        // - Berlebih bila lebih dari 21
        if ($totalSKS < 18) {
            $statusBeban = "Ringan";
            $warnaBadge  = "#2E7D32"; // hijau
            $keteranganBeban = "Beban studi Anda semester ini tergolong <strong>Ringan</strong> (&lt; 18 SKS). Anda memiliki waktu luang yang cukup untuk kegiatan pengembangan diri dan kepanitiaan.";
        } elseif ($totalSKS >= 18 && $totalSKS <= 21) {
            $statusBeban = "Normal";
            $warnaBadge  = "#1565C0"; // biru
            $keteranganBeban = "Beban studi Anda semester ini tergolong <strong>Normal</strong> (18 sampai 21 SKS). Beban ideal untuk perkuliahan reguler.";
        } else {
            $statusBeban = "Berlebih";
            $warnaBadge  = "#C62828"; // merah
            $keteranganBeban = "Beban studi Anda semester ini tergolong <strong>Berlebih</strong> (&gt; 21 SKS). Anda mengambil <strong>$totalSKS SKS</strong>. Pastikan Anda menjaga kondisi fisik dan mengatur jadwal praktikum laboratorium dengan disiplin.";
        }
        ?>

        <section class="item-tantangan">
            <h3>Evaluasi Status Beban Studi (Struktur Kontrol IF - ELSEIF - ELSE)</h3>
            <p>
                Status Beban Studi: 
                <span style="background-color: <?php echo $warnaBadge; ?>; color: #FFFFFF; padding: 4px 10px; border-radius: 4px; font-weight: bold;">
                    <?php echo $statusBeban; ?> (<?php echo $totalSKS; ?> SKS)
                </span>
            </p>
            <p><?php echo $keteranganBeban; ?></p>
        </section>

        <section class="item-tantangan">
            <h3>Penentuan Hari Ini (Struktur Kontrol SWITCH)</h3>
            <p>
                Nilai angka hari dari <code>date("N")</code> saat ini adalah: <code><?php echo $angkaHari; ?></code>.<br>
                Setelah dievaluasi melalui percabangan <code>switch ($angkaHari)</code>, nama hari yang didapatkan adalah: 
                <strong><?php echo $namaHari; ?></strong>.
            </p>
        </section>
    </div>

    <footer>
        <p>&copy; 2026 SIPRAK - Sistem Informasi Praktikan | Mahasiswa: Muhammad Farand Danendra (2510514025)</p>
    </footer>

    <script src="js/skrip.js"></script>
</body>
</html>
