

$(document).ready(function(event) {

  $('#btn').click(function() {
    var question = $('input#textBoxAlt').val();
    $('.user-question').text(question);

    // var div = $("#line");
    // var button = $("#btn");
    // var bar = $(".bar");
    // var input = $(".text-box ");
    // var label = $(".text-box-label");
    // var html = $("html, body");
    // input.hide();
    // bar.hide();
    // label.hide();
    // div.show();
    // div.animate({height: '10px'}, 200).animate({width: '680px'}, 2000).animate({height: '450px'}, 1000);
    // // div.animate({width: '650px'}, 800);
    // // div.animate({rotateX: "90deg"}, "slow");
    // html.animate({scrollTop: $(".card-images").offset().top}, 2000);
    // button.animate({right: '-900px'}, 2000);

    event.preventDefault();
  });




});
