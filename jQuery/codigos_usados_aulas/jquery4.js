"use strict";

/* $(document).ready(function () {
  $('p').each(function(){
    if($(this).is('.texto'))
      $(this).css('background-color', 'cyan');
    });
  }); */
  
  $(document).ready(function() {
    var lista = $('p').map(function() {
      return $(this).attr('id');
    }).toArray().join(', ');

    $('#resultado').html(lista);
  });
