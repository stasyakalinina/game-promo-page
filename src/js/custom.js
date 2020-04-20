  // var progressLine = document.getElementById('progress-line');
  // var progressAmount = document.getElementById('progress-number');

function move() {
  var elem = document.getElementById("progress-line");
  var width = 10;
  console.log('123');

  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}

document.addEventListener('DOMContentLoaded', move);