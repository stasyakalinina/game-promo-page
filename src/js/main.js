  function move() {
    var elem = document.getElementById("progress-line");
    var progressAmount = document.getElementById('progress-number');
    var width = 0;

    var id = setInterval(frame, 50);
    function frame() {
      if (width >= 50) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
        progressAmount.textContent = Math.round(width / 10);
      }
    }
  }

  document.addEventListener('DOMContentLoaded', move);