# Afdal Linktree

Landing page personal link yang menampilkan profil singkat dan berbagai tautan sosial. Project ini dibuat dengan HTML, CSS, dan JavaScript murni tanpa framework.

## Fitur

- Tampilan modern dan responsif
- Tema terang dan gelap dengan tombol toggle
- Tombol salin tautan halaman
- Notifikasi toast saat interaksi terjadi
- Link sosial dengan fallback saat tautan belum tersedia
- Desain yang fokus pada pengalaman mobile-first

## Struktur file

- `index.html` — struktur utama halaman
- `styles.css` — styling seluruh tampilan
- `index.js` — interaksi seperti toast, tema, dan copy link
- `afdal.jpg` / `mypic.jpg` — aset foto profil

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
