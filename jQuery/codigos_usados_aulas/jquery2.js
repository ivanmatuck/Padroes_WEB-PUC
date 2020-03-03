"use strict";

$(document).ready(function () {
  $('p').each(function (i) {
    $(this).css('color', 'white');
    if (i % 2 == 0)
      $(this).css('background-color', '#5cb85c');
    else
      $(this).css('background-color', '#d9534f');
  });
});