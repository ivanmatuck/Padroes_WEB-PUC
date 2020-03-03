"use strict";

$(document).ready(function () {
  $('#box').mousemove(function(e){
    var p = $(this).position();
    $('#coords').html('('+(e.pageX-p.left)+','+(e.pageY-p.top)+')');
  });
  
  $('#logado').on('logado', function(e) {
    $(this).html('Usuário: '+e.usuario+'<br/>Senha: '+e.senha);
  })
  
  $('#logado').click(function(){
    $(this).trigger({type: 'logado', usuario:'Marcos', senha: 'Secreto'});
  });
});