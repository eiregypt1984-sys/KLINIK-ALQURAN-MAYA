# Pelan Pembangunan: Kelas Al-Quran Maya — Klinik Islah Al-Quran

## Gambaran Keseluruhan

**Nama Sistem:** Kelas Al-Quran Maya — Klinik Islah Al-Quran
**Logo:** Disediakan oleh pemilik sistem (fail akan dilampirkan).
**Kandungan Modul:** Bersumberkan bahan pembelajaran pemilik sistem (fail akan dilampirkan — BUKAN reka cipta sistem).

**Matlamat:** Mengubah prototaip asas sedia ada (`index.html` / `style.css` / `app.js`) kepada sebuah dashboard pembelajaran al-Quran yang lengkap, interaktif dan moden — merangkumi dua portal utama: **Dashboard Pelajar** dan **Dashboard Admin** — tanpa memerlukan backend atau pangkalan data sebenar.

**Skop:**
- Fail tunggal SPA (Single-Page Application) menggunakan HTML5, CSS3 dan JavaScript tulen (vanilla).
- Semua data disimpan dalam memori (in-memory JavaScript) dengan `localStorage` untuk kesinambungan sesi ringkas.
- Fungsi AI, mikrofon dan audio sebenar dilabel sebagai **simulasi/demo** dengan jelas.
- Teks al-Quran dipaparkan menggunakan fon Arab yang sahih (`Noto Naskh Arabic` atau `Amiri`).

**Bukan dalam skop:**
- Integrasi backend sebenar, pangkalan data, atau API.
- Rakaman suara yang disimpan secara kekal ke pelayan.
- Penjanaan PDF sebenar (pratonton sahaja).

---

## Seni Bina Fail

Projek kekal dalam tiga fail:
- `quran-dashboard/index.html` — struktur HTML keseluruhan
- `quran-dashboard/style.css` — semua gaya (tema hijau zamrud, emas, putih)
- `quran-dashboard/app.js` — semua logik JavaScript

---

## Sub-Tugas

---

### Sub-Tugas 1: Sistem Log Masuk & Kawalan Akses Dua Portal

**Intent:** Menyediakan skrin log masuk yang memisahkan laluan pelajar dan admin, menggantikan paparan terus ke dashboard.

**Jangkaan Hasil:**
- Skrin log masuk dipaparkan apabila halaman dimuat.
- Pengguna memilih peranan: Pelajar atau Admin.
- Selepas log masuk, portal yang betul dipaparkan.
- Butang log keluar tersedia pada kedua-dua portal.

**Senarai Kerja:**
1. Tambah skrin log masuk (`#login-screen`) dengan pilihan peranan, medan nama/kata laluan demo, dan butang log masuk.
2. Sembunyikan semua kandungan portal sehingga log masuk selesai.
3. Paparkan portal pelajar (`#portal-pelajar`) atau admin (`#portal-admin`) berdasarkan peranan yang dipilih.
4. Simpan sesi log masuk dalam `localStorage`.
5. Tambah butang "Log Keluar" pada kedua-dua portal.
6. Kemas kini CSS untuk skrin log masuk (kad berpusat, warna tema).

**Konteks Berkaitan:**
- [`app.js`](app.js) — fungsi `navigateTo()` perlu disesuaikan untuk portal berasingan.
- [`style.css`](style.css) — kelas `.section`, `.sidebar` perlu diperluaskan.

**Status:** `[x] selesai`

---

### Sub-Tugas 2: Reka Bentuk Semula & Tema Visual

**Intent:** Memperbarui tema visual keseluruhan kepada reka bentuk Islam kontemporari yang moden dengan warna hijau zamrud, emas lembut dan putih — responsif untuk desktop, tablet dan telefon pintar.

**Jangkaan Hasil:**
- Warna tema konsisten: hijau zamrud (`#1a5c3a`), emas (`#c8a96e`), putih.
- Fon Arab: `Noto Naskh Arabic` dari Google Fonts.
- Sidebar portal pelajar dan admin masing-masing mempunyai item navigasi yang betul.
- Responsif pada lebar 320px hingga 1440px.
- Aksesibiliti: saiz teks minimum 14px, kontras yang memadai.

