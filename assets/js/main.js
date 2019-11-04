function init() {
  $(function() {
    var delays = [0, 150, 300];
    $(".about .work-desc-item").each(function(i) {
      setTimeout(
        function(item) {
          item.addClass("is-loading");
        },
        delays[i],
        $(this)
      );
    });
  });
}

init();

/* Scroll snap using JQuery plugin + timeline animation */
const circles = document.querySelectorAll(".circle");
const moreButtons = document.querySelectorAll(".more");
const workDescriptions = document.querySelectorAll(".work-desc");

$(() => {
  $.scrollify({
    section: ".work",
    after: () => {
      // Circles on timeline react to the current page index
      for (var i = 0; i < circles.length; i++) {
        if (circles[i].classList.contains("is-current-circle"))
          circles[i].classList.remove("is-current-circle");
      }

      // currentIndex returns index of current div (starting from 0)
      var currentIndex = $.scrollify.currentIndex();
      circles[currentIndex].classList.add("is-current-circle");

      var currentDesc = $.scrollify
        .current()
        .attr("class")
        .split(" ")[1];
      var currentDescItem = "." + currentDesc + " .work-desc-item";
      $(function() {
        var delays = [0, 80, 160];
        $(currentDescItem).each(function(i) {
          $(this);
          setTimeout(
            function(item) {
              item.addClass("is-loading");
            },
            delays[i],
            $(this)
          );
        });
      });
    }
  });
});

/* Circle + logo click to scroll */
function moveTo(selectedDiv) {
  // selectedDiv = index of div starting from 1
  $.scrollify.move("#" + selectedDiv);
}

/* Slide In Transition to Detail Page */
function moveToDetail(pagePath) {
  location.href = "assets/page/" + pagePath;
}
