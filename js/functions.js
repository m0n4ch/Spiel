$(function() {
  $('nav#menu').mmenu();
});

function testFunction(a){
  console.log("yalla");
  if (a=="management") {
    $('#ccontent').empty();
    $('#ccontent').append('<h1>test</h1>');
  }
}
