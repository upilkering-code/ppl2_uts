# E-Portofolio PPG

Kerangka web multi-halaman berbasis HTML, CSS, dan JavaScript murni. Proyek ini sudah responsif dan siap di-deploy ke Vercel.

Seluruh halaman menggunakan tema RPG adventure journal, font isi Consolas, judul bergaya RetroBit, serta animasi mosaik pixel hanya saat halaman ditutup dan dibuka. Filter di dalam halaman memakai transisi fade–slide.

## Halaman

- `index.html` — Beranda
- `profil.html` — Profil, nilai, kompetensi, pendidikan, dan pengalaman praktik
- `artefak.html` — Arsip PTK Siklus 1–4: konteks, tujuan, refleksi, tindak lanjut, dokumen, dan video
- `refleksi.html` — Metodologi 4C serta jurnal Semester I, Semester II, dan LK 3
- `filosofi.html` — Landasan teori dan wujud praktik filosofi mengajar
- `model-guru.html` — Visi serta karakter guru profesional yang dituju
- `lampiran.html` — Penilaian, galeri dokumentasi, sertifikat, dan pencapaian
- `pengalaman.html`, `dokumentasi.html`, `sertifikat.html`, `kontak.html` — halaman pendukung lama yang tetap disertakan

## Menjalankan secara lokal

Buka `index.html` langsung di browser, atau jalankan server lokal:

```bash
python -m http.server 8000
```

Kemudian buka `http://localhost:8000`.

## Deploy ke Vercel

Jalankan perintah berikut dari folder proyek:

```bash
npx vercel --prod
```

Tidak diperlukan build command. Framework preset dapat dipilih **Other**.

## Mengganti konten

1. Cari teks `Nama Mahasiswa`, `[Nama Universitas]`, dan penanda lain di seluruh berkas HTML.
2. Ganti gambar contoh di `assets/images/` dengan foto sendiri. Pertahankan nama berkas atau ubah sumber `src` pada `dokumentasi.html`.
3. Tempel tautan publik artefak, modul ajar, LKPD, video, refleksi, dan tindak lanjut pada properti `url` di `assets/js/artefak.js`. Gunakan tautan Google Drive berakhiran `/preview` atau tautan YouTube `/embed/` agar pratinjau tampil langsung.
4. Formulir kontak masih berupa demonstrasi front-end dan perlu dihubungkan ke Formspree atau layanan serupa agar benar-benar mengirim pesan.
5. Nama dan isi seluruh refleksi dapat diedit pada `assets/js/refleksi.js`; pemilihan kartu memakai transisi fade–slide yang halus.
6. Transisi pixel antarlaman dibuat secara otomatis oleh `assets/js/app.js` dan berlaku pada seluruh halaman.
