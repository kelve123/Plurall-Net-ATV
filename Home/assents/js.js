window.addEventListener('load', function() {
    var h1 = document.querySelector('.h1');
    var text = h1.innerText;
    h1.innerText = ''; // Limpa o texto original

    var i = 0;
    var speed = 30; // Velocidade da animação em milissegundos

    function typeWriter() {
        if (i < text.length) {
            if (text[i] === ' ') {
                h1.innerHTML += '&nbsp;'; // Adiciona um espaço em branco como HTML
            } else {
                h1.innerHTML += text[i];
            }
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});

let texto = document.getElementById('texto');
let textoCompleto = texto.innerHTML;
texto.innerHTML = ''; // Limpa o conteúdo original

let i = 0;
let timer = setInterval(function() {
  texto.innerHTML += textoCompleto[i];
  i++;
  if (i >= textoCompleto.length) {
    clearInterval(timer);
  }
}, 20); // Velocidade da animação em milissegundos



//pagina loading//
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader-overlay');
    setTimeout(function() {
        loader.style.display = 'none'; // Esconde o overlay de carregamento após um tempo de carregando
    }, 2500); // Define o tempo de carregando em milissegundos (3000 = 3 segundos)
});