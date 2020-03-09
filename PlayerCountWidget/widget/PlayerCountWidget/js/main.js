function reloadPlayers() { // this wraps the code in a function so that we can call it to reload later on
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    var myObj = JSON.parse(this.responseText);
    document.getElementById('players').innerHTML = myObj.playerCount; // specify the object here
};
xmlhttp.open('GET', 'https://underdonegaming.com/gangwars/playerswatch.php', true); // switch this URL to a url you'd like to grab from
xmlhttp.send(); 
}

window.onload = function() {
	reloadPlayers(); 
	setInterval(reloadPlayers, 3000); // reloads every 3 seconds
	
};
