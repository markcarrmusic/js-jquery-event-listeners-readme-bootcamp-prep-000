//define functions here

function getIt() {
  $('p').on('click', function(key) {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $(document).on('keydown', function(key) {
    if(key === 103) {
      alert('G was pressed!');
    }
  });
}

$(document).ready(function(){

// call functions here

});