**Senarai Kerja:**
1. Tambah `@import` Google Fonts (`Noto Naskh Arabic`, `Inter`).
2. Kemas kini palet warna CSS — tukar biru kepada hijau zamrud, pastikan emas konsisten.
3. Bina semula sidebar pelajar dengan item navigasi baharu (Profil, Modul, Latihan AI, Kelas Guru, Ujian, Sijil).
4. Bina sidebar admin dengan item navigasi baharu (Pendaftaran, Jadual, Modul, Kemajuan, Ujian/Sijil, Laporan).
5. Tambah animasi peralihan halaman yang lembut.
6. Pastikan reka bentuk responsif (media query).

**Konteks Berkaitan:**
- [`style.css`](style.css) — semua kelas sedia ada perlu dikemas kini.

**Status:** `[x] selesai`

---

### Sub-Tugas 3: Portal Pelajar — Pendaftaran & Profil

**Intent:** Menyediakan borang pendaftaran pelajar yang lengkap mengikut keperluan, termasuk semua medan yang dinyatakan, dan memaparkan status pendaftaran.

**Jangkaan Hasil:**
- Borang pendaftaran mengandungi semua 10 medan yang diperlukan.
- Status pendaftaran dipaparkan: Menunggu Pengesahan / Diluluskan / Perlu Maklumat Tambahan / Tidak Diluluskan.
- Pelajar tidak boleh akses modul sehingga status "Diluluskan".
- Profil pelajar menunjukkan maklumat lengkap dan status semasa dalam aliran sistem.

**Senarai Kerja:**
1. Bina seksyen `#daftar-pelajar` dengan borang penuh:
   - Nama penuh, e-mel, no. telefon, umur/kategori umur.
   - Tahap penguasaan bacaan (dropdown).
   - Pengalaman belajar al-Quran (textarea).
   - Kaedah pembelajaran (dalam talian / bersemuka / kedua-dua).
   - Hari dan waktu pembelajaran pilihan (checkbox grid).
   - Pilihan suara AI (lelaki / perempuan).
2. Tambah pengesahan borang dengan mesej ralat yang jelas.
3. Paparkan mesej pengesahan selepas hantar: "Permohonan anda sedang disemak oleh admin."
4. Bina seksyen `#profil-pelajar` yang memaparkan maklumat profil dan status pendaftaran dengan ikon warna.
5. Paparkan "Langkah Seterusnya" berdasarkan status semasa dalam aliran sistem.

**Konteks Berkaitan:**
- [`app.js`](app.js) — array `students` perlu diperluaskan dengan medan tambahan.
- Data demo: 3 pelajar dengan status berbeza (menunggu, diluluskan, perlu maklumat).

**Status:** `[x] selesai`

---

### Sub-Tugas 4: Portal Pelajar — Pemilihan Jadual Kelas

**Intent:** Membolehkan pelajar yang diluluskan memilih jadual kelas dengan memaparkan pensyarah bertugas (nama penuh), slot yang tersedia dan mengelakkan pertindihan.

**Jangkaan Hasil:**
- Paparan nama penuh pensyarah bertugas mengikut hari dan slot masa.
- Setiap hari mempunyai 2 pensyarah bertugas.
- Pelajar boleh memilih hari, waktu (pagi/petang/malam) dan kaedah (dalam talian/bersemuka).
- Slot yang dipilih menunjukkan nama penuh pensyarah dan status (tersedia/penuh).
- Mesej "Menunggu pengesahan admin" selepas tempahan dibuat.

**Senarai Kerja:**
1. Bina seksyen `#jadual-pelajar` dengan grid pemilihan hari (Isnin–Ahad).
2. Paparkan 3 slot masa (Pagi 08:00–10:00, Petang 14:00–16:00, Malam 20:00–22:00) bagi setiap hari.
3. Bina data pensyarah bertugas (2 pensyarah setiap hari, 7 hari) menggunakan nama penuh.
4. Paparkan kad slot dengan nama penuh pensyarah, kaedah dan status ketersediaan.
5. Tambah fungsi tempahan: pelajar pilih slot → sahkan → simpan dalam `localStorage`.
6. Paparkan senarai tempahan pelajar dengan status pengesahan admin.
7. Elakkan pelajar sama menempah slot yang sama dua kali.

