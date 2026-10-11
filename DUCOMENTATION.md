# Dokumentasi Project Linktree

Project ini adalah landing page personal link yang berfungsi sebagai profil singkat dengan tautan sosial. Tujuan utamanya adalah menampilkan identitas, informasi singkat, dan daftar link penting dalam satu halaman yang rapi dan responsif.

## Teknologi yang digunakan

- HTML5
- CSS3
- JavaScript vanilla

## Struktur halaman

- Header profil: nama, username, status, dan tombol mode tema
- Area avatar: foto profil utama
- Info tag: kategori atau interest
- Intro: deskripsi singkat
- Navigasi social links: daftar tautan penting
- Tombol aksi: salin tautan halaman
- Toast notification: feedback interaksi

## Fitur utama

1. Tampilan modern
   - Layout berbasis card
   - Warna yang lebih halus dan elegan
   - Ukuran yang responsif untuk layar mobile

2. Mode tema
   - Tersedia light dan dark mode
   - Tema tersimpan di localStorage agar konsisten saat reload

3. Interaksi link
   - Saat link belum tersedia, akan memberi notifikasi toast
   - Saat tautan bisa dibuka, mengarah ke halaman sesuai target

4. Salin tautan
   - Tombol salin tautan halaman memudahkan pengguna membagikan profil

5. Feedback visual
   - Animasi ringan pada hover, focus, dan toast

## Cara customizing

### Mengganti nama / username

Edit bagian di `index.html`:

```html
<h1 id="profile-name">Afdal</h1>
<p class="username">@afdalxzx</p>
```

### Menambah atau mengubah link

Ubah blok `<li>` di dalam `<nav>` pada file `index.html`:

```html
<a
  class="social-link"
  href="https://instagram.com/afdalxzx"
  target="_blank"
  rel="noopener noreferrer"
>
  ...
</a>
```

### Menyesuaikan warna / theme

Edit variable CSS di `:root` atau `:root[data-theme="dark"]` pada `styles.css`.

### Mengganti foto profil

Ganti file `afdal.jpg` atau `mypic.jpg` dengan gambar baru yang sesuai lalu sesuaikan referensi `background` di `styles.css`.

## Jalankan di lokal

Buka file langsung di browser, atau jalankan server lokal:

```bash
cd /home/afdal/Desktop/Linktree
python3 -m http.server 8000
```

Lalu buka:

```bash
http://localhost:8000
```
