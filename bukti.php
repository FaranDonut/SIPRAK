<?php
/*
  Nama          : Muhammad Farand Danendra
  NIM           : 2510514025
  Kelas         : A - Sains Data
  Berkas        : bukti.php
  Deskripsi     : Bukti Sisi Server - Bagian Pertama TP6 Pemrograman Web
  ANGKA_A       : 2 (d9)
  ANGKA_B       : 5 (d10)
  TAHUN_MASUK   : 2025
  Tanggal ketik : 29/09/2026
*/
$nama  = "Muhammad Farand Danendra";
$sandi = "RAHASIA-2510514025";
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>SIPRAK - Bukti Sisi Server</title>
    <link rel="stylesheet" href="css/gaya.css">
</head>
<body>
    <iframe class="header-frame" src="atas.html" title="Kepala Halaman SIPRAK"></iframe>

    <nav class="menu-tabel" aria-label="Navigasi utama">
        <a href="index.html" accesskey="b">Beranda</a>
        <a href="profil.html" accesskey="p">Profil</a>
        <a href="kartu.php" accesskey="k">Kartu Mahasiswa</a>
        <a href="rekap.php" accesskey="e">Rekap Beban</a>
        <a href="telusur.php" accesskey="x">Tabel Telusur</a>
        <a class="aktif" href="bukti.php" accesskey="s">Bukti Server</a>
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
        <h2>Halo, <?php echo $nama; ?></h2>
        <p>Halaman ini dibuat oleh server pada detik ke <?php echo date("s"); ?>.</p>

        <hr>

        <section class="item-tantangan">
            <h3>Petunjuk Tangkapan Layar Bukti Sisi Server (Bagian D)</h3>
            <p>Sertakan tiga tangkapan layar berikut dengan bilah alamat browser terlihat jelas:</p>
            <ol>
                <li>
                    <strong>bukti_1_kliksalah.png (Cara yang salah):</strong><br>
                    Berkas <code>bukti.php</code> dibuka langsung dengan klik dua kali dari File Explorer. Alamat pada peramban akan diawali <code>file:///</code> dan kode PHP tidak akan diproses oleh server.
                </li>
                <li>
                    <strong>bukti_2_localhost.png (Cara yang benar):</strong><br>
                    Berkas <code>bukti.php</code> dibuka melalui web server lokal pada alamat <code>http://localhost/siprak_2510514025/bukti.php</code>. Segarkan (refresh) halaman beberapa kali untuk melihat angka detiknya berubah setiap saat.
                </li>
                <li>
                    <strong>bukti_3_viewsource.png (View Source):</strong><br>
                    Buka kode sumber halaman melalui klik kanan &rarr; <em>View Page Source</em> (atau <code>Ctrl + U</code>) pada halaman yang dibuka melalui localhost. Perhatikan bahwa variabel <code>$sandi</code> beserta isinya sama sekali tidak terkirim atau terbaca oleh pengunjung.
                </li>
            </ol>
        </section>
    </div>

    <footer>
        <p>&copy; 2026 SIPRAK - Sistem Informasi Praktikan | Mahasiswa: Muhammad Farand Danendra (2510514025)</p>
    </footer>

    <script src="js/skrip.js"></script>
</body>
</html>