**Konteks Berkaitan:**
- Data pensyarah (5 orang, nama penuh):
  - ARAI → Ustazah Raihan binti Ahmad
  - AIZT → Ustaz Izzat Amin bin Mohd Nasir
  - ALTH → Ustazah Latifah binti Hussin
  - AHAS → Ustazah Wan Nur Hasnah binti Wan Yunus
  - ASAO → Ustazah Siti Aisyah binti Othman

**Status:** `[x] selesai`

---

### Sub-Tugas 5: Portal Pelajar — Modul Pembelajaran

**Intent:** Membina ruang modul pembelajaran yang tersusun dengan navigasi antar-modul, penanda kemajuan dan butang penyelesaian.

**Jangkaan Hasil:**
- Sekurang-kurangnya 6 modul disusun mengikut urutan: Asas Huruf Hijaiyah → Makhraj Huruf → Sifat Huruf → Hukum Tajwid Asas → Hukum Tajwid Lanjutan → Kelancaran Bacaan.
- Setiap modul memaparkan: tajuk, objektif, nota ringkas, contoh teks Arab, aktiviti interaktif, latihan pengukuhan.
- Status setiap modul: Belum Dimulakan / Sedang Dipelajari / Selesai.
- Butang "Tandakan sebagai Selesai" berfungsi dan mengemas kini bar kemajuan.
- Navigasi "Modul Sebelumnya" dan "Modul Seterusnya".

**Senarai Kerja:**
1. Bina data modul dalam `app.js` dengan 6 modul dan kandungan demo.
2. Bina seksyen `#modul-pelajar` dengan senarai modul di sebelah kiri dan kandungan di sebelah kanan (layout dua kolum).
3. Paparkan teks Arab menggunakan kelas `arabic-text` dengan fon Noto Naskh Arabic.
4. Tambah butang "Tandakan sebagai Selesai" yang mengemas kini status dan kemajuan.
5. Implementasi navigasi antar-modul (prev/next).
6. Paparkan bar kemajuan keseluruhan modul di bahagian atas.
7. Kunci modul yang belum boleh diakses (modul berikut hanya dibuka selepas modul sebelumnya selesai).

**Konteks Berkaitan:**
- Teks Arab contoh menggunakan ayat Quran pendek yang sahih (Surah Al-Fatihah, Al-Ikhlas, huruf hijaiyah).
- Status modul disimpan dalam `localStorage`.

**Status:** `[x] selesai`

---

### Sub-Tugas 6: Portal Pelajar — Latihan Sebutan & Bacaan AI (Simulasi)

**Intent:** Membina antara muka latihan bacaan interaktif dengan simulasi analisis AI yang jelas dilabel sebagai demo/simulasi.

**Jangkaan Hasil:**
- Aliran latihan lengkap: pilih modul → papar teks Arab → dengar contoh audio → mulakan latihan → analisis → maklum balas.
- Butang mikrofon menunjukkan animasi rakaman (simulasi — tiada rakaman sebenar tanpa kebenaran).
- Maklum balas AI menggunakan respons demo yang telah ditetapkan.
- Pilihan suara AI: lelaki atau perempuan (label sahaja dalam simulasi).
- Label "⚠ Ini adalah simulasi — bukan keputusan AI sebenar" dipaparkan dengan jelas.
- Mesej "Sila semak bacaan ini bersama guru al-Quran" untuk aspek yang tidak dapat dinilai.

**Senarai Kerja:**
1. Bina seksyen `#latihan-ai` dengan panel pemilihan bahan bacaan.
2. Paparkan teks Arab yang besar dan jelas dengan harakat.
3. Tambah butang audio simulasi (main/jeda/ulang) dengan label "Contoh Bacaan (Demo)".
4. Bina antara muka butang mikrofon dengan animasi rakaman (timer simulasi 5 saat).
5. Paparkan keputusan maklum balas demo selepas "analisis" selesai.
6. Tambah pilihan suara AI (radio button lelaki/perempuan).
7. Rekod percubaan latihan (bilangan percubaan, masa) dalam `localStorage`.
8. Tambah label peringatan dan mesej "semak bersama guru" yang jelas.

