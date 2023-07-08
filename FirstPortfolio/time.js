var noon = 12;

var showCurrentTime = function() {
	// pull clock id, set in html
	var clock = document.getElementById('clock');
	var currentTime = new Date();

	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds(); 

	// set AM or PM if not using military
	//var meridian = (hours < noon) ? "AM" : "PM";
	//if (hours > noon) { hours = hours - 12; }
	
	// set double digits for minutes and seconds
	if (hours < 10) { hours = "0" + hours; }
	if (minutes < 10) { minutes = "0" + minutes; }
	if (seconds < 10) { seconds = "0" + seconds; }

	// put together time string
	//var clockTime = hours + ':' + minutes + ':' + seconds + ' ' + meridian + '!';
	var clockTime = hours + ':' + minutes + ':' + seconds;

	clock.textContent = clockTime;
};

showCurrentTime();


// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(showCurrentTime, oneSecond);