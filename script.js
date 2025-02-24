/* script.js */
function hitungPendapatan() {
    let durasi = document.getElementById("durasi").value;
    let berlian = parseInt(document.getElementById("berlian").value);
    let pendapatan = 0;
    let notifikasi = document.getElementById("notifikasi");
    
    if (durasi === "15_30" && berlian < 25000) {
        pendapatan = 0;
        notifikasi.classList.remove("hidden");
    } else if ((durasi === "20_80" || durasi === "22_100") && berlian >= 25000 && berlian < 50000) {
        pendapatan = berlian * 2;
        notifikasi.classList.add("hidden");
    } else if (durasi === "15_30" && berlian >= 50000 && berlian <= 3000000) {
        pendapatan = berlian * 1.575;
        notifikasi.classList.add("hidden");
    } else if (durasi === "20_80" && berlian >= 50000 && berlian <= 3000000) {
        pendapatan = berlian * 2.625;
        notifikasi.classList.add("hidden");
    } else if (durasi === "22_100" && berlian >= 50000 && berlian <= 3000000) {
        pendapatan = berlian * 3.15;
        notifikasi.classList.add("hidden");
    } else {
        notifikasi.classList.remove("hidden");
    }
    
    document.getElementById("hasil").innerText = "Pendapatan: Rp " + pendapatan.toLocaleString("id-ID");
}
