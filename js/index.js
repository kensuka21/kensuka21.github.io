var navShow = false

$(window).scroll(function() {
  if (window.scrollY > 207 && window.innerWidth >= 1200 && !navShow) {
    navShow = true
    $( "#banner-name" ).css("visibility", "hidden")
    $( "#name" ).fadeIn( "slow" )
  }
  if (window.scrollY <= 207 && navShow) {
    navShow = false
    $( "#banner-name" ).css("visibility", "visible")
    $( "#name" ).fadeOut( "slow" )
  }
})
