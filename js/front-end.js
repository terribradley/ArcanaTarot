$(document).ready(function() {
  $('.card-images').hide();
  $('.card-readings').hide();
  $('.card-info:first-of-type p').prepend('<div><h2>The Present<br>This card reveals influences, people, and factors currently involved with your question or situation </h2></div>');

  $('.card-info:nth-of-type(2) p').prepend('<div><h2>Challenges<br> This card reveals the nature of the obstacles immediately before you.</h2></div>');

  $('.card-info:nth-of-type(3) p').prepend('<div><h2>The Distant Past<br>Events that took place at leats six month ago that contribute to the situation.</h2></div>');

  $('.card-info:nth-of-type(4) p').prepend('<div><h2>The Recent Past<br>Reveals a recent influence or event which is coming to an end.</h2></div>');

  $('.card-info:nth-of-type(5) p').prepend('<div><h2>Goals and Destiny<br>Shows your desired goals and aims, and reveals the best outcome that can be achieved in your current situation.</h2></div>');

  $('.card-info:nth-of-type(6) p').prepend('<div><h2>Potential<br>Reveals a new influence that will soon be brought to bear in your life.</h2></div>');

  $('.card-info:nth-of-type(7) p').prepend('<div><h2>The Querant(you)<br>This card reveals your negative feelings, and provides additional information about how you feel in your present environment.</h2></div>');

  $('.card-info:nth-of-type(8) p').prepend('<div><h2>Friends and Family<br>This card shows your influence on the people around you, and their influence on you. It also shows how they fit into your home, work, and surroundings.</h2></div>');

  $('.card-info:nth-of-type(9) p').prepend('<div><h2>Hopes and Fears<br>Your inner emotions.</h2></div>');

  $('.card-info:nth-of-type(10) p').prepend('<div><h2>The Final Outcome<br> It is the product of all the other influences shown in this spread.</h2></div>');


  $('form').submit(function(event) {
    event.preventDefault();
    var question = $('#textBoxAlt').val();
    $('.user-question').append('<h1>The readings below pertain to what was on your mind: ' + question + '</h1>');
    $('form').empty();
    var div = $('#line');
    // div.show();
    // div.addClass('grow');
    $('#show').show();
  });

  $('#show').click(function(event) {
    event.preventDefault();
    $(this).toggleClass('rotated');
    $('.card-images').show();
    $("html, body").animate({
			scrollTop: $(".card-images").offset().top + 180
		}, 3000);
  });

  $('#interpret').click(function(event) {
    event.preventDefault();
    $(this).toggleClass('rotated');
    $('.card-readings').show();
    $("html, body").animate({
      scrollTop: $(".card-readings").offset().top + 150
    }, 2000);
  });

  $('#another-reading').click(function() {
    location.reload();
  });







});
