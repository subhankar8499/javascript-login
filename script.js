var database = [
	{
		username: "andrei",
		password: "supersecret"
	},
	{
		username: "sally",
		password: "123"
	},
	{
		username: "ingrid",
		password: "777"
	}
];

var newsfeed = [
	{
		username: "oby",
		password: "So tired"
	},
	{
		username: "sally",
		password: "so coool"
	},
	{
		username: "mitch",
		password: "Not in the mood"
	}
];

function isUserValid(username, password){
	for (var i = 0; i < database.length ; i++){
		if (database[i].username === username && 
			database[i].password === password) {
				return true;
		}
	}
	return false;
}

function signIn(username, password){
	if (isUserValid(username, password)) {
		console.log(newsfeed);
	} else {
		alert("Sorry, wrong credentials");
	}
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);