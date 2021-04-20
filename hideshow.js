function checkbox( s ) {
    let box = document.getElementById(s);

// If it is already hidden, make it visible.

    if (box.classList.contains('hidden')) {
      box.className = s+" visible";
    }
    
// Otherwise, 
    else {
      box.className = s+" visuallyhidden";
      box.addEventListener('transitionend', function(bleachout) {
        box.className = s+" hidden";
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }
  };

