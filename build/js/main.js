function move(){var e=document.getElementById("progress-line"),t=10;console.log("123");var n=setInterval(o,10);function o(){100<=t?clearInterval(n):(t++,e.style.width=t+"%")}}function move(){var e=document.getElementById("progress-line"),t=document.getElementById("progress-number"),n=0,o=setInterval(function(){50<=n?clearInterval(o):(n++,e.style.width=n+"%",t.textContent=Math.round(n/10))},50)}document.addEventListener("DOMContentLoaded",move),document.addEventListener("DOMContentLoaded",move);