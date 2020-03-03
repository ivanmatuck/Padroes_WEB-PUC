'use strict';

/*$(document).ready(function(){
    
    $('#btn').click(function(){
        
        $('#resultado').html($('#nome').val());
        
        $('#nome').val('');
    });
});*/
/*
$(document).ready(function(){
    
    $('#resultado').text(0);
    
    $('#btn').click(function(){
        var n = parseInt($ ('#resultado').text());
        
        $('#resultado').text(n+1);
    });
});*/

/*var n = 0;

$(document).ready(function() {
    $('#btn').click(function() {
        var novoElemento = $('<p>Novo parágrafo '+(n++)+'</p>');
        $('#resultado').append(novoElemento);
    });
});*/


var n = 0;

$(document).ready(function() {
    $('#btn').click(function() {
        var novoElemento = $('<p>Novo parágrafo '+(n++)+'</p>');
        $('#resultado').append(novoElemento);
    });
});