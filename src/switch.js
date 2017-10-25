const fluidicSwitch = {
  init(defaultAudience = '') {

		// Define variables
	  var dynamicContent;
	  var dynamicKey;
	  var urlParameter;
	  var formId;

	  // Parse the URL parameter
	  function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	  }

	  // Replace content dynamically using query string
	  var switchContent = document.getElementsByClassName("switch-content");
	  for(var i = 0; i < switchContent.length; i++){

	    dynamicKey = switchContent[i].getAttribute('data-switch-key');

	    if (dynamicKey) dynamicContent = getParameterByName(dynamicKey);

	    if (dynamicContent) switchContent[i].textContent = dynamicContent;
	  }


	  // Update audience from query sting parameter
	  var audience = getParameterByName('audience');

	  // Set default audience if necessary
	  if(!audience) audience = defaultAudience;

	  // Replace with content from data-audience-{value} in html code when query string audience={value}
	  var switchAudience = document.getElementsByClassName("switch-audience");
	  for(var i = 0; i < switchAudience.length; i++){
	    if(audience !== defaultAudience) switchAudience[i].textContent = switchAudience[i].getAttribute('data-audience-' + audience);
	  }

    // Show elements based on audience from url parameter
    var switchShow = document.getElementsByClassName('switch-show');
    for(var i = 0; i < switchShow.length; i++){
      switchShow[i].style.display = 'none';
      if(switchShow[i].getAttribute('data-switch-audience') === audience) switchShow[i].style.display = 'block';
    }

    // Hide elements based on audience from url parameter
    var switchHide = document.getElementsByClassName('switch-hide');
    for(var i = 0; i < switchHide.length; i++){
      switchHide[i].style.display = 'none'; // Hidden by default to avoid flicker
      if(switchHide[i].getAttribute('data-switch-audience') !== audience) switchHide[i].style.display = 'block';
    }

	  // Populate form fields
	  var formInputs = document.getElementsByTagName('input');

	  for(var i = 0; i < formInputs.length; i++) {

	    formId = formInputs[i].getAttribute('id');

	    if (formId) urlParameter = getParameterByName(formId);
	    if (urlParameter) document.getElementById(formId).value = urlParameter;
	  }

	}

};

module.exports = fluidicSwitch;
