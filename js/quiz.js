(function () {
  var data = window.QUIZ_DATA;
  var POOL_SIZE = 10;
  var currentTab = 'pilihan';
  var currentGameIdx = 0;
  var currentIndex = 0;
  var sessionItems = { pilihan: [], dragdrop: [], urutan: [] };
  var answers = { pilihan: {}, dragdrop: {}, urutan: {} };
  var shuffled = { urutan: {} };
  var finished = { pilihan: false, dragdrop: false, urutan: false };

  var container = document.getElementById('quiz-container');
  var scoreEl = document.getElementById('quiz-score');
  var totalEl = document.getElementById('quiz-total');
  var typeLabel = document.getElementById('quiz-type-label');
  var prevBtn = document.getElementById('quiz-prev');
  var nextBtn = document.getElementById('quiz-next');
  var countEl = document.getElementById('quiz-count');
  var resultOverlay = document.getElementById('quiz-result');
  var resultEmoji = document.getElementById('quiz-result-emoji');
  var resultTitle = document.getElementById('quiz-result-title');
  var resultScore = document.getElementById('quiz-result-score');
  var tabs = document.querySelectorAll('.quiz-tab');
  var cheerEl = document.getElementById('cheer');
  var cheerSadEl = document.getElementById('cheer-sad');

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function pickSession(tab) {
    var pool = data[tab] || [];
    var n = Math.min(POOL_SIZE, pool.length);
    // Latihan 3 (urutan) tidak diacak — soal berurutan 1→10 sesuai modul
    if (tab === 'urutan') return pool.slice(0, n);
    return shuffle(pool).slice(0, n);
  }

  function getItems() { return sessionItems[currentTab]; }

  function getLabel(tab) {
    return { pilihan: 'Pilihan Ganda', dragdrop: 'Drag & Drop', urutan: 'Mengurutkan' }[tab];
  }

  function resetTab(tab) {
    sessionItems[tab] = pickSession(tab);
    answers[tab] = {};
    shuffled.urutan = {};
    finished[tab] = false;
  }

  // dipanggil main.js saat sebuah game dimainkan
  window.quizStart = function (tab, gameIdx) {
    currentTab = tab;
    currentGameIdx = gameIdx;
    currentIndex = 0;
    resetTab(tab);
    if (resultOverlay) resultOverlay.hidden = true;
    render('fwd');
  };
  window.quizReset = function () { // compat
    window.quizStart('pilihan', 0);
  };

  function computeScore() {
    var items = getItems();
    var correct = 0;
    for (var i = 0; i < items.length; i++) {
      if (isCorrect(i)) correct++;
    }
    return correct;
  }

  function isCorrect(idx) {
    var item = getItems()[idx];
    if (!item) return false;
    var userAns = answers[currentTab] && answers[currentTab][idx];
    if (userAns === undefined || userAns === null) return false;
    if (currentTab === 'pilihan') return userAns === item.a;
    if (currentTab === 'dragdrop') return item.jawaban.indexOf(userAns) >= 0;
    if (currentTab === 'urutan') {
      if (item.type === 'isian') {
        if (typeof userAns !== 'string' || userAns.trim() === '') return false;
        var u = userAns.replace(/\s/g, '');
        for (var an = 0; an < item.answers.length; an++) {
          if (item.answers[an].replace(/\s/g, '') === u) return true;
        }
        return false;
      }
      if (!Array.isArray(userAns)) return false;
      for (var k = 0; k < item.jawaban.length; k++) {
        if (userAns[k] !== item.jawaban[k]) return false;
      }
      return true;
    }
    return false;
  }

  function updateScore() {
    // Skor disembunyikan selama pengerjaan agar siswa tidak stres.
    // Nilai baru ditampilkan di showResult setelah latihan 3 selesai.
    scoreEl.textContent = '—';
    totalEl.textContent = '/ ' + getItems().length;
    typeLabel.textContent = getLabel(currentTab);
  }

  function showCheer() {
    if (!cheerEl) return;
    cheerEl.hidden = false;
    cheerEl.classList.remove('is-show');
    void cheerEl.offsetWidth;
    cheerEl.classList.add('is-show');
    clearTimeout(cheerEl._t);
    cheerEl._t = setTimeout(function () { cheerEl.hidden = true; cheerEl.classList.remove('is-show'); }, 1200);
  }

  function showSad() {
    if (!cheerSadEl) return;
    cheerSadEl.hidden = false;
    cheerSadEl.classList.remove('is-show');
    void cheerSadEl.offsetWidth;
    cheerSadEl.classList.add('is-show');
    clearTimeout(cheerSadEl._t);
    cheerSadEl._t = setTimeout(function () { cheerSadEl.hidden = true; cheerSadEl.classList.remove('is-show'); }, 1100);
    // shake kartu saat ini
    var card = container.querySelector('.quiz-card');
    if (card) {
      card.classList.remove('is-shake');
      void card.offsetWidth;
      card.classList.add('is-shake');
      setTimeout(function () { card.classList.remove('is-shake'); }, 600);
    }
  }

  function render(dir) {
    var items = getItems();
    if (items.length === 0) { container.innerHTML = '<p>Belum ada soal.</p>'; return; }
    var item = items[currentIndex];
    var html = '';
    if (currentTab === 'pilihan') html = renderPilihan(item, currentIndex);
    else if (currentTab === 'dragdrop') html = renderDragDrop(item, currentIndex);
    else if (currentTab === 'urutan') {
      if (item.type === 'isian') html = renderIsian(item, currentIndex);
      else html = renderUrutan(item, currentIndex);
    }
    container.innerHTML = html;
    attachListeners(item, currentIndex);
    updateNav();
    updateScore();
    if (window.applyAnimals) window.applyAnimals(container);
    // page transition animation (hanya saat ganti soal, bukan saat menjawab)
    if (dir) {
      var card = container.querySelector('.quiz-card');
      if (card) {
        card.classList.remove('page-in-fwd', 'page-in-bwd');
        void card.offsetWidth;
        card.classList.add(dir === 'bwd' ? 'page-in-bwd' : 'page-in-fwd');
      }
    }
  }

  // ===== PILIHAN GANDA (tanpa feedback benar/salah) =====
  function renderPilihan(item, idx) {
    var userAns = answers[currentTab] && answers[currentTab][idx];
    var answered = userAns !== undefined && userAns !== null;
    var html = '<div class="quiz-card">';
    html += '<div class="quiz-card__num">Soal ' + (idx + 1) + '</div>';
    html += '<p class="quiz-card__q">' + escapeHtml(item.q) + '</p>';
    html += '<div class="quiz-options">';
    for (var i = 0; i < item.o.length; i++) {
      var cls = 'quiz-opt';
      if (answered && i === userAns) cls += ' is-selected';
      html += '<button class="' + cls + '" data-opt="' + i + '">';
      html += '<span class="quiz-opt__letter">' + String.fromCharCode(65 + i) + '</span>';
      html += '<span class="quiz-opt__text">' + escapeHtml(item.o[i]) + '</span>';
      html += '</button>';
    }
    html += '</div>';
    html += '</div>';
    return html;
  }

  // ===== DRAG & DROP (tanpa feedback benar/salah) =====
  function renderDragDrop(item, idx) {
    var userAns = answers[currentTab] && answers[currentTab][idx];
    var answered = userAns !== undefined && userAns !== null;
    var html = '<div class="quiz-card">';
    html += '<div class="quiz-card__num">Soal ' + (idx + 1) + '</div>';
    html += '<p class="quiz-card__q">' + escapeHtml(item.q || 'Lengkapi kode yang benar:') + '</p>';
    html += '<p class="quiz-card__sub">Lengkapi bagian kosong (......) dengan memilih dari pilihan di bawah:</p>';
    var codeParts = item.code.split('......');
    html += '<div class="dd-code">';
    for (var c = 0; c < codeParts.length; c++) {
      html += '<span class="dd-code__part">' + escapeHtmlKeepNewlines(codeParts[c]) + '</span>';
      if (c < codeParts.length - 1) {
        var blankContent = answered ? item.pilihan[userAns] : '......';
        var blankCls = 'dd-blank' + (answered ? ' is-selected' : '');
        html += '<span class="' + blankCls + '" data-blank="1">' + escapeHtml(blankContent) + '</span>';
      }
    }
    html += '</div>';
    // selalu tampilkan bank pilihan agar siswa bisa mengganti jawaban
    html += '<div class="dd-bank">';
    html += '<p class="dd-bank__title">' + (answered ? 'Ganti pilihan (opsional):' : 'Pilih kata yang tepat:') + '</p>';
    for (var p = 0; p < item.pilihan.length; p++) {
      var pcls = 'dd-choice';
      if (answered && p === userAns) pcls += ' is-selected';
      html += '<button class="' + pcls + '" data-opt="' + p + '">' + escapeHtml(item.pilihan[p]) + '</button>';
    }
    html += '</div>';
    html += '</div>'; 
    return html;
  }

  // ===== MENGURUTKAN =====
  function renderUrutan(item, idx) {
    var userAns = answers[currentTab] && answers[currentTab][idx];
    var answered = userAns && userAns.length === item.baris.length;
    var indexed = item.baris.map(function (_, i) { return i; });
    if (!shuffled.urutan[idx]) shuffled.urutan[idx] = shuffle(indexed);
    var sh = shuffled.urutan[idx];
    var sel = userAns || [];
    var html = '<div class="quiz-card">';
    html += '<div class="quiz-card__num">Soal ' + (idx + 1) + ' — ' + item.judul + '</div>';
    html += '<p class="quiz-card__q">Urutkan baris kode berikut agar menjadi program yang benar!</p>';
    // Sisa pilihan yang belum dipilih ditaruh di atas (digabung dengan soal)
    if (sel.length < item.baris.length) {
      html += '<div class="dd-bank">';
      html += '<p class="dd-bank__title">' + (sel.length === 0 ? 'Klik baris sesuai urutan yang benar:' : 'Sisa baris yang belum dipilih:') + '</p>';
      for (var s = 0; s < sh.length; s++) {
        if (sel.indexOf(sh[s]) < 0) {
          html += '<button class="dd-line" data-opt="' + sh[s] + '">' + escapeHtmlKeepNewlines(item.baris[sh[s]]) + '</button>';
        }
      }
      html += '</div>';
    }
    // Daftar urutan yang sudah dipilih ditaruh di bawah
    if (sel.length > 0) {
      html += '<div class="order-list">';
      html += '<p class="dd-bank__title">Urutan kamu:</p>';
      for (var r = 0; r < sel.length; r++) {
        html += '<div class="order-item" data-opt="' + sel[r] + '">';
        html += '<span class="order-item__num">' + (r + 1) + '</span>';
        html += '<span class="order-item__code">' + escapeHtmlKeepNewlines(item.baris[sel[r]]) + '</span>';
        html += '<button class="order-item__x" data-remove="' + r + '">✕</button>';
        html += '</div>';
      }
      html += '</div>';
    }
    html += '</div>';
    return html;
  }

  // ===== ISIAN (KETIK, tanpa feedback) =====
  function renderIsian(item, idx) {
    var userAns = answers[currentTab] && answers[currentTab][idx];
    var answered = typeof userAns === 'string' && userAns.trim() !== '';
    var html = '<div class="quiz-card">';
    html += '<div class="quiz-card__num">Soal ' + (idx + 1) + ' — Isian</div>';
    html += '<p class="quiz-card__q">' + escapeHtml(item.q) + '</p>';
    html += '<div class="isian-input">';
    if (answered) {
      html += '<input type="text" class="isian-field is-selected" id="isian-field" value="' + escapeHtml(userAns) + '" autocomplete="off" autocapitalize="off" spellcheck="false" />';
    } else {
      html += '<input type="text" class="isian-field" id="isian-field" placeholder="Ketik perintah Python..." autocomplete="off" autocapitalize="off" spellcheck="false" />';
    }
    html += '<button class="btn btn--primary" id="isian-submit">Simpan</button>';
    html += '</div>';
    html += '<p class="isian-hint">Tulis perintah lengkap termasuk print() dan tanda kutip jika perlu.</p>';
    html += '</div>';
    return html;
  }


  function attachListeners(item, idx) {
    var opts = container.querySelectorAll('[data-opt]');
    if (currentTab === 'pilihan' || currentTab === 'dragdrop') {
      opts.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var val = parseInt(btn.getAttribute('data-opt'), 10);
          answers[currentTab][idx] = val;
          render();
        });
      });
    } else if (currentTab === 'urutan') {
      if (item.type === 'isian') {
        var submitBtn = container.querySelector('#isian-submit');
        var field = container.querySelector('#isian-field');
        if (submitBtn && field) {
          submitBtn.addEventListener('click', function () {
            var val = field.value.trim();
            if (!val) return;
            answers[currentTab][idx] = val;
            render();
          });
          field.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') { e.preventDefault(); submitBtn.click(); }
          });
          field.focus();
        }
        return;
      }
      container.querySelectorAll('.dd-line[data-opt]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var val = parseInt(btn.getAttribute('data-opt'), 10);
          if (!Array.isArray(answers[currentTab][idx])) answers[currentTab][idx] = [];
          if (answers[currentTab][idx].indexOf(val) < 0) answers[currentTab][idx].push(val);
          render();
        });
      });
      container.querySelectorAll('[data-remove]').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          var ri = parseInt(btn.getAttribute('data-remove'), 10);
          if (Array.isArray(answers[currentTab][idx])) answers[currentTab][idx].splice(ri, 1);
          render();
        });
      });
    }
  }

  function isAnswered(idx) {
    var item = getItems()[idx];
    if (!item) return false;
    var userAns = answers[currentTab] && answers[currentTab][idx];
    if (userAns === undefined || userAns === null) return false;
    if (item.type === 'isian') return typeof userAns === 'string' && userAns.trim() !== '';
    if (currentTab === 'urutan') return Array.isArray(userAns) && userAns.length === item.baris.length;
    return true; // pilihan & dragdrop: cukup ada nilai
  }

  function updateNav() {
    var items = getItems();
    prevBtn.disabled = currentIndex === 0;
    var answered = isAnswered(currentIndex);
    nextBtn.disabled = !answered;
    nextBtn.textContent = currentIndex === items.length - 1 ? 'Selesai ✓' : 'Berikutnya →';
    countEl.textContent = (currentIndex + 1) + ' / ' + items.length;
    var hint = document.getElementById('quiz-nav-hint');
    if (hint) hint.hidden = answered;
  }

  prevBtn.addEventListener('click', function () {
    if (currentIndex > 0) { currentIndex--; render('bwd'); }
  });

  nextBtn.addEventListener('click', function () {
    var items = getItems();
    if (currentIndex < items.length - 1) { currentIndex++; render('fwd'); }
    else { showResult(); }
  });

  // tabs dihapus — jenis soal dipilih lewat game cards

  function showResult() {
    if (finished[currentTab]) return;
    finished[currentTab] = true;
    var total = getItems().length;
    var correct = computeScore();
    var pct = Math.round((correct / total) * 100);
    // simpan skor ke progress (tidak ditampilkan dulu untuk latihan 1 & 2)
    if (window.markGameDone) window.markGameDone(currentGameIdx, pct, correct, total);

    var rekapEl = document.getElementById('quiz-rekap');
    var btnsEl = document.getElementById('quiz-result-btns');
    if (rekapEl) rekapEl.hidden = true;

    if (currentGameIdx < 2) {
      // Latihan 1 → lanjut Modul 2, Latihan 2 → lanjut Modul 3
      var nextModul = currentGameIdx + 1; // 0→Modul 2 (idx 1), 1→Modul 3 (idx 2)
      resultEmoji.textContent = '🎀';
      resultTitle.textContent = 'Kerja Bagus, ' + (window.getUserName ? window.getUserName() : '') + '!';
      resultScore.textContent = 'Jawabanmu sudah tersimpan. Yuk lanjut pelajari Modul ' + (nextModul + 1) + '!';
      if (btnsEl) btnsEl.innerHTML = '<button class="btn btn--primary btn--block" id="quiz-go-modul">Pelajari Modul ' + (nextModul + 1) + ' →</button>';
    } else {
      // Latihan 3: tampilkan skor + rekap semua latihan
      var animal, title;
      if (pct >= 90) { animal = 'panda'; title = 'Luar Biasa!'; }
      else if (pct >= 75) { animal = 'fox'; title = 'Kerja Bagus!'; }
      else if (pct >= 50) { animal = 'rabbit'; title = 'Lumayan, terus belajar!'; }
      else { animal = 'owl'; title = 'Jangan menyerah, pelajari lagi!'; }
      resultEmoji.innerHTML = '';
      var span = document.createElement('span');
      span.setAttribute('data-animal', animal);
      span.setAttribute('data-size', '64');
      resultEmoji.appendChild(span);
      if (window.applyAnimals) window.applyAnimals(resultOverlay);
      resultTitle.textContent = title;
      resultScore.textContent = 'Skor Latihan 3: ' + correct + ' / ' + total + ' (' + pct + '%)';

      // Rekap semua latihan
      if (rekapEl && window.getAllScores) {
        var scores = window.getAllScores(); // [pct1, pct2, pct3]
        var raws = window.getAllRaw ? window.getAllRaw() : [null, null, null];
        var names = ['Latihan 1: Pilihan Ganda', 'Latihan 2: Drag & Drop', 'Latihan 3: Susun & Ketik'];
        var html = '<h4>Rekap Nilai Semua Latihan</h4>';
        html += '<div class="quiz-rekap__list">';
        for (var i = 0; i < 3; i++) {
          var sc = scores[i];
          var raw = raws[i];
          var scText;
          if (sc === null) scText = 'belum dikerjakan';
          else if (raw && typeof raw.correct === 'number') scText = raw.correct + '/' + raw.total + ' (' + sc + '%)';
          else scText = sc + '/100';
          html += '<div class="quiz-rekap__row"><span>' + names[i] + '</span><strong>' + scText + '</strong></div>';
        }
        html += '</div>';
        var doneScores = scores.filter(function (s) { return s !== null; });
        var avg = doneScores.length > 0 ? Math.round(doneScores.reduce(function (a, b) { return a + b; }, 0) / doneScores.length) : 0;
        html += '<div class="quiz-rekap__avg">Rata-rata: <strong>' + avg + ' / 100</strong></div>';
        rekapEl.innerHTML = html;
        rekapEl.hidden = false;
      }
      if (btnsEl) btnsEl.innerHTML = '<button class="btn btn--primary btn--block" id="quiz-go-nilai">Lihat Nilai →</button><button class="btn btn--ghost btn--block" id="quiz-done" style="margin-top:8px">Selesai ✓</button>';
    }
    resultOverlay.hidden = false;
    // (re-)wire tombol result
    wireResultButtons();
  }

  function wireResultButtons() {
    var doneBtn = document.getElementById('quiz-done');
    if (doneBtn) {
      doneBtn.onclick = function () {
        resultOverlay.hidden = true;
        if (window.quizDoneBack) window.quizDoneBack();
        else { var qb = document.getElementById('quiz-back'); if (qb) qb.click(); }
      };
    }
    var goNilai = document.getElementById('quiz-go-nilai');
    if (goNilai) {
      goNilai.onclick = function () {
        resultOverlay.hidden = true;
        if (window.quizGoNilai) window.quizGoNilai();
      };
    }
    var goModul = document.getElementById('quiz-go-modul');
    if (goModul) {
      goModul.onclick = function () {
        resultOverlay.hidden = true;
        if (window.quizGoModul) window.quizGoModul(currentGameIdx + 1);
      };
    }
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function escapeHtmlKeepNewlines(s) { return escapeHtml(s).replace(/\n/g, '<br>'); }

  // init (akan di-reset ulang oleh main.js saat layar dibuka)
  resetTab('pilihan');
  resetTab('dragdrop');
  resetTab('urutan');
  render('fwd');
})();
