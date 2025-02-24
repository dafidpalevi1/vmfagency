function hitungPendapatan() {
    const nama = document.getElementById("nama").value;
    const durasi = document.getElementById("durasi").value;
    const berlian = parseInt(document.getElementById("berlian").value);
    const notifikasi = document.getElementById("notifikasi");
    let pendapatan = 0;
    let bonusMessage = "";

    // Validasi jika berlian lebih dari 3.000.000
    if (berlian > 3000000) {
        bonusMessage = "Berlian Anda sudah melampaui batas bonus dari agency.";
        notifikasi.style.color = "red";
        notifikasi.classList.remove("hidden");
        document.getElementById("hasil").innerText = "Pendapatan: Rp 0";
        return; // Hentikan eksekusi fungsi
    }

    // Logika perhitungan pendapatan
    if (durasi === "15_30" && berlian < 25000) {
        pendapatan = 0;
        bonusMessage = `${nama}, Anda belum mendapatkan bonus bulan ini, tetap semangat ya live streamingnya!`;
    } else if ((durasi === "20_80" || durasi === "22_100") && berlian >= 25000 && berlian < 50000) {
        pendapatan = berlian * 2;
        bonusMessage = `Selamat ${nama}, Anda mendapat bonus dengan nilai:\nRp ${pendapatan.toLocaleString("id-ID")}`;
    } else if (durasi === "15_30" && berlian >= 50000 && berlian <= 3000000) {
        pendapatan = berlian * 1.575;
        bonusMessage = `Selamat ${nama}, Anda mendapat bonus dengan nilai:\nRp ${pendapatan.toLocaleString("id-ID")}`;
    } else if (durasi === "20_80" && berlian >= 50000 && berlian <= 3000000) {
        pendapatan = berlian * 2.625;
        bonusMessage = `Selamat ${nama}, Anda mendapat bonus dengan nilai:\nRp ${pendapatan.toLocaleString("id-ID")}`;
    } else if (durasi === "22_100" && berlian >= 50000 && berlian <= 3000000) {
        pendapatan = berlian * 3.15;
        bonusMessage = `Selamat ${nama}, Anda mendapat bonus dengan nilai:\nRp ${pendapatan.toLocaleString("id-ID")}`;
    } else {
        bonusMessage = `${nama}, Anda belum mendapatkan bonus bulan ini, tetap semangat ya live streamingnya!`;
    }

    // Tampilkan hasil dan notifikasi
    document.getElementById("hasil").innerText = "Pendapatan: Rp " + pendapatan.toLocaleString("id-ID");
    notifikasi.innerText = bonusMessage;
    notifikasi.classList.remove("hidden");

    // Warna notifikasi berdasarkan bonus
    if (bonusMessage.includes("Selamat")) {
        notifikasi.style.color = "green";
    } else {
        notifikasi.style.color = "red";
    }
}