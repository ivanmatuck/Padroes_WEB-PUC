"use strict";

$(document).ready(function () {

  $('#btnTeste').click(function () {

    $('#resultado').html('<h2>input</h2>');
    $('#resultado').append(
      $('<p/>', {
        html: 'val: ' + $('#nome').val()
      })
    );
    $('#resultado').append(
      $('<p/>', {
        html: 'attr: ' + $('#nome').attr('value')
      })
    );
    $('#resultado').append(
      $('<p/>', {
        html: 'prop: ' + $('#nome').prop('value')
      })
    );

    $('#resultado').append('<h2>select</h2>');
    $('#resultado').append('<p>val: ' + $('#estado').val() + '</p>');
    $('#resultado').append('<p>attr: ' + $('#estado').attr('value') + '</p>');
    $('#resultado').append('<p>prop: ' + $('#estado').prop('value') + '</p>');

    $('option').each(function () {
      $('#resultado').append('<p>' + $(this).val() + ': ' + $(this).attr('selected') + "/" + $(this).prop('selected') +
        '</p>');
    });

    $('#resultado').append('<h2>checkbox</h2>');
    $('#resultado').append('<p>val: ' + $('#filhos').val() + '</p>');
    $('#resultado').append('<p>attr: ' + $('#filhos').attr('checked') + '</p>');
    $('#resultado').append('<p>prop: ' + $('#filhos').prop('checked') + '</p>');

  });



  $('body').append(
    $('<div/>', {
      class: 'panel panel-primary'
      , style: 'margin-top: 2em'
      , id: 'painel'
     }).append(
      $('<div/>', {
        class: 'panel-heading'
        , html: 'teste'
      })
    ,
      $('<div/>', {
        class: 'panel-body'
        , html: 'meu novo painel'
      })
    )
  );

  $('body').append(
    $('<div class="panel panel-info" style="margin-top: 2em"  id="painel2"><div class="panel-heading">teste></div><div class="panel-body">meu segundo painel</div></div>') );


});