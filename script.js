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
    let totalBonus = 0;

    // Sembunyikan semua notifikasi awal
    notifikasiBonus.classList.add("hidden");
    notifikasiError.classList.add("hidden");

    // Validasi jika berlian lebih dari 3.000.000
    if (berlian > 3000000) {
        notifikasiError.innerText = "Berlian Anda melampaui batas perhitungan agency dari 3.000.000 berlian.";
        notifikasiError.classList.remove("hidden");
        document.getElementById("hasil").innerText = "Total Bonus: Rp 0";
        return; // Hentikan eksekusi fungsi
    }

    // Logika perhitungan bonus
    if (durasi === "15_30") {
        if (berlian >= 50000 && berlian <= 3000000) {
            totalBonus = Math.round(berlian * 1.575); // Bonus untuk 15 Hari 30 Jam
            notifikasiBonus.innerText = `Selamat ${nama}, Anda mendapatkan bonus!`;
            notifikasiBonus.classList.remove("hidden");
        } else {
            totalBonus = 0;
            notifikasiError.innerText = `${nama}, Anda belum mendapatkan bonus bulan ini, tetap semangat ya live streamingnya!`;
            notifikasiError.classList.remove("hidden");
        }
    } else if (durasi === "20_80") {
        if (berlian > 25000 && berlian <= 3000000) {
            totalBonus = Math.round(berlian * 2.625); // Bonus untuk 20 Hari 80 Jam (di atas 25.000 berlian)
            notifikasiBonus.innerText = `Selamat ${nama}, Anda mendapatkan bonus!`;
            notifikasiBonus.classList.remove("hidden");
        } else {
            totalBonus = 0;
            notifikasiError.innerText = `${nama}, Anda belum mendapatkan bonus bulan ini, tetap semangat ya live streamingnya!`;
            notifikasiError.classList.remove("hidden");
        }
    } else if (durasi === "22_100") {
        if (berlian > 25000 && berlian <= 3000000) {
            totalBonus = Math.round(berlian * 3.15); // Bonus untuk 22 Hari 100 Jam (di atas 25.000 berlian)
            notifikasiBonus.innerText = `Selamat ${nama}, Anda mendapatkan bonus!`;
            notifikasiBonus.classList.remove("hidden");
        } else {
            totalBonus = 0;
            notifikasiError.innerText = `${nama}, Anda belum mendapatkan bonus bulan ini, tetap semangat ya live streamingnya!`;
            notifikasiError.classList.remove("hidden");
        }
    }

    // Tampilkan total bonus
    document.getElementById("hasil").innerText = "Total Bonus: Rp " + formatAngka(totalBonus);
}