**Konteks Berkaitan:**
- Teks demo: Surah Al-Fatihah, Surah Al-Ikhlas, huruf hijaiyah terpilih.
- Maklum balas demo: pra-tulis 3–4 respons rawak yang positif dan membina.

**Status:** `[x] selesai`

---

### Sub-Tugas 7: Portal Pelajar — Kelas Bersama Guru

**Intent:** Menyediakan ruang khusus "Kelas Bersama Guru" yang memaparkan jadual kelas yang disahkan, pensyarah bertugas dan butang sertai kelas.

**Jangkaan Hasil:**
- Paparan jadual kelas yang telah disahkan admin.
- Maklumat pensyarah bertugas (kod dan nama penuh).
- Butang "Sertai Kelas" (simulasi — membuka modal atau URL demo).
- Peringatan: "AI adalah alat bantu latihan, bukan pengganti guru al-Quran."
- Ruang soalan kepada guru (borang teks).

**Senarai Kerja:**
1. Bina seksyen `#kelas-guru` dengan senarai kelas yang disahkan.
2. Paparkan maklumat pensyarah, tarikh, masa, kaedah dan status.
3. Tambah butang "Sertai Kelas" dengan modal simulasi.
4. Tambah kotak soalan kepada guru dengan butang "Hantar Soalan".
5. Paparkan banner peringatan musyafahah yang menonjol.
6. Paparkan status pelajar (menunggu pengesahan / kelas disahkan / kelas selesai).

**Status:** `[x] selesai`

---

### Sub-Tugas 8: Portal Pelajar — Ujian & Penilaian

**Intent:** Menyediakan sistem ujian penilaian yang merangkumi penilaian kendiri AI (simulasi) dan pengesahan guru akhir.

**Jangkaan Hasil:**
- Ujian hanya boleh dicapai selepas semua modul wajib selesai.
- Dua komponen: (1) Penilaian Kendiri AI (simulasi), (2) Status Penilaian Guru.
- Paparan markah, ulasan guru, aspek dikuasai dan aspek perlu perbaiki.
- Syarat lulus dikonfigurasi (nilai demo: 70%).

**Senarai Kerja:**
1. Bina seksyen `#ujian-pelajar` dengan semakan syarat akses modul.
2. Bina borang ujian demo (5 soalan pilihan jawapan tentang tajwid asas).
3. Paparkan keputusan selepas hantar ujian dengan skor simulasi.
4. Tambah paparan "Status Penilaian Guru" (belum dinilai / dalam semakan / telah dinilai).
5. Paparkan ulasan guru (demo) dan senarai aspek dikuasai/perlu perbaiki.
6. Paparkan butang "Cuba Semula" jika belum lulus.

**Status:** `[x] selesai`

---

### Sub-Tugas 9: Portal Pelajar — E-Sijil

**Intent:** Menyediakan pratonton e-sijil yang lengkap dengan semua maklumat yang diperlukan dan fungsi muat turun (simulasi print-to-PDF).

**Jangkaan Hasil:**
- E-sijil hanya dipaparkan selepas semua syarat dipenuhi dan disahkan admin.
- Pratonton sijil dalam penyemak imbas dengan reka bentuk Islam yang indah.
- Nombor sijil unik dijanakan secara automatik.
- Butang "Muat Turun (PDF)" menggunakan `window.print()` dengan CSS `@media print`.
- Label: "Sijil tidak rasmi sehingga disahkan admin."

**Senarai Kerja:**
1. Bina seksyen `#sijil-pelajar` dengan paparan syarat (senarai semak).
2. Bina reka bentuk sijil dalam HTML/CSS dengan elemen: nama, program, tarikh, keputusan, institusi, nombor sijil.
3. Tambah ornamen Islam menggunakan Unicode/CSS (bukan imej luaran).
4. Tambah CSS `@media print` untuk cetakan/PDF yang bersih.
5. Janakan nombor sijil unik menggunakan timestamp + nama.
6. Tambah butang "Pratonton Sijil" dan "Cetak / Simpan PDF".

