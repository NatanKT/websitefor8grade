# 📘 belajar.md — Panduan Memahami Pylearn

Dokumen ini dibuat untuk **orang awam** yang ingin memahami:
1. **Alur aplikasi** — apa yang siswa alami saat pakai website ini
2. **Cara baca kode** — bagian mana mengatur apa, supaya tidak bingung saat mau ubah sesuatu

---

## 1. 🗂️ Struktur File (Peta Harta Karun)

```
F:\website kelas7\
│
├── index.html          ← Rangka halaman (kerangka semua layar)
├── css\
│   └── style.css       ← Tampilan / warna / posisi / animasi
├── js\
│   ├── icons.js        ← Gambar hewan SVG lucu (ular, kelinci, owl...)
│   ├── quiz-data.js    ← Bank soal (isi pertanyaan & jawaban)
│   ├── quiz.js         ← Mesin kuis (logika jawab, skor, navigasi soal)
│   └── main.js         ← Otak aplikasi (navigasi, progres, kirim nilai)
├── *.jpg, *.png, *.pdf ← Gambar & materi pendukung
├── vercel.json         ← Setting deploy ke Vercel
└── belajar.md          ← File ini (panduan)
```

**Analogi sederhana:**
- `index.html` = rangka rumah (dinding, kamar, pintu)
- `style.css` = cat, wallpaper, dekorasi rumah
- `js/*.js` = listrik & peralatan rumah (yang bikin rumah "hidup")
- `quiz-data.js` = buku soal di meja belajar

---

## 2. 🚶 Alur Aplikasi (Pengalaman Siswa)

### Langkah 1 — Landing Page (Halaman Selamat Datang)
Siswa pertama kali buka `belajarpython.online` → melihat:
- Logo "Pylearn"
- Judul "Selamat Datang di Pylearn!"
- 3 kartu: "Mudah Dipahami", "Banyak Dipakai", "Masa Depan Cerah"
- Tombol besar **"Mulai Belajar Sekarang"**

### Langkah 2 — Onboarding (Input Nama)
Siswa klik tombol → muncul form:
- "Hai! Kenalan dulu yuk 🎀"
- Input nama panggilan → klik "Lanjut →"
- Nama disimpan di **localStorage** browser siswa (tidak dikirim ke server saat itu)

### Langkah 3 — Beranda (Home)
Setelah isi nama, siswa masuk ke Beranda:
- Sapaan "Halooo, [Nama]!"
- Progress keseluruhan (0 dari 3 Modul)
- Tombol "Mulai Belajar Materi →"
- Fakta seru Python (berganti tiap hari)
- Lencana/badge achievement
- 3 menu: **Materi**, **Latihan** (terkunci), **Nilai** (terkunci)

### Langkah 4 — Materi (3 Modul)
Siswa klik Materi → daftar 3 modul:
1. **Pengenalan Python** (algoritma & kenalan Python)
2. **Menulis Program Python Pertamamu** (print & jenis data)
3. **Operasi Matematika Sederhana** (+, -, *, /, **)

Tiap modul dibuka satu per satu. Di dalam modul ada:
- Materi sebelum kuis (teks + ilustrasi)
- **Kuis singkat** di tengah (1 soal tebak)
- Materi setelah kuis
- Tombol **"Tandai Selesai ✓"** → buka Latihan terkait

### Langkah 5 — Latihan (3 Soal, Terkunci Bertahap)
Setelah Modul X selesai → Latihan X terbuka:
1. **Latihan 1: Pilihan Ganda** (buka setelah Modul 1 selesai)
2. **Latihan 2: Drag & Drop** (buka setelah Modul 2 selesai)
3. **Latihan 3: Susun & Ketik Kode** (buka setelah Modul 3 selesai)

