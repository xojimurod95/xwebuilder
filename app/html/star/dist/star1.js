$('#star1').starrr({
  change: function (e, value) {
    if (value) {
      $('.your-choice-was').show();
      $('.choice').text(value);
    } else {
      $('.your-choice-was').hide();
    }
  }
});
$('#star2').starrr({
  change: function (e, value) {
    if (value) {
      $('.your-choice-wass').show();
      $('.choices').text(value);
    } else {
      $('.your-choice-wass').hide();
    }
  }
});
$('#star3').starrr({

  change: function (e, value) {
    if (value) {
      $('.your-choice-wasss').show();
      $('.choicess').text(value);
    } else {
      $('.your-choice-wasss').hide();
    }
  }
});
// /*  */

var $s2input = $('#star2_input');
$('#star5').starrr({
  // min: 0.5,
  // max: 10,
  rating: $s2input.val(),
  change: function (e, value) {
    $s2input.val(value).trigger('input');
  }
});


(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-39205841-5', 'dobtco.github.io');
ga('send', 'pageview');