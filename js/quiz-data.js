window.QUIZ_DATA = {
  pilihan: [
    {q:"Apa yang dimaksud dengan algoritma?", o:["Langkah-langkah yang disusun secara urut untuk menyelesaikan suatu masalah.","Bahasa yang digunakan komputer.","Aplikasi untuk membuat game.","Gambar yang digunakan dalam pemrograman."], a:0},
    {q:"Mengapa saat membuat program kita perlu membuat algoritma terlebih dahulu?", o:["Agar komputer menjadi lebih cepat.","Agar kita mengetahui langkah-langkah program yang akan dibuat.","Agar program memiliki banyak warna.","Agar ukuran file menjadi lebih kecil."], a:1},
    {q:"Mengapa kita tidak bisa langsung menggunakan bahasa Indonesia saat memberikan perintah kepada komputer?", o:["Karena komputer hanya memahami bahasa pemrograman.","Karena komputer hanya memahami bahasa Inggris.","Karena komputer tidak bisa membaca tulisan.","Karena komputer hanya bisa membaca angka."], a:0},
    {q:"Apa yang dimaksud dengan bahasa pemrograman?", o:["Bahasa khusus yang digunakan untuk memberikan perintah kepada komputer.","Bahasa yang digunakan untuk berbicara dengan teman.","Bahasa yang digunakan saat bermain game.","Bahasa yang hanya digunakan di internet."], a:0},
    {q:"Manakah yang termasuk salah satu bahasa pemrograman?", o:["Bahasa Indonesia","Bahasa Jepang","Python","Bahasa Sunda"], a:2},
    {q:"Siapa yang membuat bahasa pemrograman Python?", o:["Bill Gates","Guido van Rossum","Elon Musk","Steve Jobs"], a:1},
    {q:"Bahasa Python pertama kali diperkenalkan pada tahun....", o:["1985","1991","2005","2015"], a:1},
    {q:"Nama Python berasal dari....", o:["Nama seekor ular.","Nama acara komedi favorit pembuatnya.","Nama sebuah kota.","Nama perusahaan komputer."], a:1},
    {q:"Mengapa banyak orang memilih belajar Python?", o:["Karena penulisannya sederhana dan mudah dipelajari.","Karena hanya bisa digunakan untuk membuat game.","Karena hanya digunakan oleh ilmuwan.","Karena hanya bisa dijalankan di laptop tertentu."], a:0},
    {q:"Python dapat digunakan untuk membuat hal-hal berikut, kecuali....", o:["Website","Game","Robot","Makanan"], a:3}
  ],

  dragdrop: [
    {q:'Perintah untuk menampilkan tulisan "Halo" di layar.', code:'......("Halo")', pilihan:["print","tampil","cetak","tulis"], jawaban:[0], catatan:"print adalah perintah untuk menampilkan teks di layar."},
    {q:'Perintah untuk menampilkan angka 2026 di layar.', code:'print(......)', pilihan:['"2026"',"2026",'dua ribu dua puluh enam','"dua ribu"'], jawaban:[0,1], catatan:'Angka bisa ditulis tanpa kutip (2026) atau dengan kutip ("2026"). Keduanya benar!'},
    {q:'Perintah untuk menampilkan kalimat "Aku suka Python" di layar.', code:'print(......)', pilihan:['Aku suka Python','"Aku suka Python"',"'Aku suka Python'",'Aku_suka_Python'], jawaban:[1,2], catatan:'Teks harus diapit tanda kutip tunggal atau ganda. "Aku suka Python" dan \'Aku suka Python\' sama-sama benar!'},
    {q:'Kode agar menampilkan "Selamat" di baris pertama dan "Pagi" di baris kedua.', code:'print("Selamat")\n......("Pagi")', pilihan:["print","tampilkan","cetak","tulis"], jawaban:[0], catatan:"Setiap baris perintah print akan menampilkan di baris baru."},
    {q:'Kode untuk menampilkan hasil penjumlahan 5 + 3.', code:'print(5 ...... 3)', pilihan:["+","-","*","="], jawaban:[0], catatan:"Tanda + untuk penjumlahan."},
    {q:'Kode untuk menampilkan hasil pengurangan 20 - 7.', code:'print(20 ...... 7)', pilihan:["+","-","*","="], jawaban:[1], catatan:"Tanda - untuk pengurangan."},
    {q:'Kode agar menampilkan teks "5 + 3".', code:'print("......")', pilihan:["5 + 3","8","5","53"], jawaban:[0], catatan:"Karena di dalam tanda kutip, teks ditampilkan apa adanya, bukan dihitung."},
    {q:'Perintah untuk menampilkan dua kata "Belajar" dan "Python" sekaligus.', code:'print("Belajar", ......)', pilihan:['"Python"',"Python","'Python'","python"], jawaban:[0,2], catatan:'Teks harus diapit tanda kutip. "Python" dan \'Python\' sama-sama benar!'},
    {q:'Kode untuk menampilkan teks "100-30".', code:'print("......")', pilihan:["100","30","100-30","130"], jawaban:[2], catatan:"Karena di dalam tanda kutip, teks ditampilkan apa adanya, bukan dihitung."},
    {q:'Kode agar menampilkan angka 15.', code:'print(......)', pilihan:["15",'"15"',"lima belas",'"lima belas"'], jawaban:[0], catatan:"Untuk menampilkan angka (bukan teks), tulis tanpa tanda kutip."}
  ],

  urutan: [
    {
      judul:"Susun: print(5+3)",
      soal:'print(5+3)',
      baris:['5','+','print(','3',')'],
      jawaban:[2,0,1,3,4],
      catatan:"print(5+3) akan menampilkan hasil 8."
    },
    {
      judul:"Susun: print(20-7)",
      soal:'print(20-7)',
      baris:['20','print(','-','7',')'],
      jawaban:[1,0,2,3,4],
      catatan:"print(20-7) akan menampilkan hasil 13."
    },
    {
      judul:"Susun: print(6*4)",
      soal:'print(6*4)',
      baris:['6','print(','*','4',')'],
      jawaban:[1,0,2,3,4],
      catatan:"print(6*4) akan menampilkan hasil 24."
    },
    {
      judul:"Susun: print(15/3)",
      soal:'print(15/3)',
      baris:['/','15','3','print(',')'],
      jawaban:[3,1,0,2,4],
      catatan:"print(15/3) akan menampilkan hasil 5.0."
    },
    {
      judul:"Susun: print(2+8*3)",
      soal:'print(2+8*3)',
      baris:['2','+','print(','*','8','3',')'],
      jawaban:[2,0,1,4,3,5,6],
      catatan:"print(2+8*3) — perkalian dikerjakan dulu: 8*3=24, lalu 2+24=26."
    },
    {
      judul:"Susun: print(100-30)",
      soal:'print(100-30)',
      baris:['100','-','30','print(',')'],
      jawaban:[3,0,1,2,4],
      catatan:"print(100-30) akan menampilkan hasil 70."
    },
    {
      judul:"Susun Teks & Kurung",
      soal:'print("aku anak sehat")\nprint("dan rajin belajar")',
      baris:['print(','"aku anak sehat"',')','print(','"dan rajin belajar"',')'],
      jawaban:[0,1,2,3,4,5],
      catatan:"Setiap perintah print diakhiri tanda kurung tutup )."
    },
    {
      type:'isian',
      q:'Ketiklah perintah Python untuk menampilkan kalimat "Aku suka makan sayur"',
      answers:['print("Aku suka makan sayur")',"print('Aku suka makan sayur')"],
      catatan:'Gunakan print() dengan teks di dalam tanda kutip.'
    },
    {
      type:'isian',
      q:'Ketiklah perintah Python untuk menampilkan angka 9',
      answers:['print(9)'],
      catatan:'Angka tidak perlu tanda kutip, langsung tulis di dalam print().'
    },
    {
      type:'isian',
      q:'Ketiklah perintah Python untuk menampilkan teks "10+11"',
      answers:['print("10+11")',"print('10+11')"],
      catatan:'Karena ingin menampilkan teks (bukan hasil perhitungan), gunakan tanda kutip.'
    }
  ]
};