**Alur anti-stres:**
- Selesai Latihan 1 → arahkan ke Modul 2 (skor disembunyikan)
- Selesai Latihan 2 → arahkan ke Modul 3 (skor disembunyikan)
- Selesai Latihan 3 → tampilkan skor + rekap semua + buka menu Nilai

### Langkah 6 — Nilai
Setelah Latihan 3 selesai → menu Nilai terbuka:
- Nilai huruf (A/B/C/D/E) berdasarkan rata-rata
- Statistik per latihan (skor + progress bar)
- **Nilai otomatis terkirim ke Google Sheets** (lihat bagian 5)

### Alur Lengkap (Diagram)

```
Landing → Onboarding (isi nama) → Beranda
                                      │
                                      ▼
                                   Materi
                                      │
                          ┌───────────┼───────────┐
                          ▼           ▼           ▼
                       Modul 1     Modul 2     Modul 3
                          │           │           │
                          ▼           ▼           ▼
                       Latihan 1   Latihan 2   Latihan 3
                       (sembunyi-  (sembunyi-  (tampil
                        kan skor)   kan skor)   skor+rekap)
                          │           │           │
                          └─→ Modul 2  └─→ Modul 3  └─→ Nilai
                                                        │
                                                        ▼
                                               Google Sheets
                                               (otomatis)
```

---

## 3. 🔍 Cara Baca Kode (Untuk Orang Awam)

### 3a. `index.html` — Kerangka Halaman

**Konsep:** HTML itu seperti denah rumah. Setiap `<section>` = satu kamar.

```html
<section class="screen screen--landing" data-screen="landing">
  ...isi landing page...
</section>
```

- `data-screen="landing"` → nama kamar (dipakai JS untuk tampilkan/sembunyikan)
- `class="screen"` → semua layar punya class ini
- Hanya 1 layar yang aktif (terlihat) dalam satu waktu

**Layar-layar di aplikasi:**
| `data-screen` | Isi |
|---|---|
| `landing` | Halaman selamat datang |
| `onboarding` | Form input nama |
| `beranda` | Home (menu utama) |
| `materi` | Daftar 3 modul |
| `modul` | Detail isi 1 modul |
| `games` | Daftar 3 latihan |
| `quiz` | Halaman kerjakan soal |
| `nilai` | Rekap nilai siswa |

**Cara baca tombol navigasi:**
```html
<button data-go="materi">Mulai Belajar</button>
```
- `data-go="materi"` → klik tombol ini = pergi ke layar Materi
- Diatur oleh `main.js` (lihat bagian "NAVIGATION HANDLER")

**Versi cache (penting!):**
```html
<script src="js/main.js?v=15"></script>
```
- `?v=15` = nomor versi. Setiap kali file JS/CSS diubah, **naikkan nomor ini**
- Tujuan: supaya browser siswa tidak pakai versi lama (cache)
- Lupa naikkan = perubahan tidak kelihatan di website!

---

### 3b. `css/style.css` — Tampilan & Dekorasi

**Konsep:** CSS itu seperti buku panduan dekorasi. "Yang punya class ini, warnanya X, posisinya Y."

```css
.btn--primary {
  background: var(--primary);   /* kuning pastel */
  color: var(--primary-ink);    /* teks gelap */
  border-radius: 14px;          /* sudut membulat */
}
```

**Baca:**
- `.btn--primary` → tombol utama (kuning)
- `var(--primary)` → ambil warna dari variabel di atas (`:root`)
- Variabel warna ada di baris 1-20 (palet "Candy Spirit")

**Tip mengubah tampilan:**
- Mau ubah warna tombol utama? Cari `--primary` di `:root` (baris 3)
- Mau ubah ukuran font judul? Cari `.hero__title`
- Mau ubah jarak antar elemen? Cari properti `margin` atau `padding`

**Animasi:**
```css
@keyframes useFloat {
  0%, 100% { transform: translateY(0) }
  50%      { transform: translateY(-6px) }
}
```
- Baca: elemen naik 6px di tengah animasi, kembali ke 0 di akhir
- Dipakai untuk kartu yang "mengambang" (efek hidup)

