document.addEventListener('DOMContentLoaded', (event) => {
    const loginButton = document.getElementById("button");
    const testButton = document.getElementById("test");
    const authForm = document.getElementById("authForm");
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Sign up function
    const signUp = () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            alert("User is Already a Member!");

        } else {
            users.push({ email: email, password: password });
            localStorage.setItem('users', JSON.stringify(users));

            alert("Sign up successful");
        }
        
    }

    // Login function
    const loginFunc = (e) => {
        e.preventDefault(); // Prevent form from submitting and reloading the page

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            alert("Login successful");
        } else {
            alert("Wrong email or password");
        }
    }

    testButton.addEventListener("click", signUp);
    authForm.addEventListener("submit", loginFunc);
});