$(function(){
  initClickTracking: function() {
    $("body").on("mousedown", "[data-track-click=true]", function() {
      var element = $(this);
      iba.GA.trackEvent(element.data("ga-category"), element.data("ga-action"), element.data("ga-label"), element.data("ga-value"), element.data("ga-noninteraction"));
      element.data("track-click", false);
    });
  }
});
window._gaq.push(['_trackEvent', category, action, label, value, noninteraction]);