---

### 3c. `js/main.js` — Otak Aplikasi (PALALING PENTING)

**Konsep:** JavaScript itu seperti aturan main di rumah. "Kalau tombol X diklik, lakukan Y."

File ini dibungkus dalam `(function(){ ... })();` — artinya semua kode di dalamnya **private**, tidak bocor ke file lain.

#### Bagian-bagian penting:

**① Variabel penyimpanan (baris 5-11)**
```js
var NAME_KEY = 'pylearn_username';      // kunci simpan nama
var PROG_KEY = 'pylearn_progress';      // kunci simpan progres
var SHEET_URL = 'https://script.google.com/macros/s/AKfyc.../exec';
```
- `NAME_KEY` & `PROG_KEY` → nama "laci" di localStorage browser siswa
- `SHEET_URL` → alamat Google Apps Script untuk kirim nilai

**② Data Modul (baris 19-69)**
```js
var MODULES = [
  { t: 'Pengenalan Python', s: '...', quiz: {...}, bodyBefore: '...', bodyAfter: '...' },
  { t: 'Menulis Program...', ... },
  { t: 'Operasi Matematika...', ... }
];
```
- 3 modul dengan: judul (`t`), subjudul (`s`), kuis (`quiz`), isi (`bodyBefore`/`bodyAfter`)
- **Mau ubah isi modul?** Edit array ini. Teks bisa pakai HTML.

**③ Progres (baris 71-93)**
```js
function getProgress() {
  var p = JSON.parse(localStorage.getItem(PROG_KEY));
  ...
  return p;
}
```
- Ambil progres dari localStorage
- Isi: `{ modul: [false,false,false], games: [false,false,false], gameScores: [null,null,null], ... }`
- `modul[0]=true` → Modul 1 selesai
- `gameScores[1]=80` → Latihan 2 dapat 80

**④ Navigasi antar layar (baris 124-152)**
```js
function show(screen) {
  // sembunyikan semua layar, tampilkan yang dipilih
  screens.forEach(function (s) {
    s.classList.toggle('is-active', s.dataset.screen === screen);
  });
}
```
- Fungsi `show('materi')` = tampilkan layar Materi, sembunyikan lainnya
- Dipanggil saat klik tombol `data-go`

**⑤ Handler klik global (baris 618-637)**
```js
document.addEventListener('click', function (e) {
  var el = e.target.closest('[data-go]');
  if (!el) return;
  var target = el.dataset.go;
  show(target);
});
```
- Baca: "Kalau ada elemen diklik dan punya `data-go`, pergi ke layar itu."
- Ini kenapa semua tombol `data-go="..."` otomatis jalan tanpa kode tambahan

**⑥ Kuis di modul (baris 382-420)**
```js
function wireQuiz(m) {
  // saat siswa klik jawaban, tampilkan feedback benar/salah
  btn.addEventListener('click', function () {
    var isOk = btn.getAttribute('data-ok') === '1';
    btn.classList.add(isOk ? 'is-correct' : 'is-wrong');
    ...
  });
}
```
- Kuis singkat di tengah modul (1 soal tebak)
- Cek atribut `data-ok="1"` → benar, `data-ok="0"` → salah

**⑦ Latihan & skor (baris 444-585)**
```js
var GAME_TABS = ['pilihan', 'dragdrop', 'urutan'];
```
- 3 jenis latihan: pilihan ganda, drag & drop, susun/ketik
- Tiap latihan punya indeks 0, 1, 2

