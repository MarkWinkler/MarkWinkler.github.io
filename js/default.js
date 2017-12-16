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

	
// LASA Employement Details
(function(){
	let popup = document.getElementById("popup-id1"); // The div class that includes all the popup content.
	let openPopup = document.getElementById("employer1"); // LASA Employer
	let span = document.getElementsByClassName("close")[0]; // Span close link

	openPopup.addEventListener("click", togglePopup); // Adding Event Listener to the logo.
	span.addEventListener("click", spanClose); // Adding Event Listener to the close x.
	
	function togglePopup(){
		popup.classList.add("show-popup") // Add class "show-popup" which ovverrides the display none to display block.
	}
	
	
	function spanClose() {
		popup.classList.remove("show-popup") // Remove class "show-popup", reverting back to display none.
	}
	
	
	window.document.addEventListener("click", function(event){ // entire website has an event listener.
  	if (event.target == popup) {
			popup.classList.remove("show-popup") // If clicking outside the popup, close it.
    }
	})
	
})();

// GM Employement Details
(function(){
	let popup = document.getElementById("popup-id2"); // Linking it to the next id.
	let openPopup = document.getElementById("employer2"); // Linking it to the next employer.
	let span = document.getElementsByClassName("close2")[0];
	
	openPopup.addEventListener("click", togglePopup);
	span.addEventListener("click", spanClose);
	
	function togglePopup(){
		popup.classList.add("show-popup")
	}
	
	
	function spanClose() {
		popup.classList.remove("show-popup")
	}
	
	
	window.document.addEventListener("click", function(event){
  	if (event.target == popup) {
			popup.classList.remove("show-popup") 
    }
	})
	
})();


// CODE Employement Details
(function(){
	let popup = document.getElementById("popup-id3"); // Linking it to the next id.
	let openPopup = document.getElementById("employer3"); // Linking it to the next employer.
	let span = document.getElementsByClassName("close3")[0];
	
	openPopup.addEventListener("click", togglePopup);
	span.addEventListener("click", spanClose);
	
	function togglePopup(){
		popup.classList.add("show-popup")
	}
	
	
	function spanClose() {
		popup.classList.remove("show-popup")
	}
	
	
	window.document.addEventListener("click", function(event){
  	if (event.target == popup) {
			popup.classList.remove("show-popup") 
    }
	})
	
})();