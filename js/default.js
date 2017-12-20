"use strict"; // JavaScript to be excecuted in strict mode.

// Google Maps API section, Reference [8]

  function initMap(){
    var myLocation = {lat: 52.6369, lng: -1.1398};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: myLocation
    });

    var marker = new google.maps.Marker({
      position: myLocation,
      map: map,
      title: 'Leicester'
    });
  }


// Mobile navigation from labs
(function(){

  let menuButton = document.getElementById("menu");
  let navMenu = document.getElementById("nav-menu");

  menuButton.addEventListener("click", toggleMenu);

  let toggle = false; // hidden at first
  function toggleMenu(){
    if (toggle){ // true: it's visible
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
  

// Employment Popup Section

// LASA Employment Details - Commented

(function(){
  let popup = document.getElementById("popup-id1"); // The div class that includes all the popup content.
  let openPopup = document.getElementById("employer1"); // LASA Employer
  let span = document.getElementsByClassName("close")[0]; // Span close link

  openPopup.addEventListener("click", togglePopup); // Adding Event Listener to the logo.
  span.addEventListener("click", spanClose); // Adding Event Listener to the close x.
  
  // Open popup, by clicking on the logo.
  function togglePopup(){
    popup.classList.add("show-popup") // Add class "show-popup" which ovverrides the display none to display block.
  }
  
  // Close window with x, located on the top right.
  function spanClose(){
    popup.classList.remove("show-popup") // Remove class "show-popup", reverting back to display none.
  }
  
  // Close window with escape key
  window.document.addEventListener('keydown', function(evt){ // Accessibility feature Reference [6] (Keyboard controls)
    if (evt.key == 'Escape' || evt.keyCode == 27){	// If escape is pressed or keycode 27 (escape) Reference [7]
      popup.classList.remove("show-popup")					// Close window.
    } // Keycode is deprecated, but still included it with a logical or
  })  // in case some users visiting the site will use an old browser.
  
  // Close window by clicking outside it.
  window.document.addEventListener("click", function(event){ // entire window has a click event listener.
    if (event.target == popup){		   				// If clicking outside popup-content 
      popup.classList.remove("show-popup") 	//(on popup which is around it), close it.
    }
  }) 
})();


// GM Employment Details - reapeat from LASA example
(function(){
  let popup = document.getElementById("popup-id2"); 				// Linking it to the next id.
  let openPopup = document.getElementById("employer2"); 		// Linking it to the next employer.
  let span = document.getElementsByClassName("close2")[0]; 	// Linking to the next close.
  
  openPopup.addEventListener("click", togglePopup);
  span.addEventListener("click", spanClose);
  
  function togglePopup(){
    popup.classList.add("show-popup")
  }
  
  function spanClose(){
    popup.classList.remove("show-popup")
  }
  
  window.document.addEventListener('keydown', function(evt){
    if (evt.key == 'Escape' || evt.keyCode == 27){
      popup.classList.remove("show-popup")
    }
  })

  window.document.addEventListener("click", function(event){
    if (event.target == popup){
      popup.classList.remove("show-popup") 
    }
  })
})();


// CODE Employment Details - repeat from LASA example
(function(){
  let popup = document.getElementById("popup-id3"); 				// Linking it to the next id.
  let openPopup = document.getElementById("employer3"); 		// Linking it to the next employer.
  let span = document.getElementsByClassName("close3")[0]; 	// Linking to the next close.
  
  openPopup.addEventListener("click", togglePopup);
  span.addEventListener("click", spanClose);
  
  function togglePopup(){
    popup.classList.add("show-popup")
  }
  
  
  function spanClose(){
    popup.classList.remove("show-popup")
  }
  
  window.document.addEventListener('keydown', function(evt){
    if (evt.key == 'Escape' || evt.keyCode == 27){
      popup.classList.remove("show-popup")					
    }
  })
  
  window.document.addEventListener("click", function(event){
    if (event.target == popup){
      popup.classList.remove("show-popup") 
    }
  })
})();