**⑧ Kirim nilai ke Google Sheets (baris 581-604)**
```js
function submitScoresToSheet(p) {
  var form = new URLSearchParams();
  form.append('nama', nama);
  form.append('l1', scores[0]);
  ...
  fetch(SHEET_URL, { method: 'POST', mode: 'no-cors', body: form });
}
```
- Baca: "Susun data (nama, nilai latihan 1/2/3, rata-rata) → kirim ke Google Sheets"
- Dipanggil otomatis tiap siswa selesai 1 latihan
- `URLSearchParams` = format data yang Google Apps Script bisa baca
- `mode: 'no-cors'` = izin kirim tanpa balasan (anonym, cepat)

**⑨ Reset data (baris 665-707)**
```js
var RESET_PASSWORD = 'reset123';
```
- Password reset = `reset123`
- Hapus nama + progres siswa dari localStorage
- Kembali ke Landing Page

---

### 3d. `js/quiz.js` — Mesin Kuis

**Konsep:** File ini mengatur soal-soal latihan. Tidak peduli modul, hanya peduli soal.

#### Variabel utama (baris 1-10)
```js
var currentTab = 'pilihan';     // jenis soal saat ini
var currentIndex = 0;           // nomor soal saat ini (0-9)
var answers = { pilihan:{}, dragdrop:{}, urutan:{} };  // jawaban siswa
```

#### Fungsi penting:

**① Mulai kuis (baris 58-65)**
```js
window.quizStart = function (tab, gameIdx) {
  currentTab = tab;
  resetTab(tab);
  render('fwd');
};
```
- Dipanggil `main.js` saat siswa klik "Kerjakan"
- Ambil 10 soal dari bank, tampilkan soal pertama

**② Render soal (baris 140-165)**
```js
function render(dir) {
  var item = items[currentIndex];
  if (currentTab === 'pilihan') html = renderPilihan(item, currentIndex);
  else if (currentTab === 'dragdrop') html = renderDragDrop(item, currentIndex);
  else if (currentTab === 'urutan') ...
  container.innerHTML = html;
}
```
- Bangun HTML soal sesuai jenis → tampilkan ke layar

**③ Cek jawaban benar/salah (baris 79-102)**
```js
function isCorrect(idx) {
  if (currentTab === 'pilihan') return userAns === item.a;        // bandingkan indeks
  if (currentTab === 'dragdrop') return item.jawaban.indexOf(userAns) >= 0;
  if (currentTab === 'urutan') { ... cek urutan array / cek teks isian }
}
```
- Pilihan ganda: bandingkan indeks jawaban
- Drag & drop: cek apakah pilihan ada di array jawaban benar
- Urutan: cek urutan array baris kode
- Isian: bandingkan teks (spasi diabaikan)

**④ Navigasi soal (baris 352-360)**
```js
nextBtn.addEventListener('click', function () {
  if (currentIndex < items.length - 1) { currentIndex++; render('fwd'); }
  else { showResult(); }
});
```
- Klik "Berikutnya" → soal selanjutnya
- Soal terakhir → tampilkan hasil

**⑤ Tampilkan hasil (baris 364-428)**
```js
function showResult() {
  var correct = computeScore();
  var pct = Math.round((correct / total) * 100);
  window.markGameDone(currentGameIdx, pct, correct, total);
  ...
}
```
- Hitung skor → panggil `markGameDone` di `main.js` (simpan + kirim ke Sheets)
- Latihan 1 & 2: skor disembunyikan, arahkan ke modul berikutnya
- Latihan 3: tampilkan skor + rekap semua + tombol "Lihat Nilai"

#### Jenis soal & cara kerja:

| Jenis | `currentTab` | Cara jawab | Cek benar |
|---|---|---|---|
| Pilihan Ganda | `pilihan` | Klik A/B/C/D | Banding indeks |
| Drag & Drop | `dragdrop` | Klik kata dari bank | Cek di array jawaban |
| Susun Kode | `urutan` (non-isian) | Klik baris sesuai urutan | Banding urutan array |
| Ketik Kode | `urutan` (isian) | Ketik perintah Python | Banding teks (spasi diabaikan) |

---

### 3e. `js/quiz-data.js` — Bank Soal

