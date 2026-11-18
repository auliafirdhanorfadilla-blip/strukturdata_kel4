# strukturdata_kel4

# 🏠 NGEKOSIN - Cari Kos & Penginapan Jadi Gampang

HTML | CSS | JavaScript | Tanpa Server | Tanpa PHP

![HTML](https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Google Chrome](https://img.shields.io/badge/Google_Chrome-4285F4?logo=googlechrome&logoColor=white)

## 📝 Deskripsi Sistem
NGEKOSIN adalah aplikasi web pemesanan penginapan dan kos, seperti Traveloka versi kos-kosan.
Pengguna bisa melihat foto kos asli, membandingkan harga, mencari berdasarkan lokasi, dan langsung memesan kamar dari HP tanpa perlu keliling dan tanpa calo.

## 🎯 Masalah Yang Diselesaikan
- Cari kos masih keliling panas-panasan, foto di grup WA sering tidak sesuai aslinya.
- Harga kos tidak jelas, sering ada biaya siluman dari calo.
- Pemilik kos kesulitan mempromosikan kos yang masih kosong.
- Pemesanan masih manual lewat chat, tidak ada daftar pesanan yang rapi.

## ✨ Fitur Utama
- Beranda - Lihat kos populer + foto asli
- Cari Kos - Cari berdasarkan nama / lokasi
- Filter - Berdasarkan harga & tipe (Putra / Putri / Campur)
- Sorting - Urutkan harga termurah & nama A-Z
- Detail Kos - Lihat fasilitas, harga, rating
- Pemesanan (Booking) - Isi nama, WA, tanggal masuk, durasi
- Hitung Otomatis - Total + diskon otomatis (3 bulan 5%, 6 bulan 10%, 12 bulan 15%)
- Pesanan Saya - Lihat semua pesanan, bisa batalkan
- Daftarkan Kos - Pemilik kos bisa tambah kos baru
- Data Tersimpan - Pakai LocalStorage, data tidak hilang walau browser ditutup

## 🧠 Struktur Data Yang Dipakai
1.  **Array** - Menyimpan daftar kos & daftar pesanan. Kayak rak, 1 rak = 1 kos.
2.  **Searching - Linear Search** - Mencari kos dengan mengecek satu-satu dari kos pertama sampai ketemu. Cocok karena data belum terurut.
3.  **Sorting - Bubble Sort** - Mengurutkan harga dengan cara membandingkan 2 harga bersebelahan, kalau kebalik ditukar, diulang sampai rapi.
4.  **Queue (FIFO)** - Antrian pesanan. Yang pesan duluan, dilayani duluan. Pesanan pertama ada di Antrian No. 1.

## 🔄 Alur Kerja (Flowchart)
MULAI -> Buka Beranda -> Lihat Daftar Kos (Array)
-> Cari Kos (Linear Search) / Urutkan Harga (Bubble Sort)
-> Klik Kos -> Lihat Detail -> Isi Form Pemesanan
-> Hitung Total + Diskon -> Simpan Pesanan ke Queue
-> Lihat di Pesanan Saya -> SELESAI / Batalkan Pesananjavascript
## 📁 Struktur Folder ngekosin/
├── index.html    -> Struktur halaman (Beranda, Cari, Detail, Pesanan, dll)

├── style.css     -> Semua tampilan, warna, background foto, animasi

├── script.js     -> Semua logika (Cari, Urutkan, Pesan, Simpan)

└── README.md     -> File ini javascript
## ▶️ Cara Menjalankan
1. Download / copy folder `ngekosin`
2. Double-click file `index.html`
3. Otomatis terbuka di Google Chrome, langsung bisa dipakai
4. Tidak perlu XAMPP, tidak perlu PHP, tidak perlu internet (kecuali untuk load foto)

## 🧪 Cara Demo
1. Buka Beranda -> tunjukkan kos populer
2. Di Cari Kos -> ketik "Cikarang", langsung ke-filter
3. Urutkan -> pilih "Harga Termurah", data langsung keurut
4. Klik 1 kos -> isi nama & WA -> pilih 6 bulan -> tunjukkan total & diskon otomatis
5. Klik Pesan -> pindah ke Pesanan Saya, muncul Antrian No. 1

## 👥 Anggota Kelompok 4
- Nama : Aulia Firdha Norfadilla - NIM : 312510186
- Nama : Dyah Triastini - NIM : 312510166