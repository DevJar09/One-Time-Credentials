const generateBtn = document.getElementById("generate-btn");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const loginPageBtn = document.getElementById("login-page-btn");

// Function to generate a random username and password
function generateAccount() {
	const username = Math.random().toString(36).substring(2, 10);
	const password = Math.random().toString(36).substring(2, 10);
	document.getElementById("username").value = username;
	document.getElementById("password").value = password;
}

// Function to check if the login credentials are correct
function login() {
	const loginUsername = document.getElementById("login-username").value;
	const loginPassword = document.getElementById("login-password").value;
	const generatedUsername = document.getElementById("username").value;
	const generatedPassword = document.getElementById("password").value;

	if (loginUsername === generatedUsername && loginPassword === generatedPassword) {
		window.location.href = "page3.html";
	} else {
		alert("Incorrect username or password.");
	}
}

// Function to logout the user and generate a new account
function logout() {
	window.location.href = "index.html";
}

// Event listeners
generateBtn.addEventListener("click", generateAccount);
loginBtn.addEventListener("click", login);
logoutBtn.addEventListener("click", logout);
loginPageBtn.addEventListener("click", function() {
	window.location.href = "page2.html";
});