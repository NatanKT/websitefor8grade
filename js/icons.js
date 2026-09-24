/* ===== Cute Animal SVG Icons =====
   Usage: <span data-animal="rabbit" data-size="24"></span>
   Call window.applyAnimals() after DOM ready & after any dynamic render.
*/
(function () {
  var ANIMALS = {

    snake: function (s) {
      return '<svg viewBox="0 0 64 64" width="' + s + '" height="' + s + '" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M14 22 Q14 14 22 14 H42 Q50 14 50 22 Q50 30 42 30 H22 Q14 30 14 38 Q14 46 22 46 H42" fill="none" stroke="#8E7BB6" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<circle cx="46" cy="20" r="2.4" fill="#3b3535"/>' +
        '<path d="M50 22 L56 24" stroke="#d97777" stroke-width="2" stroke-linecap="round"/>' +
        '</svg>';
    },
    rabbit: function (s) {
      return '<svg viewBox="0 0 64 64" width="' + s + '" height="' + s + '" xmlns="http://www.w3.org/2000/svg">' +
        '<ellipse cx="22" cy="14" rx="5" ry="13" fill="#fff" stroke="#d2c7e5" stroke-width="1.5"/>' +
        '<ellipse cx="42" cy="14" rx="5" ry="13" fill="#fff" stroke="#d2c7e5" stroke-width="1.5"/>' +
        '<ellipse cx="22" cy="14" rx="2.2" ry="8" fill="#f9c0af"/>' +
        '<ellipse cx="42" cy="14" rx="2.2" ry="8" fill="#f9c0af"/>' +
        '<circle cx="32" cy="38" r="18" fill="#fff" stroke="#d2c7e5" stroke-width="1.5"/>' +
        '<circle cx="26" cy="35" r="2.5" fill="#3b3535"/>' +
        '<circle cx="38" cy="35" r="2.5" fill="#3b3535"/>' +
        '<ellipse cx="32" cy="42" rx="2" ry="1.5" fill="#f9c0af"/>' +
        '<path d="M28 46 Q32 49 36 46" stroke="#3b3535" fill="none" stroke-width="1.5" stroke-linecap="round"/>' +
        '<circle cx="20" cy="42" r="1.4" fill="#f9c0af" opacity=".7"/>' +
        '<circle cx="44" cy="42" r="1.4" fill="#f9c0af" opacity=".7"/>' +
        '</svg>';
    },
    owl: function (s) {
      return '<svg viewBox="0 0 64 64" width="' + s + '" height="' + s + '" xmlns="http://www.w3.org/2000/svg">' +
        '<ellipse cx="32" cy="36" rx="22" ry="20" fill="#d2c7e5"/>' +
        '<path d="M12 22 L18 12 L26 22 Z" fill="#B7A8DE"/>' +
        '<path d="M52 22 L46 12 L38 22 Z" fill="#B7A8DE"/>' +
        '<circle cx="24" cy="32" r="8" fill="#fff"/>' +
        '<circle cx="40" cy="32" r="8" fill="#fff"/>' +
        '<circle cx="24" cy="32" r="3.5" fill="#3b3535"/>' +
        '<circle cx="40" cy="32" r="3.5" fill="#3b3535"/>' +
        '<circle cx="25" cy="31" r="1" fill="#fff"/>' +
        '<circle cx="41" cy="31" r="1" fill="#fff"/>' +
        '<path d="M28 40 L32 44 L36 40 Z" fill="#f9c0af"/>' +
        '<path d="M18 44 Q32 52 46 44" stroke="#8E7BB6" fill="none" stroke-width="1.5" stroke-linecap="round"/>' +
        '</svg>';
    },
    cat: function (s) {
      return '<svg viewBox="0 0 64 64" width="' + s + '" height="' + s + '" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="32" cy="36" r="20" fill="#f9c0af"/>' +
        '<path d="M12 26 L18 10 L28 24 Z" fill="#f9c0af"/>' +
        '<path d="M52 26 L46 10 L36 24 Z" fill="#f9c0af"/>' +
        '<path d="M16 18 L20 13 L24 19 Z" fill="#ffddd8"/>' +
        '<path d="M48 18 L44 13 L40 19 Z" fill="#ffddd8"/>' +
        '<ellipse cx="24" cy="34" rx="2.2" ry="3.5" fill="#3b3535"/>' +
        '<ellipse cx="40" cy="34" rx="2.2" ry="3.5" fill="#3b3535"/>' +
        '<path d="M30 42 L32 45 L34 42 Z" fill="#d97777"/>' +
        '<path d="M28 47 Q32 49 36 47" stroke="#3b3535" fill="none" stroke-width="1.5" stroke-linecap="round"/>' +
        '<line x1="20" y1="42" x2="12" y2="40" stroke="#3b3535" stroke-width="0.8"/>' +
        '<line x1="20" y1="44" x2="12" y2="46" stroke="#3b3535" stroke-width="0.8"/>' +
        '<line x1="44" y1="42" x2="52" y2="40" stroke="#3b3535" stroke-width="0.8"/>' +
        '<line x1="44" y1="44" x2="52" y2="46" stroke="#3b3535" stroke-width="0.8"/>' +
        '</svg>';
    },  
    panda: function (s) {
      return '<svg viewBox="0 0 64 64" width="' + s + '" height="' + s + '" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="32" cy="36" r="22" fill="#fff" stroke="#d2c7e5" stroke-width="1.5"/>' +
        '<circle cx="14" cy="20" r="6" fill="#3b3535"/>' +
        '<circle cx="50" cy="20" r="6" fill="#3b3535"/>' +
        '<ellipse cx="22" cy="34" rx="5" ry="6" fill="#3b3535"/>' +
        '<ellipse cx="42" cy="34" rx="5" ry="6" fill="#3b3535"/>' +
        '<circle cx="22" cy="35" r="1.8" fill="#fff"/>' +
        '<circle cx="42" cy="35" r="1.8" fill="#fff"/>' +
        '<ellipse cx="32" cy="44" rx="2.5" ry="1.8" fill="#3b3535"/>' +
        '<path d="M28 48 Q32 51 36 48" stroke="#3b3535" fill="none" stroke-width="1.5" stroke-linecap="round"/>' +
        '<circle cx="18" cy="42" r="1.8" fill="#f9c0af" opacity=".6"/>' +
        '<circle cx="46" cy="42" r="1.8" fill="#f9c0af" opacity=".6"/>' +
        '</svg>';
    },
    fox: function (s) {
      return '<svg viewBox="0 0 64 64" width="' + s + '" height="' + s + '" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M10 28 L18 10 L28 26 Z" fill="#f9c0af"/>' +
        '<path d="M54 28 L46 10 L36 26 Z" fill="#f9c0af"/>' +
        '<path d="M16 18 L20 14 L24 20 Z" fill="#ffddd8"/>' +
        '<path d="M48 18 L44 14 L40 20 Z" fill="#ffddd8"/>' +
        '<circle cx="32" cy="36" r="20" fill="#f9c0af"/>' +
        '<path d="M32 40 L22 52 Q32 58 42 52 Z" fill="#fff"/>' +
        '<ellipse cx="24" cy="32" rx="2" ry="3" fill="#3b3535"/>' +
        '<ellipse cx="40" cy="32" rx="2" ry="3" fill="#3b3535"/>' +
        '<ellipse cx="32" cy="44" rx="2.2" ry="2" fill="#3b3535"/>' +
        '<path d="M28 49 Q32 51 36 49" stroke="#3b3535" fill="none" stroke-width="1.5" stroke-linecap="round"/>' +
        '</svg>';
    },
    bear: function (s) {
      return '<svg viewBox="0 0 64 64" width="' + s + '" height="' + s + '" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="14" cy="20" r="7" fill="#d2c7e5"/>' +
        '<circle cx="50" cy="20" r="7" fill="#d2c7e5"/>' +
        '<circle cx="32" cy="38" r="22" fill="#d2c7e5"/>' +
        '<circle cx="14" cy="20" r="3" fill="#f9c0af"/>' +
        '<circle cx="50" cy="20" r="3" fill="#f9c0af"/>' +
        '<circle cx="24" cy="34" r="2.5" fill="#3b3535"/>' +
        '<circle cx="40" cy="34" r="2.5" fill="#3b3535"/>' +
        '<ellipse cx="32" cy="42" rx="3" ry="2.5" fill="#f9c0af"/>' +
        '<path d="M28 47 Q32 50 36 47" stroke="#3b3535" fill="none" stroke-width="1.5" stroke-linecap="round"/>' +
        '</svg>';
    },
    turtle: function (s) {
      return '<svg viewBox="0 0 64 64" width="' + s + '" height="' + s + '" xmlns="http://www.w3.org/2000/svg">' +
        '<ellipse cx="32" cy="40" rx="22" ry="14" fill="#D3EADA" stroke="#6fb594" stroke-width="1.5"/>' +
        '<circle cx="32" cy="22" r="11" fill="#D3EADA" stroke="#6fb594" stroke-width="1.5"/>' +
        '<path d="M14 46 Q10 52 14 54" stroke="#6fb594" stroke-width="3" fill="none" stroke-linecap="round"/>' +
        '<path d="M50 46 Q54 52 50 54" stroke="#6fb594" stroke-width="3" fill="none" stroke-linecap="round"/>' +
        '<circle cx="28" cy="20" r="1.5" fill="#3b3535"/>' +
        '<circle cx="36" cy="20" r="1.5" fill="#3b3535"/>' +
        '<path d="M28 25 Q32 28 36 25" stroke="#3b3535" fill="none" stroke-width="1.2" stroke-linecap="round"/>' +
        '<path d="M22 32 L42 32 M20 40 L44 40 M22 48 L42 48" stroke="#6fb594" stroke-width="1" opacity=".5"/>' +
        '</svg>';
    }
  };

  function applyAnimals(root) {
    var nodes = (root || document).querySelectorAll('[data-animal]');
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (n.dataset.animalApplied) continue;
      var name = n.getAttribute('data-animal');
      var size = parseInt(n.getAttribute('data-size') || '28', 10);
      var fn = ANIMALS[name];
      if (!fn) continue;
      n.innerHTML = fn(size);
      n.style.display = 'inline-flex';
      n.style.alignItems = 'center';
      n.style.justifyContent = 'center';
      n.dataset.animalApplied = '1';
    }
  }

  window.applyAnimals = applyAnimals;
  window.ANIMALS = ANIMALS;

  // auto-apply on DOMContentLoaded
  if (document.readyState !== 'loading') applyAnimals();
  else document.addEventListener('DOMContentLoaded', applyAnimals);
})();