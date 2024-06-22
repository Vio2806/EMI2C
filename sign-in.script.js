document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const verifyPassword = document.getElementById('verifyPassword').value;    
    if (password !== verifyPassword) {
        alert('Passwords do not match!');
        return;
    }else{
        localStorage.setItem("usename",username);
        localStorage.setItem("email",email);
        localStorage.setItem("password",password);
        console.log("Registered");
    }
    window.location.href = "selection.html"; // Redirect to the selection page
});
