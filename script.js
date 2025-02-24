// Fungsi untuk memformat angka dengan titik setiap 3 digit
function formatAngka(angka) {
    return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Fungsi untuk menghapus format titik dan mengembalikan angka asli
function hapusFormat(angka) {
    return angka.replace(/\./g, "");
}

// Event listener untuk memformat input berlian secara otomatis
document.getElementById("berlian").addEventListener("input", function (e) {
    let nilai = e.target.value;
    let nilaiTanpaTitik = hapusFormat(nilai);
    if (!isNaN(nilaiTanpaTitik)) {
        e.target.value = formatAngka(nilaiTanpaTitik);
    }
});

function hitungPendapatan() {
    const nama = document.getElementById("nama").value;
    const durasi = document.getElementById("durasi").value;
    const berlianInput = document.getElementById("berlian").value;
    const berlian = parseInt(hapusFormat(berlianInput)); // Hapus titik sebelum konversi ke number
    const notifikasiBonus = document.getElementById("notifikasi-bonus");
    const notifikasiError = document.getElementById("notifikasi-error");
    let pendapatan = 0;

    // Sembunyikan semua notifikasi awal
    notifikasiBonus.classList.add("hidden");
    notifikasiError.classList.add("hidden");

    // Validasi jika berlian lebih dari 3.000.000
    if (berlian > 3000000) {
        notifikasiError.innerText = "Berlian Anda melampaui batas perhitungan agency dari 3.000.000 berlian.";
        notifikasiError.classList.remove("hidden");
        document.getElementById("hasil").innerText = "Pendapatan: Rp 0";
        return; // Hentikan eksekusi fungsi
    }

    // Logika perhitungan pendapatan
    if (durasi === "15_30" && berlian < 25000) {
        pendapatan = 0;
        notifikasiError.innerText = `${nama}, Anda belum mendapatkan bonus bulan ini, tetap semangat ya live streamingnya!`;
        notifikasiError.classList.remove("hidden");
    } else if ((durasi === "20_80" || durasi === "22_100") && berlian >= 25000 && berlian < 50000) {
        pendapatan = Math.round(berlian * 2); // Bulatkan hasil
        notifikasiBonus.innerText = `Selamat ${nama}, Anda mendapatkan bonus!`;
        notifikasiBonus.classList.remove("hidden");
    } else if (durasi === "15_30" && berlian >= 50000 && berlian <= 3000000) {
        pendapatan = Math.round(berlian * 1.575); // Bulatkan hasil
        notifikasiBonus.innerText = `Selamat ${nama}, Anda mendapatkan bonus!`;
        notifikasiBonus.classList.remove("hidden");
    } else if (durasi === "20_80" && berlian >= 50000 && berlian <= 3000000) {
        pendapatan = Math.round(berlian * 2.625); // Bulatkan hasil
        notifikasiBonus.innerText = `Selamat ${nama}, Anda mendapatkan bonus!`;
        notifikasiBonus.classList.remove("hidden");
    } else if (durasi === "22_100" && berlian >= 50000 && berlian <= 3000000) {
        pendapatan = Math.round(berlian * 3.15); // Bulatkan hasil
        notifikasiBonus.innerText = `Selamat ${nama}, Anda mendapatkan bonus!`;
        notifikasiBonus.classList.remove("hidden");
    } else {
        notifikasiError.innerText = `${nama}, Anda belum mendapatkan bonus bulan ini, tetap semangat ya live streamingnya!`;
        notifikasiError.classList.remove("hidden");
    }

    // Tampilkan hasil pendapatan
    document.getElementById("hasil").innerText = "Pendapatan: Rp " + formatAngka(pendapatan);
}