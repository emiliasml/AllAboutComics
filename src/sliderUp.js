$(document).ready(function () {
  /* The below two variables are defined for width and height of Slides */
  var IndivisualSlideWidth = $("#jq_slider ul li").width();
  var IndivisualSlideHeight = $("#jq_slider ul li").height();
  var video = $("video");
  var seconds = 6000;
  var interval = setInterval(function () {
    moveSlideBottom();
  }, seconds);

  clearInterval(interval);

  $("#selectSeconds").on("change", function (e) {
    var valueSelected = this.value;
    console.log(valueSelected);
    seconds = valueSelected;
    clearInterval(interval);
    interval = setInterval(function () {
      moveSlideBottom();
    }, seconds);
  });

  /* The auto Slider Function */
  $("#autoOptionCheckbox").change(function () {
    video.trigger("pause");
    clearInterval(interval);
    interval = setInterval(function () {
      moveSlideBottom();
    }, seconds);
    console.log("seconds=", seconds);
  });

  /* Counting the Number of Slides */
  var NumberOfSlides = $("#jq_slider ul li").length;

  /* Calculating all Slides width for UL element */
  var TotalWidthOfAllSlides = NumberOfSlides * IndivisualSlideWidth;

  /* Setting width and height for main div */
  $("#jq_slider").css({
    width: IndivisualSlideWidth,
    height: IndivisualSlideHeight,
  });

  $("#jq_slider ul").css({
    width: TotalWidthOfAllSlides,
    marginBottom: -IndivisualSlideWidth,
  });
  $("#jq_slider ul li:last-child").prependTo("#jq_slider ul");

  /* move Slide to bottom */
  function moveSlideBottom() {
    $("#jq_slider ul").animate(
      {
        bottom: +IndivisualSlideWidth,
      },
      300,
      function () {
        $("#jq_slider ul li:last-child").prependTo("#jq_slider ul");
        $("#jq_slider ul").css("bottom", "");
      }
    );
  }

  /* move  Slide to top */
  function moveSlideTop() {
    $("#jq_slider ul").animate(
      {
        bottom: -IndivisualSlideWidth,
      },
      300,
      function () {
        $("#jq_slider ul li:first-child").appendTo("#jq_slider ul");
        $("#jq_slider ul").css("bottom", "");
      }
    );
  }

  /* Handling previous Click Funtionality */
  $("a.go_prev").click(function () {
    moveSlideBottom();
  });

  /* Handling next Click Funtionality */
  $("a.go_next").click(function () {
    moveSlideTop();
  });
});

$(document).ready(function () {
  $("#dialog").dialog();
});

//  POPUP
// Function to show and hide the popup
function togglePopup() {
  $(".content-popup").toggle();
}

$(document).ready(function () {
  $(".coverImg").click(function () {
    var source = $(this).attr("src");
    console.log(source);
    $("#showImage").attr("src", source);
    $(".content-popup").toggle();
  });
});

//  TABS

jQuery(document).ready(function () {
  jQuery(".tabs .tab-links a").on("click", function (e) {
    var currentAttrValue = jQuery(this).attr("href");

    // Show/Hide Tabs
    jQuery(".tabs " + currentAttrValue)
      .show()
      .siblings()
      .hide();

    // Change/remove current tab to active
    jQuery(this)
      .parent("li")
      .addClass("active")
      .siblings()
      .removeClass("active");

    e.preventDefault();
  });
});
