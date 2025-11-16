document.getElementById("toSignup").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.remove("hidden");
});

document.getElementById("toLogin").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
});

// Basic form validation and security checks
document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (validateEmail(email) && validatePassword(password)) {
        alert("Login Successful!");
    } else {
        alert("Invalid email or password");
    }
});

document.getElementById("signup").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    if (validateEmail(email) && validatePassword(password) && username.length > 3) {
        alert("Signup Successful!");
    } else {
        alert("Please provide valid inputs");
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Password validation function (min length 6)
function validatePassword(password) {
    return password.length >= 6;
}
