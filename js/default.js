(function(){

  let menuButton = document.getElementById("menu");
  let navMenu = document.getElementById("nav-menu");

  menuButton.addEventListener("click", toggleMenu);

  let toggle = false; // hidden at first
  function toggleMenu(){
    if (toggle) { // true: it's visible
      navMenu.classList.remove("show-menu"), // hide it
      toggle = false
			this.style.background = "#c9ffe6" // Original colour.
    }
    else { // false: it's hidden
      navMenu.classList.add("show-menu"), // show it
      toggle = true
			this.style.background = "#7affc1"; // Brighter highlighted colour.
    }
  }

})();