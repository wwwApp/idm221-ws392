function init() {
  //console.log("detail page loaded");
  /* $(".work-detail-item")
    .each(function(index) {
      $(this)
        .delay(500 * index)
        .fadeIn(1000);
    }); */
  /* $(".work-detail-item").each(function(index) {
    $(this).delay(500 * index).addClass('is-loading');
  }); */

  // Give fadeIn effect to each item in work detail in order
  $(function() {
    var delays = [0, 150, 300, 450];
    $(".work-detail-item").each(function(i) {
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

/* Prev & Next arrow */
//Pre-defined array of available work pages
const works = [
  "wordpress.html",
  "aurora.html",
  "hexagon.html",
  "papermill.html",
  "ghibli.html"
];

function toPrev() {
  // Find the current page/file name and get the index for next page in the array
  var currentPath = location.href.split("/").slice(-1)[0];
  var prevIndex = works.indexOf(currentPath) - 1;
  var prevPath = "";
  // If out of index, go back to the last page
  if (prevIndex < 0) prevPath = works[works.length - 1];
  else prevPath = works[prevIndex];

  location.href = prevPath;
}

function toNext() {
  var currentPath = location.href.split("/").slice(-1)[0];
  var nextIndex = works.indexOf(currentPath) + 1;
  var nextPath = "";
  // If out of index, go back to the first page
  if (nextIndex == works.length) nextPath = works[0];
  else nextPath = works[nextIndex];

  location.href = nextPath;
}

/* Funtion to return Home */
function toHome() {
  location.href = "../../index.html";
}