**Konsep:** Ini "buku soal". Semua pertanyaan & jawaban ada di sini.

```js
window.QUIZ_DATA = {
  pilihan: [ {q:"Apa itu algoritma?", o:["...","...","..."], a:0}, ... ],
  dragdrop: [ {q:"...", code:'......("Halo")', pilihan:["print",...], jawaban:[0]}, ... ],
  urutan: [ {judul:"...", baris:['5','+','print(','3',')'], jawaban:[2,0,1,3,4]}, ... ]
};
```

**Struktur tiap jenis:**

**Pilihan Ganda:**
```js
{
  q: "Pertanyaan",          // soal
  o: ["jawaban A", "B", "C", "D"],   // opsi
  a: 0                      // indeks jawaban benar (0=A, 1=B, ...)
}
```

**Drag & Drop:**
```js
{
  q: "Perintah untuk...",
  code: '......("Halo")',    // kode dengan ...... = titik kosong
  pilihan: ["print","cetak",...],   // bank kata
  jawaban: [0]               // indeks kata benar di array pilihan
}
```

**Susun Kode (urutan):**
```js
{
  judul: "Susun: print(5+3)",
  baris: ['5','+','print(','3',')'],   // potongan kode (acak saat tampil)
  jawaban: [2,0,1,3,4]                 // urutan indeks yang benar
}
```
- Baca: ambil baris indeks 2 dulu (`print(`), lalu 0 (`5`), lalu 1 (`+`), dst.
- Hasil benar: `print(5+3)`

**Isian (ketik):**
```js
{
  type: 'isian',
  q: "Ketik perintah Python untuk menampilkan...",
  answers: ['print("Aku suka makan sayur")', "print('Aku suka makan sayur')"],
  catatan: "Gunakan print() dengan teks di dalam tanda kutip."
}
```
- `answers` = semua jawaban yang diterima (bisa beberapa variasi)

**Mau tambah soal?** Tambahkan objek baru di array yang sesuai. Format sama persis.

---

### 3f. `js/icons.js` — Gambar Hewan

**Konsep:** Library gambar SVG hewan lucu. Tidak perlu file gambar terpisah.

**Cara pakai:**
```html
<span data-animal="rabbit" data-size="24"></span>
```
- `data-animal="rabbit"` → pilih hewan
- `data-size="24"` → ukuran 24px

**Hewan tersedia:** snake, rabbit, owl, panda, fox, cat, bear, turtle

**Aktivasi:** Setiap kali ada elemen baru ditambahkan ke halaman, panggil:
```js
if (window.applyAnimals) window.applyAnimals();
```
- Fungsi ini cari semua `[data-animal]` → ganti dengan SVG hewan

---

## 4. 🔧 Tugas Umum (Saya Mau Ubang Apa?)

### "Mau ubah isi materi modul"
→ Edit `js/main.js` di bagian `var MODULES = [...]` (baris 19-69). Teks bisa pakai HTML.

### "Mau tambah/ubah soal latihan"
→ Edit `js/quiz-data.js`. Tambah objek di array `pilihan`/`dragdrop`/`urutan`.

### "Mau ubah warna tombol/background"
→ Edit `css/style.css` bagian `:root` (baris 1-20). Ubah nilai `--primary`, `--accent`, dll.

### "Mau ubah password reset"
→ Edit `js/main.js` baris ~665: `var RESET_PASSWORD = 'reset123';`

### "Mau ubah URL Google Sheets"
→ Edit `js/main.js` baris 10: `var SHEET_URL = '...'`

### "Mau ubah jumlah soal per latihan"
→ Edit `js/quiz.js` baris 3: `var POOL_SIZE = 10;` (default 10 soal)

### "Mau deploy perubahan ke website"
```powershell
vercel --prod --yes
```
- Pastikan versi cache `?v=X` di `index.html` dinaikkan dulu

---

