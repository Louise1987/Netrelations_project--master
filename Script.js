window.addEventListener("load", function () {
    function sendData() {
    var XHR = new XMLHttpRequest();
  
// Bind the FormData object and the form element
    var FD = new FormData(form);
  
// Define what happens on successful data submission
    XHR.addEventListener("load", function(event) {
        var parser = new DOMParser();
        var result = parser.parseFromString(XHR.responseText,"text/html");
        console.log(result);
        var newCityBlock = result.getElementById('city-block');
        console.log(newCityBlock);
        cityBlock.parentNode.replaceChild(newCityBlock, cityBlock);
    });
  
// Define what happens in case of error
    XHR.addEventListener("error", function(event) {
        alert('Oops! Something went wrong.');
    });
  
// Set up our request
    XHR.open(form.getAttribute('method'), form.getAttribute('action'));
  
// The data sent is what the user provided in the form
    XHR.send(FD);
    }
   
// Access the form element...
    var form = document.getElementById("search-form");
    var cityBlock = document.getElementById('city-block');
  
// ...and take over its submit event.
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      sendData();
      });
    });

// Button
    var showContent = document.querySelector(".exp-section__heading");
    var btn = document.createElement("Button");
    btn.innerHTML = showContent.innerHTML;
    btn.classList.add('exp-section__button');
    btn.setAttribute('aria-controls','exp-section__aria-controls');
    btn.setAttribute('aria-expanded','false');
    showContent.parentNode.replaceChild(btn, showContent);

// tabindex
    hideContent.setAttribute('tabindex','-1');
    hideContent.focus();


//hides content
    var hideContent = document.querySelector(".exp-section__content");
    hideContent.classList.add('exp-section__content--hidden');

//addes an eventlistener
    btn.addEventListener('click',function(){
        hideContent.classList.toggle('exp-section__content--hidden');
        console.log(hideContent);
        var state = (btn.getAttribute('aria-expanded') == 'false' || false) ? true : false ;
        btn.setAttribute('aria-expanded', state);
    });
    
  
    
