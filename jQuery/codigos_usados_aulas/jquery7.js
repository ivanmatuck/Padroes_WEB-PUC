"use strict";

/* $(document).ready(function(){
  $('#btn').click(function(){
    $.get('dados_serv7.html', function(dados){
      $('#resultados').html(dados);
    })
    .done(function(){
      console.log('done')
    })
    .fail(function(){
      console.log('falha')
    })
    .always(function(){
      console.log('sempre')
    })
  });
}); */
/* 
$(document).ready(function(){
  $('#btn').click(function(){
      $('#resultados').load('dados_serv7.html');
  });
}); */
/* 
$(document).ready(function(){
  $('#btn').click(function(){
      $.getJSON('dados7.json', function(user){
        $('#resultados').html(
          '<dl>' + 
          '<dt>Usuario:</dt><dd>' + user.usuario + '</dd>' +
          '<dt>Senha: </dt><dd>' + user.senha + '</dd>' + 
          '</dl>'
        );
      });
  });
}); */


$(document).ready(function(){
  $('#btn').click(function(){
      $.getScript('jquery8a.js', function(){
        alerta();
      });
  });
});