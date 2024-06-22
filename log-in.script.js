document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if ((username !== localStorage.getItem("username"))||(password !== localStorage.getItem("password"))) {
        alert('Passwords do not match!');
        return;
    }else{
        alert('Login Succesfull');
        localStorage.setItem("login",true);
    }
    window.location.href = "selection.html"; // Redirect to the selection page

    e.preventDefault();

});
