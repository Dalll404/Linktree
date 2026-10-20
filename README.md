# Afdal Linktree

Landing page personal link yang menampilkan profil singkat dan berbagai tautan sosial. Project ini dibuat dengan HTML, CSS, dan JavaScript murni tanpa framework.

## Fitur

- Tampilan modern dan responsif
- Jam dan tanggal lokal yang diperbarui secara langsung
- Animasi mengambang pada foto profil, animasi masuk kartu/tautan, dan latar bergerak
- Tema terang dan gelap dengan tombol toggle
- Tombol salin tautan halaman
- Notifikasi toast saat interaksi terjadi
- Link sosial dengan fallback saat tautan belum tersedia
- Desain yang fokus pada pengalaman mobile-first

## Struktur file

- `index.html` — struktur utama halaman
- `styles.css` — styling seluruh tampilan, animasi profil, dan dukungan reduced motion
- `index.js` — interaksi seperti toast, tema, dan copy link
- `assets/foto-profile.jpeg` — aset foto profil

## Cara menjalankan

Buka file `index.html` langsung di browser, atau jalankan server lokal sederhana seperti:

```bash
python3 -m http.server 8000
```

Lalu akses:

```bash
http://localhost:8000
```

## Catatan

Jika Anda ingin menambahkan tautan baru, cukup edit blok di dalam elemen `nav` pada `index.html` dan sesuaikan styling serta label di `styles.css` bila diperlukan.
