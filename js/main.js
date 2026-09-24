(function () {
  var screens = document.querySelectorAll('.screen');
  var appshell = document.querySelector('[data-appshell]');

  var NAME_KEY = 'pylearn_username';
  var PROG_KEY = 'pylearn_progress';

  // ===== SUPABASE CONFIG =====
  // Isi dengan URL & anon key dari Supabase (Settings → API)
  var SUPABASE_URL = 'https://hzedpsbwjnrxkzeaijkl.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_BausTTPoMcyf-U3JGNOigg_sfZhRpqv';
  var SUPABASE_ENABLED = SUPABASE_URL && SUPABASE_KEY;

  var nameInput = document.getElementById('name-input');
  var nameForm = document.getElementById('name-form');
  var userNameEl = document.getElementById('user-name');
  var userAvatarEl = document.getElementById('user-avatar');
  var changeNameBtn = document.getElementById('change-name-btn');

  // ===== DATA MODUL (berdasarkan MATERI MODUL.pdf) =====
  var MODULES = [
    {
      t: 'Pengenalan Python',
      s: 'Mengingat algoritma & kenalan dengan Python',
      quiz: {
        q: 'Sebelum kita mulai belajar Python, kalian masih ingat materi algoritma yang pernah dipelajari waktu kelas 7? Apa itu algoritma?',
        options: [
          { t: 'Langkah-langkah yang disusun secara berurutan untuk menyelesaikan suatu masalah.', ok: true },
          { t: 'Kumpulan gambar yang digunakan untuk membuat aplikasi.', ok: false },
          { t: 'Sebuah platform untuk bermain game.', ok: false }
        ],
        okMsg: 'BENAR SEKALI! HEBAT!! Ternyata kamu masih ingat materi yang pernah dipelajari. Yuk, kita lanjut!',
        noMsg: 'Waahhh... sepertinya kamu sudah agak lupa yaa. Tapi tenang aja, kita ingat-ingat lagi supaya nanti belajar Python jadi lebih gampang.'
      },
      bodyBefore: '<h3>Ingat Algoritma?</h3><p>Sebelum kita mulai belajar Python, kalian masih ingat materi algoritma yang pernah dipelajari waktu kelas 7? Yuk, kita coba ingat-ingat dulu dengan menjawab pertanyaan di bawah ini!</p>',
      bodyAfter: '<h3>Apa itu Algoritma?</h3><p>Jadi, algoritma itu langkah-langkah yang disusun secara urut untuk menyelesaikan suatu masalah atau mencapai suatu tujuan.</p><div class="modul-illu modul-illu--flow"><div class="flow-step"><div class="flow-step__ico">🔥</div><span class="flow-step__t">Rebus Air</span></div><span class="flow-arrow">→</span><div class="flow-step"><div class="flow-step__ico">🍜</div><span class="flow-step__t">Masukkan Mi</span></div><span class="flow-arrow">→</span><div class="flow-step"><div class="flow-step__ico">⏰</div><span class="flow-step__t">Tunggu Matang</span></div><span class="flow-arrow">→</span><div class="flow-step"><div class="flow-step__ico">🧂</div><span class="flow-step__t">Tambah Bumbu</span></div><span class="flow-arrow flow-arrow--down">↓</span><div class="flow-result"><div class="flow-result__ico">🍲</div><span class="flow-result__t">Mi Instan Siap!</span></div></div><p>Misalnya, saat membuat mi instan, kita harus mengikuti urutannya: rebus air, masukkan mi, tunggu matang, lalu tambahkan bumbu. Kalau urutannya salah, hasilnya juga bisa jadi kurang enak.</p><div class="modul-illu modul-illu--comp"><div class="comp-screen"><div class="comp-screen__bar"><span class="comp-dot comp-dot--r"></span><span class="comp-dot comp-dot--y"></span><span class="comp-dot comp-dot--g"></span></div><div class="comp-screen__body"><span class="comp-cursor">▶</span><span class="comp-text">Menerima perintah...</span></div></div><div class="comp-base"></div><p class="modul-illu__cap">Komputer butuh perintah yang jelas & urut!</p></div><p>Nah, komputer juga sama! Komputer hanya bisa bekerja kalau kita memberikan langkah-langkah yang jelas dan urut. Langkah-langkah itulah yang disebut algoritma.</p><p>Tapi... komputer nggak bisa memahami bahasa manusia seperti bahasa Indonesia atau bahasa Inggris. Makanya, kita perlu menggunakan <strong>bahasa pemrograman</strong>, yaitu bahasa khusus yang digunakan untuk memberikan perintah kepada komputer. Salah satu bahasa pemrograman yang paling populer dan banyak dipakai di dunia adalah Python.</p><h3>Yuk Kenalan Sama Python!</h3><div class="guido-show" id="guido-show"><div class="guido-show__frame"><img class="guido-show__img is-active" src="guido1.jpg" alt="Guido van Rossum" /><img class="guido-show__img" src="guido2.jpg" alt="Guido van Rossum" /><img class="guido-show__img" src="guido3.jpg" alt="Guido van Rossum" /><img class="guido-show__img" src="guido4.jpg" alt="Guido van Rossum" /></div><div class="guido-show__dots"><span class="guido-show__dot is-active"></span><span class="guido-show__dot"></span><span class="guido-show__dot"></span><span class="guido-show__dot"></span></div><p class="guido-show__cap">Guido van Rossum — pembuat Python 🐍</p></div><p><strong>Siapa sih yang membuat Python?</strong></p><p>Bahasa Python pertama kali dibuat oleh seorang programmer asal Belanda yang bernama <strong>Guido van Rossum</strong>. Beliau mulai membuat Python pada tahun 1991. Awalnya, beliau ingin membuat bahasa pemrograman yang lebih gampang dipelajari dan mudah dibaca, supaya orang yang baru belajar coding tidak langsung bingung. Sampai sekarang Python dipakai oleh jutaan orang di seluruh dunia.</p><p><strong>Kok namanya Python? Emang ada hubungannya sama ular?</strong></p><p>Banyak yang mengira nama Python diambil dari nama ular. Eitss... ternyata bukan lho! Nama Python diambil dari acara komedi favorit Guido yang berjudul <em>Monty Python\'s Flying Circus</em>. Logo Python memang bergambar seperti ular, tapi sebenarnya nama Python bukan berasal dari ular yaa!</p><p><strong>Kenapa sih banyak orang pakai Python?</strong></p><ul><li>Cara nulisnya lebih sederhana.</li><li>Mudah dibaca.</li><li>Tidak banyak aturan yang bikin pusing.</li></ul><div class="modul-illu modul-illu--uses"><div class="use-card use-card--game"><div class="use-card__ico">🎮</div><span class="use-card__t">Game</span></div><div class="use-card use-card--web"><div class="use-card__ico">🌐</div><span class="use-card__t">Website</span></div><div class="use-card use-card--robot"><div class="use-card__ico">🤖</div><span class="use-card__t">Robot</span></div><div class="use-card use-card--data"><div class="use-card__ico">📊</div><span class="use-card__t">Data</span></div></div><p>Selain itu, Python juga dipakai untuk membuat banyak hal keren, lho! Misalnya: Game, Website, Robot, dan Mengolah data. Bahkan beberapa aplikasi yang sering kita gunakan juga dibuat menggunakan Python. Keren, kan?</p>'
    },
    {
      t: 'Menulis Program Python Pertamamu',
      s: 'Perintah print() & jenis data teks/angka',
      quiz: {
        q: 'Sekarang coba tebak! Apa hasil yang muncul dari kode print("5 + 3")?',
        options: [
          { t: '8', ok: false },
          { t: '5 + 3', ok: true },
          { t: '53', ok: false },
          { t: 'Error', ok: false }
        ],
        okMsg: 'BENAR SEKALI! Karena "5 + 3" ada di dalam tanda kutip, Python menganggapnya sebagai teks, bukan perhitungan. Jadi ditampilkan apa adanya. Yuk lanjut!',
        noMsg: 'Hampir benar! Ingat ya — kalau ada di dalam tanda kutip, Python menganggapnya sebagai teks, bukan perhitungan. Jadi ditampilkan apa adanya. Yuk lanjut!'
      },
      bodyBefore: '<h3>Perintah print()</h3><p>Nah, sekarang kita masuk ke perintah pertama yang biasanya dipelajari semua orang saat belajar Python, yaitu <code>print()</code>.</p><p>Bayangkan komputer itu seperti teman yang pendiam. Sebenarnya dia tahu banyak hal, tapi dia tidak akan mengatakan apa pun kalau kita tidak menyuruhnya. Nah, <code>print()</code> itu seperti tombol pengeras suara.</p><div class="modul-illu modul-illu--print"><div class="print-demo"><div class="print-demo__code"><span class="print-demo__fn">print</span>(<span class="print-demo__str">"Halo"</span>)</div><div class="print-demo__arrow">↓</div><div class="print-demo__screen"><div class="print-demo__screen-bar"><span class="comp-dot comp-dot--r"></span><span class="comp-dot comp-dot--y"></span><span class="comp-dot comp-dot--g"></span></div><div class="print-demo__screen-body"><span class="print-demo__output">Halo</span></div></div></div><p class="modul-illu__cap">print() menampilkan teks ke layar!</p></div><p>Kalau kita menulis:</p><pre class="code-block">print("Halo")</pre><p>Artinya kita sedang berkata ke komputer: <em>"Hei komputer, tolong tampilkan tulisan \'Halo\' di layar, ya!"</em></p><p>Lalu komputer akan menjawab dengan menampilkan:</p><pre class="code-block">Halo</pre><p>Jadi, fungsi <code>print()</code> adalah menampilkan tulisan, angka, atau hasil perhitungan ke layar.</p><p>Lalu kalau kita menulis:</p><pre class="code-block">print("Hari ini")\nprint("Senin")</pre><p>Komputer akan menampilkan:</p><pre class="code-block">Hari ini\nSenin</pre><p>Karena setiap <code>print()</code> akan berpindah ke baris berikutnya.</p><h3>Dua Jenis Data Dasar di Python</h3><p>Di Python, ada dua jenis data yang paling sering kita gunakan, yaitu teks dan angka. Yuk kita lihat bedanya!</p><div class="modul-illu modul-illu--datatype"><div class="dt-card dt-card--text"><div class="dt-card__ico">📝</div><h4>Teks (String)</h4><p class="dt-card__ex">"Halo"</p><p class="dt-card__note">Pakai tanda kutip</p></div><div class="dt-card dt-card--num"><div class="dt-card__ico">🔢</div><h4>Angka (Integer)</h4><p class="dt-card__ex">100</p><p class="dt-card__note">Tanpa tanda kutip</p></div></div><p><strong>1. Teks (String)</strong></p><p>Teks atau string adalah semua huruf, kata, atau kalimat. Kalau ingin menampilkan teks, harus memakai tanda kutip.</p><pre class="code-block">print("Halo")</pre><p>atau</p><pre class="code-block">print(\'Halo\')</pre><p>Dua-duanya benar.</p><p><strong>2. Angka (Integer)</strong></p><p>Kalau yang ditampilkan adalah angka, tidak perlu memakai tanda kutip.</p><pre class="code-block">print(100)</pre><p>Hasilnya:</p><pre class="code-block">100</pre>',
      bodyAfter: '<h3>Perbandingan Teks vs Angka</h3><div class="modul-illu modul-illu--compare"><div class="cmp-card cmp-card--text"><div class="cmp-card__label">Teks</div><pre class="cmp-card__code">print("5 + 3")</pre><div class="cmp-card__result">5 + 3</div><p class="cmp-card__note">Tampil apa adanya</p></div><div class="cmp-card cmp-card--num"><div class="cmp-card__label">Angka</div><pre class="cmp-card__code">print(5 + 3)</pre><div class="cmp-card__result">8</div><p class="cmp-card__note">Dihitung jadi 8!</p></div></div><p><strong>Contoh pertama:</strong></p><pre class="code-block">print("5 + 3")</pre><p>Hasilnya:</p><pre class="code-block">5 + 3</pre><p><em>Kenapa bukan 8?</em> Karena angka tersebut berada di dalam tanda kutip, sehingga Python menganggapnya sebagai teks, bukan perhitungan.</p><p><strong>Contoh kedua:</strong></p><pre class="code-block">print(5 + 3)</pre><p>Hasilnya:</p><pre class="code-block">8</pre><p>Nah, kali ini Python benar-benar menghitung 5 ditambah 3, sehingga hasilnya 8.</p>'
    },
    {
      t: 'Operasi Matematika Sederhana pada Python',
      s: 'Penjumlahan, pengurangan, perkalian, pembagian, perpangkatan',
      quiz: {
        q: 'Sekarang coba tebak! Apa hasil yang muncul dari kode print(4 * 2)?',
        options: [
          { t: '6', ok: false },
          { t: '8', ok: true },
          { t: '42', ok: false },
          { t: '4*2', ok: false }
        ],
        okMsg: 'BENAR SEKALI! Python menghitung 4 dikali 2 sama dengan 8. Karena tidak pakai tanda kutip, Python mengerjakan perhitungannya. Yuk lanjut pelajari semua operator!',
        noMsg: 'Hampir benar! Ingat ya — kalau angka tidak pakai tanda kutip, Python akan menghitung hasilnya. 4 dikali 2 sama dengan 8. Yuk lanjut pelajari semua operator!'
      },
      bodyBefore: '<h3>Python sebagai Kalkulator</h3><div class="modul-illu modul-illu--calc"><div class="calc"><div class="calc__screen"><span class="calc__txt">5 + 3 = 8</span></div><div class="calc__btns"><span class="calc__btn">7</span><span class="calc__btn">8</span><span class="calc__btn">9</span><span class="calc__btn calc__btn--op">÷</span><span class="calc__btn">4</span><span class="calc__btn">5</span><span class="calc__btn">6</span><span class="calc__btn calc__btn--op">×</span><span class="calc__btn">1</span><span class="calc__btn">2</span><span class="calc__btn">3</span><span class="calc__btn calc__btn--op">−</span><span class="calc__btn">0</span><span class="calc__btn calc__btn--op">+</span><span class="calc__btn calc__btn--eq">=</span></div></div><p class="modul-illu__cap">Python bisa jadi kalkulator pintar! 🧮</p></div><p>Ternyata Python bukan cuma jago menampilkan tulisan, lho! Python juga bisa jadi kalkulator pintar yang bisa menghitung penjumlahan, pengurangan, perkalian, pembagian, bahkan perpangkatan. Yuk, kita pelajari satu per satu!</p><div class="modul-illu modul-illu--ops"><div class="op-card op-card--plus"><div class="op-card__sym">+</div><span class="op-card__t">Penjumlahan</span><span class="op-card__ex">5 + 3 = 8</span></div><div class="op-card op-card--minus"><div class="op-card__sym">−</div><span class="op-card__t">Pengurangan</span><span class="op-card__ex">10 − 2 = 8</span></div><div class="op-card op-card--mul"><div class="op-card__sym">×</div><span class="op-card__t">Perkalian</span><span class="op-card__ex">4 × 2 = 8</span></div><div class="op-card op-card--div"><div class="op-card__sym">÷</div><span class="op-card__t">Pembagian</span><span class="op-card__ex">10 ÷ 2 = 5</span></div><div class="op-card op-card--pow"><div class="op-card__sym">**</div><span class="op-card__t">Perpangkatan</span><span class="op-card__ex">3² = 9</span></div></div>',
      bodyAfter: '<p><strong>Penjumlahan (+)</strong></p><p>Operator <code>+</code> digunakan untuk menjumlahkan dua angka.</p><div class="modul-illu modul-illu--mathflow"><div class="mathflow"><span class="mathflow__n">5</span><span class="mathflow__op mathflow__op--plus">+</span><span class="mathflow__n">3</span><span class="mathflow__eq">=</span><span class="mathflow__result">8</span></div></div><pre class="code-block">print(5 + 3)</pre><p>Hasilnya: <code>8</code></p><p><strong>Pengurangan (-)</strong></p><p>Operator <code>-</code> digunakan untuk mengurangi suatu angka dengan angka lainnya.</p><pre class="code-block">print(10 - 2)</pre><p>Hasilnya: <code>8</code></p><p><strong>Perkalian (*)</strong></p><p>Operator <code>*</code> digunakan untuk menghitung hasil kali dua bilangan.</p><pre class="code-block">print(4 * 2)</pre><p>Hasilnya: <code>8</code></p><p><strong>Pembagian (/)</strong></p><p>Operator <code>/</code> digunakan untuk membagi suatu angka dengan angka lainnya.</p><pre class="code-block">print(10 / 2)</pre><p>Hasilnya: <code>5</code> (atau <code>5.0</code>)</p><p><strong>Perpangkatan (**)</strong></p><p>Operator <code>**</code> digunakan untuk menghitung pangkat suatu bilangan.</p><pre class="code-block">print(3 ** 2)</pre><p>Hasilnya: <code>9</code> (3 pangkat 2)</p>'
    }
  ];

  // ===== PROGRESS STATE =====
  function defaultProgress() {
    return { modul: [false, false, false], games: [false, false, false], gameScores: [null, null, null], gameRaw: [null, null, null] };
  }
  function getProgress() {
    try {
      var p = JSON.parse(localStorage.getItem(PROG_KEY));
      if (!p || !Array.isArray(p.modul) || p.modul.length !== MODULES.length) return defaultProgress();
      if (!Array.isArray(p.games) || p.games.length !== 3) p.games = [false, false, false];
      if (!Array.isArray(p.gameScores) || p.gameScores.length !== 3) p.gameScores = [null, null, null];
      if (!Array.isArray(p.gameRaw) || p.gameRaw.length !== 3) p.gameRaw = [null, null, null];
      // migrasi latihanScore lama ke gameScores
      if (p.latihanScore !== undefined && p.latihanScore !== null) {
        for (var i = 0; i < 3; i++) { if (p.gameScores[i] === null && p.games[i]) p.gameScores[i] = p.latihanScore; }
        delete p.latihanScore;
      }
      return p;
    } catch (e) { return defaultProgress(); }
  }
  function saveProgress(p) {
    try { localStorage.setItem(PROG_KEY, JSON.stringify(p)); } catch (e) {}
  }

  function getName() {
    try { return localStorage.getItem(NAME_KEY) || ''; } catch (e) { return ''; }
  }
  function saveName(n) {
    try { localStorage.setItem(NAME_KEY, n); } catch (e) {}
  }

  function applyName() {
    var name = getName() || 'Siswa';
    if (userNameEl) userNameEl.textContent = name;
    if (userAvatarEl) userAvatarEl.textContent = name.charAt(0).toUpperCase();
  }

  function modulDoneCount(p) {
    return p.modul.filter(Boolean).length;
  }
  function allModulDone(p) {
    return p.modul.every(Boolean);
  }
  function gamesDoneCount(p) {
    return p.games.filter(Boolean).length;
  }
  function overallLatihanPct(p) {
    var sum = 0, n = 0;
    for (var i = 0; i < p.gameScores.length; i++) {
      if (p.gameScores[i] !== null) { sum += p.gameScores[i]; n++; }
    }
    return n > 0 ? Math.round(sum / n) : 0;
  }

  // ===== SHOW SCREEN =====
  function show(screen) {
    if (screen === 'landing' || screen === 'onboarding') {
      appshell.hidden = true;
      screens.forEach(function (s) {
        if (s.classList.contains('screen--landing') || s.classList.contains('screen--onboarding')) {
          s.classList.toggle('is-active', s.dataset.screen === screen);
        } else {
          s.classList.remove('is-active');
        }
      });
    } else {
      appshell.hidden = false;
      document.querySelector('.screen--landing').classList.remove('is-active');
      document.querySelector('.screen--onboarding').classList.remove('is-active');
      screens.forEach(function (s) {
        if (s.classList.contains('screen--landing') || s.classList.contains('screen--onboarding')) return;
        s.classList.toggle('is-active', s.dataset.screen === screen);
      });
      applyName();
      refreshState();
      if (screen === 'materi') renderMateri();
      if (screen === 'modul') renderModulDetail();
      if (screen === 'games') renderGames();
      if (screen === 'nilai') renderNilai();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.applyAnimals) window.applyAnimals();
  }

  // ===== DATA FUN FACTS / MOTIVASI / WELCOME =====
  var FUNFACTS = [
    'Python dinamai dari acara TV komedi "Monty Python", bukan dari ular!',
    'Python dibuat oleh Guido van Rossum tahun 1991, saat dia bosan liburan Natal.',
    'Kode Python dipakai NASA untuk menjelajahi planet Mars!',
    'Instagram, YouTube, dan Netflix dibuat dengan Python.',
    'Python adalah salah satu bahasa paling populer di dunia untuk game dan robotik.',
    'Di Python, kamu bisa menulis "import this" untuk melihat filosofi Python.',
    'Logo Python sebenarnya adalah dua ular melingkar — bukan satu!',
    'Python bisa dipakai bikin game, web, robot, sampai analisis data sepakbola.',
    'Banyak hacker top dunia memakai Python untuk kerja mereka.',
    'Kode "Hello World" di Python cuma 1 baris: print("Hello World!")'
  ];
  var MOTIVASI = [
    '"Belajar coding itu seperti main puzzle — asyik dan bikin nagih!"',
    '"Saat kode-mu berhasil jalan, rasanya kayak menang game!" 🎮',
    '"Tiap programmer hebat pernah jadi pemula. Jangan menyerah ya!" 💪',
    '"Salah itu wajar — bug justru bikin kita makin pinter!" 🐛',
    '"Python itu ramah sama pemula. Kamu pasti bisa!" 🐍',
    '"Hari ini belajar 1 baris, besok 2 baris. Lumayan!" ✨'
  ];
  function pickDaily(arr) {
    var day = Math.floor(Date.now() / 86400000);
    return arr[day % arr.length];
  }

  function refreshBadges() {
    var p = getProgress();
    var done = modulDoneCount(p);
    var states = [
      done >= 1,                           // Langkah Pertama
      done >= MODULES.length,              // Kutu Buku
      gamesDoneCount(p) >= 3,              // Rajin Latihan
      overallLatihanPct(p) >= 90           // Juara Python
    ];
    var badges = document.querySelectorAll('.badge');
    badges.forEach(function (b, i) {
      b.classList.toggle('is-locked', !states[i]);
    });
  }

  function refreshFunContent() {
    setEl('funfact-text', pickDaily(FUNFACTS));
    setEl('motivasi-text', pickDaily(MOTIVASI));
    var p = getProgress();
    var done = modulDoneCount(p);
    var msg;
    if (done === 0) msg = 'Halo ' + (getName() || 'Siswa') + '! Yuk mulai modul pertama! 🐍';
    else if (done < MODULES.length) msg = 'Kerja bagus ' + (getName() || '') + '! Lanjutkan modulmu! 🌟';
    else if (gamesDoneCount(p) < 3) msg = 'Materi selesai! Sekarang kerjakan latihan! 📝';
    else if (overallLatihanPct(p) < 90) msg = 'Hampir juara! Tinggal latihan terus ya! 🏆';
    else msg = 'Kamu juara Python! Bangga dengan dirimu! 🎉';
    setEl('welcome-msg', msg);
  }

  // ===== RENDER BERANDA STATE =====
  function refreshState() {
    var p = getProgress();
    var done = modulDoneCount(p);
    var pct = Math.round((done / MODULES.length) * 100);

    setEl('beranda-pct', pct + '%');
    setBar('beranda-bar', pct);
    setEl('beranda-info', done + ' dari ' + MODULES.length + ' Modul Selesai');
    setEl('materi-pct', pct + '%');
    setBar('materi-bar', pct);
    setEl('materi-info', done + ' dari ' + MODULES.length + ' Modul Selesai');
    setEl('tile-materi', done + '/' + MODULES.length + ' modul');

    // Lock tiles — Latihan terbuka jika minimal 1 modul selesai
    var anyModulDone = done >= 1;
    toggleLock('tile-games', !anyModulDone);
    var gamesSub = document.getElementById('tile-games-sub');
    if (gamesSub) gamesSub.textContent = anyModulDone ? (gamesDoneCount(p) + '/3 latihan') : 'Selesaikan modul dulu';

    // Lock tile Nilai — baru terbuka setelah Latihan 3 selesai (anti-stres)
    var latihan3Done = !!p.games[2];
    toggleLock('tile-nilai', !latihan3Done);
    var nilaiSub = document.getElementById('tile-nilai-sub');
    if (nilaiSub) nilaiSub.textContent = latihan3Done ? 'Lihat rekap nilai' : 'Selesaikan Latihan 3 dulu';

    // Flow CTA
    var cta = document.getElementById('flow-cta');
    if (cta) {
      if (done < MODULES.length) {
        cta.textContent = 'Lanjut Belajar Materi →';
        cta.setAttribute('data-go', 'materi');
      } else if (gamesDoneCount(p) < 3) {
        cta.textContent = 'Kerjakan Latihan →';
        cta.setAttribute('data-go', 'games');
      } else if (!latihan3Done) {
        cta.textContent = 'Selesaikan Latihan 3 →';
        cta.setAttribute('data-go', 'games');
      } else {
        cta.textContent = 'Lihat Nilai Kamu →';
        cta.setAttribute('data-go', 'nilai');
      }
    }

    refreshBadges();
    refreshFunContent();
  }

  function setEl(id, val) { var el = document.getElementById(id); if (el) el.textContent = val; }
  function setBar(id, pct) { var el = document.getElementById(id); if (el) el.style.width = pct + '%'; }
  function toggleLock(id, locked) {
    var el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle('is-locked', locked);
    if (locked) {
      el.setAttribute('data-locked', '1');
      el.removeAttribute('data-go');
    } else {
      el.removeAttribute('data-locked');
      el.setAttribute('data-go', id.replace('tile-', ''));
    }
  }

  // ===== RENDER MATERI (daftar modul) =====
  var currentModul = -1;
  var LETTERS = ['A', 'B', 'C', 'D'];
  function renderMateri() {
    var p = getProgress();
    var list = document.getElementById('module-list');
    var html = '';
    for (var i = 0; i < MODULES.length; i++) {
      var done = p.modul[i];
      var cls = done ? 'done' : 'active';
      html += '<li class="module ' + cls + '" data-modul="' + i + '">';
      html += '<div class="module__num">' + (i + 1) + '</div>';
      html += '<div class="module__body">';
      html += '<h3 class="module__t">' + MODULES[i].t + '</h3>';
      html += '<p class="module__s">' + MODULES[i].s + '</p>';
      var statusText = done ? 'Selesai · Latihan ' + (i + 1) + ' terbuka' : 'Pelajari';
      html += '<span class="module__status ' + (done ? 'status--done' : 'status--active') + '">' + statusText + '</span>';
      html += '</div>';
      html += '<div class="module__check ' + (done ? 'done' : 'next') + '" data-animal="' + (done ? 'turtle' : 'rabbit') + '" data-size="30"></div>';
      html += '</li>';
    }
    list.innerHTML = html;
    list.querySelectorAll('[data-modul]').forEach(function (li) {
      li.addEventListener('click', function () {
        currentModul = parseInt(li.getAttribute('data-modul'), 10);
        show('modul');
      });
    });
    if (window.applyAnimals) window.applyAnimals();
  }

  // ===== RENDER MODUL DETAIL (halaman terpisah, kuis di tengah) =====
  function renderModulDetail() {
    if (currentModul < 0) { show('materi'); return; }
    var p = getProgress();
    var m = MODULES[currentModul];
    var hasQuiz = !!m.quiz;

    // Appbar
    setEl('modul-appbar-title', m.t);
    var titleWrap = document.getElementById('modul-appbar-title');
    if (titleWrap) titleWrap.innerHTML = '<span data-animal="owl" data-size="24"></span> Modul ' + (currentModul + 1);
    setEl('modul-appbar-sub', m.s);

    // Body: konten sebelum kuis + kuis (inline di tengah) + konten setelah kuis
    var html = '';
    html += '<h2 class="modul-detail__title">Modul ' + (currentModul + 1) + ': ' + m.t + '</h2>';
    if (hasQuiz) {
      html += m.bodyBefore || '';
      html += renderQuizBlock(m);
      html += m.bodyAfter || '';
    } else {
      html += m.body || '';
    }
    if (p.modul[currentModul]) {
      html += '<div class="modul-done"><span class="modul-done__ico">✅</span><p>Modul ini sudah selesai! Latihan ' + (currentModul + 1) + ' sudah terbuka. Yuk kerjakan!</p></div>';
    }
    document.getElementById('modul-body').innerHTML = html;

    var completeBtn = document.getElementById('modul-complete');
    completeBtn.hidden = false;
    completeBtn.textContent = p.modul[currentModul] ? 'Sudah Selesai ✓' : 'Tandai Selesai & Buka Latihan ' + (currentModul + 1) + ' ✓';
    completeBtn.disabled = p.modul[currentModul];

    if (hasQuiz) wireQuiz(m);
    startGuidoShow();
    if (window.applyAnimals) window.applyAnimals();
  }

  // ===== SLIDESHOW FOTO GUIDO =====
  var guidoTimer = null;
  function startGuidoShow() {
    if (guidoTimer) { clearInterval(guidoTimer); guidoTimer = null; }
    var show = document.getElementById('guido-show');
    if (!show) return;
    var imgs = show.querySelectorAll('.guido-show__img');
    var dots = show.querySelectorAll('.guido-show__dot');
    if (imgs.length === 0) return;
    var idx = 0;
    guidoTimer = setInterval(function () {
      imgs[idx].classList.remove('is-active');
      if (dots[idx]) dots[idx].classList.remove('is-active');
      idx = (idx + 1) % imgs.length;
      imgs[idx].classList.add('is-active');
      if (dots[idx]) dots[idx].classList.add('is-active');
    }, 2500);
  }

  function renderQuizBlock(m) {
    var html = '<div class="modul-quiz">';
    html += '<div class="modul-quiz__label"><span data-animal="owl" data-size="20"></span> Yuk Jawab Dulu!</div>';
    html += '<p class="modul-quiz__q">' + m.quiz.q + '</p>';
    html += '<div class="modul-quiz__opts" id="modul-quiz-opts">';
    for (var k = 0; k < m.quiz.options.length; k++) {
      var opt = m.quiz.options[k];
      html += '<button class="modul-opt" data-idx="' + k + '" data-ok="' + (opt.ok ? '1' : '0') + '">';
      html += '<span class="modul-opt__letter">' + LETTERS[k] + '</span>';
      html += '<span class="modul-opt__t">' + opt.t + '</span>';
      html += '</button>';
    }
    html += '</div>';
    html += '<div class="modul-quiz__fb" id="modul-quiz-fb" hidden></div>';
    html += '</div>';
    return html;
  }

  function wireQuiz(m) {
    var optsWrap = document.getElementById('modul-quiz-opts');
    if (!optsWrap) return;
    optsWrap.querySelectorAll('.modul-opt').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var isOk = btn.getAttribute('data-ok') === '1';
        optsWrap.querySelectorAll('.modul-opt').forEach(function (b) { b.disabled = true; });
        btn.classList.add(isOk ? 'is-correct' : 'is-wrong');
        if (!isOk) {
          optsWrap.querySelectorAll('.modul-opt').forEach(function (b) {
            if (b.getAttribute('data-ok') === '1') b.classList.add('is-correct');
          });
        }
        var fb = document.getElementById('modul-quiz-fb');
        fb.hidden = false;
        fb.className = 'modul-quiz__fb ' + (isOk ? 'is-ok' : 'is-no');
        fb.innerHTML = '<div class="modul-quiz__fb-ico">' + (isOk ? '🎉' : '🤔') + '</div><p>' + (isOk ? m.quiz.okMsg : m.quiz.noMsg) + '</p>';
        fb.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });
  }

  // tombol back di halaman modul -> kembali ke daftar modul
  var modulBackBtn = document.getElementById('modul-back-btn');
  if (modulBackBtn) {
    modulBackBtn.addEventListener('click', function () {
      currentModul = -1;
      show('materi');
    });
  }

  document.getElementById('modul-complete').addEventListener('click', function () {
    if (currentModul < 0) return;
    var p = getProgress();
    if (p.modul[currentModul]) return;
    p.modul[currentModul] = true;
    saveProgress(p);
    var bodyEl = document.getElementById('modul-body');
    var succ = document.createElement('div');
    succ.className = 'modul-success';
    succ.innerHTML = '<div class="modul-success__card"><div class="modul-success__emoji">🎉</div><h3>Modul ' + (currentModul + 1) + ' Selesai!</h3><p>Hebat! Latihan ' + (currentModul + 1) + ' sudah terbuka. Yuk uji pemahamanmu!</p><button class="btn btn--primary btn--block" id="modul-go-latihan">Kerjakan Latihan ' + (currentModul + 1) + ' →</button><button class="btn btn--ghost btn--block" id="modul-back-list" style="margin-top:8px">Kembali ke Daftar Modul</button></div>';
    bodyEl.appendChild(succ);
    document.getElementById('modul-complete').hidden = true;
    var doneModulIdx = currentModul;
    document.getElementById('modul-go-latihan').addEventListener('click', function () {
      currentModul = -1;
      var pp = getProgress();
      if (pp.modul[doneModulIdx] && !pp.games[doneModulIdx]) {
        var g = doneModulIdx;
        var tab = GAME_TABS[g];
        var titleEl = document.getElementById('quiz-title');
        if (titleEl) titleEl.innerHTML = '<span data-animal="' + (['cat','owl','fox'][g]) + '" data-size="24"></span> ' + LATIHAN_LABELS[g];
        if (window.quizStart) window.quizStart(tab, g);
        show('quiz');
      } else {
        show('games');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.getElementById('modul-back-list').addEventListener('click', function () {
      currentModul = -1;
      show('materi');
    });
    refreshState();
  });

  // ===== RENDER GAMES & LATIHAN =====
  var GAME_TABS = ['pilihan', 'dragdrop', 'urutan'];
  function renderGames() {
    var p = getProgress();
    var locked = document.getElementById('games-locked');
    var content = document.getElementById('games-content');
    var done = modulDoneCount(p);
    if (done === 0) {
      locked.hidden = false;
      content.hidden = true;
      var lp = locked.querySelector('p');
      if (lp) lp.textContent = 'Selesaikan Modul 1 dulu untuk membuka Latihan pertama!';
    } else {
      locked.hidden = true;
      content.hidden = false;
      setEl('games-count', gamesDoneCount(p) + ' / 3');
      for (var i = 0; i < 3; i++) {
        var s = document.getElementById('g' + (i + 1) + '-status');
        var card = document.getElementById('game-card-' + (i + 1));
        var btn = document.querySelector('[data-game="' + (i + 1) + '"]');
        var unlocked = !!p.modul[i];
        if (s) {
          if (p.games[i]) { s.textContent = 'Selesai'; s.className = 'chip chip--ok'; }
          else if (!unlocked) { s.textContent = 'Buka dengan Modul ' + (i + 1); s.className = 'chip chip--locked'; }
          else { s.textContent = 'Belum dikerjakan'; s.className = 'chip'; }
        }
        if (card) {
          var isDone = !!p.games[i];
          card.classList.toggle('is-locked', !unlocked);
          card.classList.toggle('is-done', isDone);
        }
        if (btn) {
          if (!unlocked) { btn.disabled = true; btn.textContent = '🔒 Terkunci'; }
          else if (p.games[i]) { btn.disabled = true; btn.textContent = 'Selesai ✓'; }
          else { btn.disabled = false; btn.textContent = 'Kerjakan'; }
        }
      }
    }
    if (window.applyAnimals) window.applyAnimals();
  }

  var LATIHAN_LABELS = ['Pilihan Ganda', 'Drag & Drop', 'Susun & Ketik Kode'];

  // game buttons -> buka halaman kuis terpisah
  document.querySelectorAll('[data-game]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var g = parseInt(btn.getAttribute('data-game'), 10) - 1; // 0,1,2
      var p = getProgress();
      if (!p.modul[g]) return; // modul belum selesai, abaikan
      if (p.games[g]) return; // latihan sudah dikerjakan, tidak boleh ulang
      var tab = GAME_TABS[g];
      var titleEl = document.getElementById('quiz-title');
      if (titleEl) titleEl.innerHTML = '<span data-animal="' + (['cat','owl','fox'][g]) + '" data-size="24"></span> ' + LATIHAN_LABELS[g];
      if (window.quizStart) window.quizStart(tab, g);
      show('quiz');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // kembali ke daftar latihan dari halaman kuis
  var quizBackBtn = document.getElementById('quiz-back');
  if (quizBackBtn) {
    quizBackBtn.addEventListener('click', function () {
      show('games');
      refreshState();
    });
  }

  // ===== RENDER NILAI (hanya latihan) =====
  // Skala D–A: A (90-100), B (80-89), C (70-79), D (60-69), E (<60)
  function gradeFromPct(pct) {
    if (pct >= 90) return 'A';
    if (pct >= 80) return 'B';
    if (pct >= 70) return 'C';
    if (pct >= 60) return 'D';
    if (pct > 0) return 'E';
    return '-';
  }
  var LATIHAN_NAMES = ['Pilihan Ganda', 'Drag & Drop', 'Susun & Ketik Kode'];

  function renderNilai() {
    var p = getProgress();
    var scores = p.gameScores.slice();
    var raws = p.gameRaw ? p.gameRaw.slice() : [null, null, null];
    var doneScores = scores.filter(function (s) { return s !== null; });
    // rata-rata skor latihan yang sudah dikerjakan
    var overallPct = 0;
    if (doneScores.length > 0) {
      var sum = 0;
      for (var i = 0; i < scores.length; i++) { if (scores[i] !== null) sum += scores[i]; }
      overallPct = Math.round(sum / doneScores.length);
    }

    setEl('grade-overall', gradeFromPct(overallPct));
    setEl('grade-detail', 'Rata-rata: ' + overallPct + ' / 100 (' + doneScores.length + ' latihan dikerjakan)');

    var stats = document.getElementById('subject-stats');
    var html = '';
    for (var j = 0; j < 3; j++) {
      var sc = scores[j];
      var raw = raws[j];
      var pct = sc !== null ? sc : 0;
      var grade = sc !== null ? gradeFromPct(sc) : '-';
      var scoreText;
      if (sc === null) {
        scoreText = 'Belum dikerjakan';
      } else if (raw && typeof raw.correct === 'number') {
        scoreText = raw.correct + ' / ' + raw.total + '  (' + sc + '%)';
      } else {
        scoreText = sc + ' / 100';
      }
      html += '<div class="subject-row">';
      html += '<div class="subject-row__info">';
      html += '<span class="subject-row__t">Latihan ' + (j + 1) + ': ' + LATIHAN_NAMES[j] + '</span>';
      html += '<span class="subject-row__score">' + scoreText + '</span>';
      html += '</div>';
      html += '<div class="progress"><div class="progress__bar" style="width:' + pct + '%"></div></div>';
      html += '<span class="subject-row__s">' + grade + '</span>';
      html += '</div>';
    }
    stats.innerHTML = html;
  }

  // dipanggil quiz.js saat sebuah latihan selesai
  window.markGameDone = function (gameIdx, pct, correct, total) {
    var p = getProgress();
    p.games[gameIdx] = true;
    p.gameScores[gameIdx] = Math.max(p.gameScores[gameIdx] || 0, pct);
    if (typeof correct === 'number' && typeof total === 'number') {
      p.gameRaw[gameIdx] = { correct: correct, total: total };
    }
    saveProgress(p);
    submitScoresToSheet(p);
  };

  // ===== KIRIM NILAI KE SUPABASE =====
  function submitScoresToSheet(p) {
    if (!SUPABASE_ENABLED) return;
    var nama = getName() || 'Siswa';
    var scores = p.gameScores.slice();
    var done = scores.filter(function (s) { return s !== null; });
    var rata = done.length > 0 ? Math.round(done.reduce(function (a, b) { return a + b; }, 0) / done.length) : 0;
    var payload = {
      nama: nama,
      l1: scores[0] !== null ? scores[0] : null,
      l2: scores[1] !== null ? scores[1] : null,
      l3: scores[2] !== null ? scores[2] : null,
      rata: rata,
      selesai: done.length + '/3',
      waktu: new Date().toLocaleString('id-ID')
    };
    console.log('[Pylearn] kirim nilai ke Supabase:', payload);
    try {
      fetch(SUPABASE_URL + '/rest/v1/scores?on_conflict=nama', {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': 'Bearer ' + SUPABASE_KEY,
          'Content-Type': 'application/json',
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify(payload)
      }).then(function (res) {
        console.log('[Pylearn] Supabase response:', res.status);
      }).catch(function (e) {
        console.error('[Pylearn] gagal kirim ke Supabase:', e);
      });
    } catch (e) {
      console.error('[Pylearn] error:', e);
    }
  }

  // Fungsi test — jalankan di Console: testSheet()
  window.testSheet = function () {
    var payload = {
      nama: 'TEST_DEBUG', l1: 99, l2: 88, l3: 77,
      rata: 88, selesai: '3/3', waktu: new Date().toLocaleString('id-ID')
    };
    console.log('[Pylearn] TEST kirim ke Supabase...', payload);
    fetch(SUPABASE_URL + '/rest/v1/scores?on_conflict=nama', {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': 'Bearer ' + SUPABASE_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates'
      },
      body: JSON.stringify(payload)
    }).then(function (res) { return res.text(); })
      .then(function (t) { console.log('[Pylearn] TEST berhasil! Cek tabel scores di Supabase. Response:', t); })
      .catch(function (e) { console.error('[Pylearn] TEST gagal:', e); });
  };

  // expose helper untuk quiz.js
  window.getUserName = function () { return getName() || 'Siswa'; };
  window.getAllScores = function () {
    var p = getProgress();
    return [p.gameScores[0], p.gameScores[1], p.gameScores[2]];
  };
  window.getAllRaw = function () {
    var p = getProgress();
    return [p.gameRaw[0], p.gameRaw[1], p.gameRaw[2]];
  };
  window.quizGoNilai = function () { currentModul = -1; show('nilai'); };
  window.quizGoModul = function (modulIdx) {
    currentModul = modulIdx;
    show('modul');
  };
  window.quizDoneBack = function () { show('games'); refreshState(); };

  // ===== NAVIGATION HANDLER =====
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-go]');
    if (!el) return;
    if (el.getAttribute('data-locked') === '1') return; // terkunci, abaikan
    var target = el.dataset.go;
    if (target === 'beranda' || target === 'materi' || target === 'modul' || target === 'games' || target === 'quiz' || target === 'nilai') {
      if (!getName()) {
        show('onboarding');
        if (nameInput) setTimeout(function () { nameInput.focus(); }, 350);
        return;
      }
      // proteksi ekstra: blokir nilai jika latihan 3 belum selesai
      if (target === 'nilai') {
        var p = getProgress();
        if (!p.games[2]) { show('games'); return; }
      }
      currentModul = -1;
      show(target);
    }
  });

  // onboarding form
  if (nameForm) {
    nameForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (nameInput.value || '').trim();
      if (!name) return;
      saveName(name);
      applyName();
      show('beranda');
    });
  }

  // change name
  if (changeNameBtn) {
    changeNameBtn.addEventListener('click', function () {
      if (nameInput) nameInput.value = getName();
      show('onboarding');
      if (nameInput) setTimeout(function () { nameInput.focus(); }, 350);
    });
  }

  // ===== AVATAR MENU (dropdown samar) =====
  var avatarWrap = document.getElementById('avatar-wrap');
  var avatarMenu = document.getElementById('avatar-menu');
  var menuChangeName = document.getElementById('menu-change-name');
  var menuReset = document.getElementById('menu-reset');

  if (avatarWrap && avatarMenu) {
    document.getElementById('user-avatar').addEventListener('click', function (e) {
      e.stopPropagation();
      avatarMenu.hidden = !avatarMenu.hidden;
    });
    document.addEventListener('click', function (e) {
      if (!avatarWrap.contains(e.target)) avatarMenu.hidden = true;
    });
  }
  if (menuChangeName) {
    menuChangeName.addEventListener('click', function () {
      avatarMenu.hidden = true;
      if (nameInput) nameInput.value = getName();
      show('onboarding');
      if (nameInput) setTimeout(function () { nameInput.focus(); }, 350);
    });
  }

  // ===== RESET DATA (password: reset123) =====
  var RESET_PASSWORD = 'reset123';
  var resetModal = document.getElementById('reset-modal');
  var resetPasswordInput = document.getElementById('reset-password');
  var resetErr = document.getElementById('reset-err');
  var resetCancelBtn = document.getElementById('reset-cancel');
  var resetConfirmBtn = document.getElementById('reset-confirm');

  if (menuReset) {
    menuReset.addEventListener('click', function () {
      avatarMenu.hidden = true;
      if (resetModal) {
        resetModal.hidden = false;
        if (resetPasswordInput) { resetPasswordInput.value = ''; setTimeout(function () { resetPasswordInput.focus(); }, 200); }
        if (resetErr) resetErr.hidden = true;
      }
    });
  }
  if (resetCancelBtn) {
    resetCancelBtn.addEventListener('click', function () { resetModal.hidden = true; });
  }
  if (resetConfirmBtn) {
    resetConfirmBtn.addEventListener('click', function () {
      var val = resetPasswordInput ? resetPasswordInput.value : '';
      if (val !== RESET_PASSWORD) {
        if (resetErr) resetErr.hidden = false;
        return;
      }
      // hapus semua data
      try { localStorage.removeItem(NAME_KEY); } catch (e) {}
      try { localStorage.removeItem(PROG_KEY); } catch (e) {}
      resetModal.hidden = true;
      // reset state internal
      currentModul = -1;
      show('landing');
    });
  }
  if (resetPasswordInput) {
    resetPasswordInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); resetConfirmBtn.click(); }
    });
  }

  // quiz-done & quiz-go-nilai sekarang dikelola oleh quiz.js (wireResultButtons)

  // dipanggil quiz.js saat sebuah game selesai
  // initial
  show('landing');

  window.scrollToSection = function (id) {
    var node = document.getElementById(id);
    if (node) node.scrollIntoView({ behavior: 'smooth' });
  };
})();
