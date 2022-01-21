function openDay(evt, dayName) {
  var i, tabpanel, tablink;
  tabpanel = document.getElementsByClassName("tab-panel");
  for (i = 0; i < tabpanel.length; i++) {
    tabpanel[i].style.display = "none";
  }
  tablink = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablink.length; i++) {
    tablink[i].className = tablink[i].className.replace(" active", "");
  }
  document.getElementById(dayName).style.display = "block";
  evt.currentTarget.className += " active";
}

(function ($) {
  $(document).ready(function () {
    var fullDate = new Date();
    var dayOfWeek = fullDate.getDay();

    // changing Sunday to 7 (instead of 0)
    if (dayOfWeek == 0) {
      dayOfWeek = 7;
    }

    $(".tab-link:nth-child(" + dayOfWeek + ")").addClass("current");
    $(".tab-panel:nth-child(" + dayOfWeek + ")").addClass("current");
  });
})(jQuery);

console.log("Weekly schedule loaded");