**Status:** `[x] selesai`

---

### Sub-Tugas 10: Dashboard Admin — Semua Modul Pengurusan

**Intent:** Membina portal admin yang lengkap dengan 6 modul pengurusan: pendaftaran, jadual pensyarah, modul, kemajuan, ujian/sijil, dan laporan.

**Jangkaan Hasil:**
- Admin boleh meluluskan/menolak pendaftaran pelajar.
- Admin boleh menetapkan pasangan pensyarah untuk setiap hari/slot.
- Admin boleh menambah/menyunting/memadam modul.
- Admin boleh melihat kemajuan semua pelajar.
- Admin boleh merekodkan keputusan ujian dan mengesahkan sijil.
- Dashboard analitik dengan kad statistik dan graf bar mudah.

**Senarai Kerja:**
1. Bina sidebar admin dengan 6 item navigasi (Pendaftaran, Jadual, Modul, Kemajuan, Ujian/Sijil, Laporan).
2. **Seksyen Pendaftaran Admin:** jadual pelajar menunggu dengan butang Lulus/Tolak/Minta Maklumat.
3. **Seksyen Jadual Admin:** grid 7-hari × 3-slot dengan dropdown pemilihan pensyarah, toggle dalam talian/bersemuka.
4. **Seksyen Modul Admin:** senarai modul dengan butang tambah/sunting/padam, form modal sunting.
5. **Seksyen Kemajuan Admin:** jadual semua pelajar dengan bar kemajuan, rekod latihan AI, status ujian.
6. **Seksyen Ujian/Sijil Admin:** senarai pelajar menunggu penilaian akhir, borang rekod keputusan, butang sahkan sijil.
7. **Seksyen Laporan Admin:** 8 kad statistik + 2 graf bar ringkas (penyelesaian modul, status pelajar) menggunakan CSS sahaja.
8. Sambungkan tindakan admin (lulus/tolak) kepada data `localStorage` supaya status pelajar dikemas kini merentas portal.

**Status:** `[x] selesai`

---

## Aliran Sistem

```
Log Masuk → [Pelajar] Daftar → Admin Semak → Lulus → Pilih Jadual → Admin Sahkan Jadual
         → Belajar Modul → Latihan AI → Kelas Guru (Musyafahah) → Selesai Modul
         → Ujian AI (Simulasi) → Penilaian Guru → Admin Sahkan → Jana Sijil
```

---

## Senarai Pensyarah (Disahkan)

| Kod | Nama Penuh |
|-----|-----------|
| ARAI | Ustazah Raihan binti Ahmad |
| AIZT | Ustaz Izzat Amin bin Mohd Nasir |
| ALTH | Ustazah Latifah binti Hussin |
| AHAS | Ustazah Wan Nur Hasnah binti Wan Yunus |
| ASAO | Ustazah Siti Aisyah binti Othman |

---

## Modul Pembelajaran — Bersumber dari "Nota Ringkasan Asas Tajwid Al-Qur'an" (Fatehah Learning Centre)

**Sumber:** Nota Ringkasan Asas Tajwid Al-Qur'an, Rasm 'Uthmani, Riwayat Hafs, Imam 'Asim
**Disusun oleh:** Ahmad Fitri bin Mat Rusop | **Disemak oleh:** Mohd Izwan bin Ahmad

Modul pembelajaran dibina **terus dari kandungan bahan** mengikut senarai kandungan asal:

