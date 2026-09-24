# Diagram Use Case — Pylearn

Website belajar Python interaktif untuk siswa kelas 8.
Dokumen ini menggambarkan fungsionalitas sistem berdasarkan aktor yang berinteraksi dengan aplikasi.

---

## Aktor

| Aktor | Deskripsi |
|---|---|
| **Siswa** | Pengguna utama yang belajar materi & mengerjakan latihan |
| **Admin/Guru** | Pengelola data nilai siswa via `admin.html` |
| **Sistem** | Penyimpanan nilai terpusat (Supabase / Google Sheets) + localStorage browser |

---

## Diagram Use Case

```
                    ┌─────────────────────────────────────────────────────┐
                                    SISTEM PYLEARN
                    │                                                                     │
   ┌──────────┐    │   ┌─────────────────┐                                                 │
   │          │────┼──▶│  Lihat Landing  │                                                 │
   │          │    │   │     Page        │                                                 │
   │          │    │   └─────────────────┘                                                 │
   │          │    │   ┌─────────────────┐    <<include>>                                  │
   │          │────┼──▶│  Input Nama     │──────────────▶ Simpan ke localStorage          │
   │          │    │   │  (Onboarding)   │                                                 │
   │          │    │   └─────────────────┘                                                 │
   │          │    │   ┌─────────────────┐                                                 │
   │          │────┼──▶│  Lihat Beranda  │────<<extend>>───▶ Lihat Fakta Seru              │
   │          │    │   │                 │────<<extend>>───▶ Lihat Lencana/Badge           │
   │          │    │   └─────────────────┘                                                 │
   │          │    │   ┌─────────────────┐    <<include>>                                  │
   │          │────┼──▶│ Pelajari Modul  │──────────────▶ Kerjakan Kuis Modul              │
   │  SISWA   │    │   │ (1, 2, atau 3)  │                                                 │
   │          │    │   │                 │────<<include>>── Tandai Modul Selesai           │
   │          │    │   └─────────────────┘                                                 │
   │          │    │          │ <<extend>> (unlock bertahap)                                │
   │          │    │          ▼                                                             │
   │          │    │   ┌─────────────────┐                                                 │
   │          │────┼──▶│ Kerjakan Latihan│                                                 │
   │          │    │   │ • Pilihan Ganda │                                                 │
   │          │    │   │ • Drag & Drop   │────<<include>>── Hitung Skor                     │
   │          │    │   │ • Susun & Ketik │                                                 │
   │          │    │   └─────────────────┘                                                 │
   │          │    │          │                                                            │
   │          │    │          └────<<include>>──▶ Kirim Nilai ke Supabase/Sheets            │
   │          │    │   ┌─────────────────┐                                                 │
   │          │────┼──▶│ Lihat Nilai &   │                                                 │
   │          │    │   │ Kemajuan        │                                                 │
   │          │    │   └─────────────────┘                                                 │
   │          │    │   ┌─────────────────┐    <<include>>                                  │
   │          │────┼──▶│  Ganti Nama     │                                                 │
   │          │    │   └─────────────────┘                                                 │
   │          │    │   ┌─────────────────┐    <<include>>                                  │
   │          │────┼──▶│  Reset Data     │──────────────▶ Verifikasi Password Reset        │
   │          │    │   └─────────────────┘                                                 │
                    │                                                                     │
                    │─────────────────────────────────────────────────────────────────────│
                    │                                                                     │
   ┌──────────┐    │   ┌─────────────────┐    <<include>>                                  │
   │          │────┼──▶│  Login Admin    │──────────────▶ Verifikasi Password Admin        │
   │  ADMIN / │    │   └─────────────────┘                                                 │
   │  GURU    │    │   ┌─────────────────┐                                                 │
   │          │────┼──▶│ Lihat Dashboard │────<<extend>>───▶ Statistik Kelas               │
   │          │    │   │    Nilai        │                                                 │
   │          │    │   └─────────────────┘                                                 │
   │          │    │   ┌─────────────────┐                                                 │
   │          │────┼──▶│  Cari Siswa     │                                                 │
   │          │    │   └─────────────────┘                                                 │
   │          │────┼──▶│  Export CSV     │                                                 │
   │          │    │   └─────────────────┘                                                 │
   │          │    │   ┌─────────────────┐    <<include>>                                  │
   │          │────┼──▶│  Hapus Nilai    │──────────────▶ Konfirmasi Hapus                 │
   │          │    │   │  (1 siswa /     │                                                 │
   │          │    │   │   semua)        │                                                 │
   │          │    │   └─────────────────┘                                                 │
   │          │    │   ┌─────────────────┐                                                 │
   │          │────┼──▶│  Refresh Data   │                                                 │
   │          │    │   └─────────────────┘                                                 │
   │          │    │   ┌─────────────────┐                                                 │
   │          │────┼──▶│  Logout         │                                                 │
                    │   └─────────────────┘                                                 │
                    └─────────────────────────────────────────────────────┘
```

