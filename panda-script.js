// Form animation when focusing on password
$('#password').focusin(function () {
  $('form').addClass('up');
});
$('#password').focusout(function () {
  $('form').removeClass('up');
});

// Panda eye movement
$(document).on("mousemove", function (event) {
  var dw = $(document).width() / 15;
  var dh = $(document).height() / 15;
  var x = event.pageX / dw;
  var y = event.pageY / dh;
  $('.eye-ball').css({
    width: x,
    height: y
  });
});

// Validation effect
$('.btn').click(function () {
  $('form').addClass('wrong-entry');
  setTimeout(function () {
    $('form').removeClass('wrong-entry');
  }, 3000);
});
$(document).ready(function () {
  $('#login-btn').on('click', function () {
    const message = 'Сәлеметсіз бе! Мен BeautySite сайтынан жазып отырмын.';
    const encodedMessage = encodeURIComponent(message);
    const phone = '+77472127929';
    const whatsappURL = `https://wa.me/${phone}?text=${encodedMessage}`;

    // WhatsApp-қа бағыттаймыз
    window.location.href = whatsappURL;
  });
});
