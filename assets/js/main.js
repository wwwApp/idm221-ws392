function init() {
  $(function() {
    var delays = [0, 150, 300];
    $(".work--about .work-desc-item").each(function(i) {
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
const works = document.querySelectorAll(".work");

$(() => {
  $.scrollify({
    section: ".work",
    after: () => {
      // add/remove aria and class for current items
      for (var i = 0; i < works.length; i++) {
        circles[i].classList.remove("is-current-circle");
        circles[i].removeAttribute("aria-current");
        works[i].setAttribute("aria-hidden", "true");
      }

      // currentIndex returns index of current div (starting from 0)
      var currentIndex = $.scrollify.currentIndex();
      circles[currentIndex].classList.add("is-current-circle");
      circles[currentIndex].setAttribute("aria-current", "step");
      works[currentIndex].removeAttribute("aria-hidden");

      // loading effect
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
