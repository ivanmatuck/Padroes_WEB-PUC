"use strict";

function iniciar() {
  var imagens = document.querySelectorAll("#fotos img");
  for(let i=0; i<imagens.length; i++) {
    imagens[i].addEventListener('click', alteraimagem, false);
  }

  // Seleciona a primeira foto
  imagens[0].style.borderColor = 'orange';
  document.querySelector('#fotoselecionada').src = imagens[0].src;
}

function alteraimagem(e) {
  document.querySelector('#fotoselecionada').src = e.target.src;
  var imagens = document.querySelectorAll('#fotos img')
  for(var i=0; i<imagens.length; i++)
    imagens[i].style.borderColor = 'white';
  e.target.style.borderColor = 'orange';
}

window.addEventListener('load', iniciar, false);