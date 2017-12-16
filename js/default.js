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
	
	
	let popup = document.getElementById("popup-id");
	let openPopup = document.getElementById("employer1");
	let span = document.getElementsByClassName("close")[0];
	
	openPopup.addEventListener("click", togglePopup);
	span.addEventListener("click", spanClose);
	
	function togglePopup(){
			popup.classList.add("show-popup")
		return false
		}
	
	
	function spanClose() {
			popup.classList.remove("show-popup")
	}
	
	
	window.document.addEventListener("click", function(event){
    if (event.target == popup) {
        popup.classList.remove("show-popup")
    }
})
	
	
