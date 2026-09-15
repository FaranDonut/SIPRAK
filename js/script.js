/*
  Nama          : Muhammad Farand Danendra
  NIM           : 2510514025
  Kelas         : A - Sains Data
  Berkas        : js/skrip.js
  ANGKA_A       : 2 (diambil dari d9)
  ANGKA_B       : 5 (diambil dari d10)
  BATAS_LULUS   : ((2 + 5) mod 3) + 60 = 61
*/

// 1
function sapaPengunjung(waktu) {
    var nama = prompt("Masukkan nama Anda:");
    if (nama) {
        alert(waktu + ", " + nama + "!");
    } else {
        alert(waktu + "!");
    }
}

// 2
function totalSKS(a, b, c) {
    return Number(a) + Number(b) + Number(c);
}

// 3
function cekNilai(nilai, batas) {
    if (nilai >= batas) {
        return "Lulus";
    } else {
        return "Belum lulus";
    }
}

//4
function validasiFormulir() {
    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;

    if (nama == "") {
        alert("Nama harus diisi");
        return false;
    }

    if (nim.length != 10) {
        alert("NIM harus 10 karakter");
        return false;
    }

    return true;
}
//tambahan 
function prosesTotalSKS() {
    var sks1 = prompt("Masukkan SKS pertama");
    var sks2 = prompt("Masukkan SKS kedua");
    var sks3 = prompt("Masukkan SKS ketiga");

    sks1 = Number(sks1);
    sks2 = Number(sks2);
    sks3 = Number(sks3);

    var hasil = totalSKS(sks1, sks2, sks3);

    document.getElementById("hasil-sks").innerHTML = "Total SKS = " + hasil;
}
//tambahan
function prosesCekNilai() {
    var nilai = prompt("Masukkan nilai");
    nilai = Number(nilai);

    var hasil = cekNilai(nilai, BATAS_LULUS);

    document.getElementById("hasil-cek-nilai").innerHTML =
        "Nilai " + nilai + " = " + hasil;
}