| # | Modul (mengikut kandungan bahan) | Topik Utama dari Bahan |
|---|----------------------------------|------------------------|
| 1 | Pengenalan Ilmu Tajwid | Pengertian tajwid, tujuan, hukum mempelajari, kesalahan bacaan (Lahn Jali & Lahn Khafi), 4 tingkatan bacaan (Tahqiq, Tartil, Tadwir, Hadr) |
| 2 | Makhraj Huruf | 5 kawasan umum (Al-Halq, Al-Lisan, As-Syafatain, Al-Jauf, Al-Khaisyum), 17 makhraj khusus, latihan sebutan setiap huruf hijaiyah |
| 3 | Alif Lam Ma'rifah | Alif Lam Al-Qamariyyah (14 huruf), Alif Lam As-Syamsiyyah (14 huruf), contoh dari al-Quran |
| 4 | Hukum Nun Mati & Tanwin | Izhar Halqi, Idgham Bila Ghunnah, Idgham Bi Ghunnah, Izhar Mutlaq, Iqlab, Ikhfa' Haqiqi — dengan contoh ayat |
| 5 | Hukum Mim Mati & Syaddah | Idgham Mislain Soghir, Ikhfa' Syafawi, Izhar Syafawi; Bacaan Mim & Nun Syaddah — dengan contoh ayat |
| 6 | Jenis-jenis Idgham | Idgham Mutamasilain, Idgham Mutajanisain, Idgham Mutaqoribain — dengan contoh ayat |
| 7 | Jenis-jenis Mad | Mad Asli/Tabi'i; Mad Far'i: Wajib Muttasil, Jaiz Munfasil, 'Aridh Lissukun, Lin, 'Iwadh, Badal, Tamkin, Silah (Qasirah & Thowilah), Faraq, Lazim (4 jenis) |
| 8 | Hukum Bacaan Ra & Lam | Ra tafkhim, Ra tarqiq; Lam pada lafaz Al-Jalalah (tafkhim & tarqiq) |
| 9 | Qalqalah & Waqaf | Qalqalah (Sughra & Kubra), 5 huruf qalqalah; Tanda-tanda waqaf dalam mushaf |
| 10 | Hamzah Wasal, Iltiqa' Sakinain & Gharib | Cara bacaan Hamzah Wasal; Iltiqa' Sakinain / Nun Al-Wiqayah; Bacaan-bacaan Gharib dalam Al-Qur'an |

**Nota:** Setiap modul menggunakan nota, contoh ayat dan latihan terus dari bahan asal. Tiada kandungan ditambah dari sumber lain.

---

## Nota Penting

- **Nama sistem:** "Kelas Al-Quran Maya" — Klinik Islah Al-Quran (digunakan pada semua header, sijil dan skrin log masuk).
- **Logo:** Fail logo Klinik Islah Al-Quran akan dilampirkan oleh pemilik sistem. Logo diletakkan pada sidebar, skrin log masuk dan e-sijil.
- **Kandungan modul:** SEMUA kandungan nota, teks Arab, contoh dan latihan diambil terus dari "Nota Ringkasan Asas Tajwid Al-Qur'an" (Fatehah Learning Centre). Tiada kandungan direka atau ditambah dari sumber lain.
- **Teks al-Quran:** Hanya contoh ayat yang terdapat dalam bahan asal yang digunakan (contoh: مَنْ ءَامَنَ، الْحَمْدُ، وَجَآء dsb.)
- Semua fungsi yang memerlukan backend (audio sebenar, AI sebenar, PDF sebenar) dilabel **[SIMULASI]** atau **[DEMO]** secara jelas.
- Data pelajar demo ditetapkan dalam fasa yang berbeza (baru daftar, sedang belajar, menunggu sijil) supaya semua aliran boleh dicuba.
- Nama penuh pensyarah digunakan di semua tempat (bukan kod sahaja), dengan kod disertakan dalam kurungan sebagai rujukan pentadbiran.

## Fail Yang Telah Diterima

- [x] Bahan pembelajaran: "Nota Ringkasan Asas Tajwid Al-Qur'an" (Fatehah Learning Centre) — DOCX ✅
- [x] Logo Klinik Islahul Quran (imej) ✅
- [x] Logo Politeknik Tuanku Sultanah Bahiyah (imej) ✅

## Sub-Tugas Yang Perlu Dikemas kini (Berdasarkan Bahan)

- Sub-Tugas 5 kini mempunyai **10 modul** (bukan 6) — mengikut 15 bab dalam bahan asal yang digabungkan secara munasabah.
- Modul 7 (Jenis-jenis Mad) adalah modul terpanjang — mengandungi 9 jenis Mad Far'i.