## 5. 📤 Integrasi Google Sheets (Kirim Nilai Otomatis)

### Cara kerja:
1. Siswa selesai 1 latihan → `main.js` panggil `submitScoresToSheet()`
2. Data (nama + 3 nilai + rata-rata) dikirim POST ke Google Apps Script
3. Apps Script tulis/update baris di spreadsheet

### Yang dikirim:
| Field | Isi |
|---|---|
| `nama` | Nama panggilan siswa |
| `l1` | Skor Latihan 1 (0-100) atau kosong |
| `l2` | Skor Latihan 2 (0-100) atau kosong |
| `l3` | Skor Latihan 3 (0-100) atau kosong |
| `rata` | Rata-rata skor |
| `selesai` | "x/3" (jumlah latihan selesai) |
| `waktu` | Tanggal & jam kirim |

### Setup (sudah dilakukan):
1. Spreadsheet: `docs.google.com/spreadsheets/d/1uXHQQrZOVBYu...`
2. Apps Script `doPost` terima data → tulis ke baris (update bila nama sama)
3. Web App URL: `https://script.google.com/macros/s/AKfyc.../exec`
4. **Akses: "Anyone"** (bukan "Anyone with Google account") — penting!

### Troubleshooting data tidak masuk:
1. Cek DevTools (F12) → Console → harus ada `[Pylearn] kirim nilai ke sheet:`
2. Cek Network → harus ada POST ke `script.google.com`
3. Cek Apps Script deploy: **Who has access = "Anyone"**
4. Hard refresh browser (Ctrl+F5) supaya JS versi baru termuat

---

## 6. 🚀 Deploy ke Vercel

```powershell
vercel --prod --yes
```
- Otomatis upload semua file ke Vercel
- Live di `belajarpython.online` dalam ~10 detik
- Setelah deploy, cek versi cache `?v=X` di `index.html` sudah dinaikkan

---

## 7. 📝 Glosarium Singkat

| Istilah | Arti (untuk awam) |
|---|---|
| **HTML** | Bahasa struktur halaman (dinding rumah) |
| **CSS** | Bahasa tampilan (cat & dekorasi rumah) |
| **JavaScript (JS)** | Bahasa perilaku (listrik & peralatan rumah) |
| **localStorage** | Penyimpanan kecil di browser siswa (seperti laci) |
| **fetch** | Mengirim data ke server (seperti kirim surat) |
| **Apps Script** | Program kecil di Google yang terima data |
| **Web App** | Apps Script yang punya URL publik untuk terima data |
| **Deploy** | Mengunggah kode ke server supaya live di internet |
| **Cache** | Salinan sementara di browser (kadang bikin perubahan tidak kelihatan) |
| `data-xxx` | Atribut HTML custom (seperti label tempel di elemen) |
| `class` | Pengelompokan elemen untuk styling/behavior |
| `var` | Membuat variabel (kotak penyimpanan nilai) |
| `function` | Blok kode yang bisa dipanggil berulang |

---

## 8. 💡 Tips Penting

1. **Selalu naikkan `?v=X`** di `index.html` setelah ubah JS/CSS, lalu deploy. Lupa = perubahan tidak terlihat.
2. **Backup sebelum ubah besar.** Copy file ke folder lain dulu.
3. **Tes di browser siswa** (Chrome HP) setelah deploy — kadang tampilan beda di mobile.
4. **Jangan ubah `SHEET_URL`** sembarangan — itu alamat Google Sheets kamu.
5. **Password reset (`reset123`)** — jangan kasih tahu siswa, cuma untuk guru.
6. **Cek Console (F12)** kalau ada yang aneh — error merah = petunjuk masalah.

---

*Dokumen ini dibuat untuk membantu siapapun memahami Pylearn tanpa latar belakang programming. Kalau bingung bagian tertentu, tanya: "Bagian X di belajar.md maksudnya apa?"*
