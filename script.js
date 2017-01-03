$(document).ready(function() {

  function pressKey(key, id) {
    $(window).keydown(function(event) {
      if (event.keyCode === key) {
        document.getElementById(id).play();
      }
    })
  }

  pressKey(65, '037')
  pressKey(87, '038')
  pressKey(83, '039')
  pressKey(68, '040')
  pressKey(82, '041')
  pressKey(70, '042')
  pressKey(84, '043')
  pressKey(71, '044')
  pressKey(72, '045')
  pressKey(85, '046')
  pressKey(74, '047')
  pressKey(73, '048')
  pressKey(75, '049')
  pressKey(79, '050')
  pressKey(76, '051')
  pressKey(186, '052')
  pressKey(219, '053')
  pressKey(222, '054')

  function clickDiv(div, id) {
    $(div).on('click', function() {
      document.getElementById(id).play();
    })
  }

  clickDiv('#a', '037')
  clickDiv('#w', '038')
  clickDiv('#s', '039')
  clickDiv('#d', '040')
  clickDiv('#r', '041')
  clickDiv('#f', '042')
  clickDiv('#t', '043')
  clickDiv('#g', '044')
  clickDiv('#h', '045')
  clickDiv('#u', '046')
  clickDiv('#j', '047')
  clickDiv('#i', '048')
  clickDiv('#k', '049')
  clickDiv('#o', '050')
  clickDiv('#l', '051')
  clickDiv('#;', '052')
  clickDiv('#[', '053')
  clickDiv('#\'', '054')
})
