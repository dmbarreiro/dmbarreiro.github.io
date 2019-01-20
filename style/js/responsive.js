$(document).ready( () => {
  // Addapt webpage for small screen/mobile platforms.
  var smMediaQuery = window.matchMedia("screen and (min-width: 768px)");
  smMediaQuery.addListener(handleSizeChange);
  handleSizeChange(smMediaQuery);

  function handleSizeChange(mediaQuery) {
      var jumbotron = document.getElementById("jumbotron");
      if (mediaQuery.matches) {
        jumbotron.classList.remove("jumbotron-fluid");
        jumbotron.classList.remove("my-4");
        jumbotron.classList.remove("pt-3");
        jumbotron.classList.add("jumbotron");
        jumbotron.classList.add("pt-5");
      } else {
        jumbotron.classList.remove("jumbotron");
        jumbotron.classList.remove("pt-5");
        jumbotron.classList.add("jumbotron-fluid");
        jumbotron.classList.add("my-4");
        jumbotron.classList.add("pt-3");
      }
  }
})

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('to-top-arrow').style.display = "block";
  } else {
    document.getElementById('to-top-arrow').style.display = "none";
  }
}

window.onscroll = function() {scrollFunction()};