---

## Ringkasan Use Case per Aktor

### Siswa

| # | Use Case | Keterangan |
|---|---|---|
| 1 | Lihat Landing Page | Halaman selamat datang + 3 kartu nilai Python |
| 2 | Input Nama (Onboarding) | Isi nama panggilan, disimpan di localStorage |
| 3 | Lihat Beranda | Sapaan, progres, menu navigasi |
| 4 | Lihat Fakta Seru | Fakta Python yang berganti tiap hari |
| 5 | Lihat Lencana/Badge | 4 badge achievement (Langkah Pertama, Kutu Buku, Rajin Latihan, Juara Python) |
| 6 | Pelajari Modul | 3 modul: Pengenalan Python, Menulis Program, Operasi Matematika |
| 7 | Kerjakan Kuis Modul | Kuis singkat 1 soal di tengah modul |
| 8 | Tandai Modul Selesai | Buka latihan terkait secara bertahap |
| 9 | Kerjakan Latihan — Pilihan Ganda | Buka setelah Modul 1 selesai |
| 10 | Kerjakan Latihan — Drag & Drop | Buka setelah Modul 2 selesai |
| 11 | Kerjakan Latihan — Susun & Ketik Kode | Buka setelah Modul 3 selesai |
| 12 | Hitung Skor | Sistem menghitung skor otomatis (0-100) |
| 13 | Lihat Nilai & Kemajuan | Buka setelah Latihan 3 selesai; nilai huruf A/B/C/D/E |
| 14 | Ganti Nama | Ubah nama panggilan |
| 15 | Reset Data | Hapus semua data lokal (perlu password reset) |

### Admin/Guru

| # | Use Case | Keterangan |
|---|---|---|
| 1 | Login Admin | Masukkan password admin (`admin123`) |
| 2 | Lihat Dashboard Nilai | Tabel rekap nilai semua siswa |
| 3 | Lihat Statistik Kelas | Total siswa, selesai 3/3, rata-rata kelas, nilai tertinggi |
| 4 | Cari Siswa | Filter berdasarkan nama |
| 5 | Export CSV | Download data nilai ke file CSV |
| 6 | Hapus Nilai per Siswa | Hapus 1 baris nilai siswa |
| 7 | Hapus Semua Nilai | Hapus seluruh data nilai |
| 8 | Refresh Data | Muat ulang data dari Supabase |
| 9 | Logout | Keluar dari dashboard admin |

### Sistem

| # | Use Case | Keterangan |
|---|---|---|
| 1 | Simpan Progress | localStorage browser siswa |
| 2 | Unlock Latihan Bertahap | Latihan terbuka setelah modul terkait selesai |
| 3 | Kirim Nilai ke Supabase/Sheets | Otomatis saat siswa selesai latihan |
| 4 | Verifikasi Password | Password reset (`reset123`) & admin (`admin123`) |

---

## Relasi Penting

### `<<include>>` (wajib dipanggil)
- Input Nama → Simpan ke localStorage
- Pelajari Modul → Kerjakan Kuis Modul
- Pelajari Modul → Tandai Modul Selesai
- Kerjakan Latihan → Hitung Skor
- Kerjakan Latihan → Kirim Nilai ke Supabase/Sheets
- Reset Data → Verifikasi Password Reset
- Login Admin → Verifikasi Password Admin
- Hapus Nilai → Konfirmasi Hapus

### `<<extend>>` (opsional)
- Lihat Beranda → Lihat Fakta Seru
- Lihat Beranda → Lihat Lencana/Badge
- Pelajari Modul → Kerjakan Latihan (unlock bertahap)
- Lihat Dashboard Nilai → Statistik Kelas

---

## Aturan Unlock Bertahap

```
Modul 1 selesai ──▶ Latihan 1 (Pilihan Ganda) terbuka
Modul 2 selesai ──▶ Latihan 2 (Drag & Drop) terbuka
Modul 3 selesai ──▶ Latihan 3 (Susun & Ketik) terbuka
Latihan 3 selesai ──▶ Menu Nilai terbuka
```

### Alur Anti-Stres
- Selesai Latihan 1 → arahkan ke Modul 2 (skor disembunyikan)
- Selesai Latihan 2 → arahkan ke Modul 3 (skor disembunyikan)
- Selesai Latihan 3 → tampilkan skor + rekap semua + buka menu Nilai

---

## Alur Lengkap Pengalaman Siswa

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
                                               Supabase / Sheets
                                               (otomatis)
```

---

*Diagram ini dibuat berdasarkan analisis `index.html`, `admin.html`, dan `belajar.md`.*
