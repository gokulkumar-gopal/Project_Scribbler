function closemodal(element) {
    var modal_to_close = document.getElementById(element);
    modal_to_close.style.display = "none";
}

function openmodal(element) {
    var modal_to_close = document.getElementById(element);
    modal_to_close.style.display = "block";
}

function loadheaderfooter() {
    var headerhtml = `<label id="logo">ScriBBler</label>
    <button id="signup-btn" onclick="openmodal('signup-modal')">Sign Up</button>
    <button id="signin-btn" onclick="openmodal('signin-modal')">Sign In</button>
    <p id="logotext">Explore, Imagine, Create</p>`;

    var header = document.getElementById("header");
    header.innerHTML = headerhtml;

    var signuphtml = `<label id="get-started">Get Started</label>
    <span id="close" onclick="closemodal('signup-modal')">&times;</span>
    <hr>
    <form id="signup-form">
        <label for="name">Name</label><br>
        <input type="text" id="name" name="name" placeholder="Enter your name" required oninput="invalidInput(this)"><br>
        <label for="username">Username</label><br>
        <input type="text" id="username" name="username" placeholder="Enter your username" required oninput="invalidInput(this)"><br>
        <label for="password">Password</label><br>
        <input type="password" id="password" name="password" placeholder="Enter your password" required oninput="invalidInput(this)"><br>
        <label for="con-password>">Confirm Password</label><br>
        <input type="password" id="con-password" name="con-password" placeholder="Re-enter your password" required oninput="invalidInput(this)"><br><br>
        <button id="singup-submit-btn">Sign Up</button>
    </form>`;
    var signup = document.getElementById("signup-modal");
    signup.innerHTML = signuphtml;
    
    var signinhtml = `<label id="welcome-back">Welcome Back!</label>
        <span id="close" onclick="closemodal('signin-modal')">&times;</span>
        <hr>
        <form id="signin-form">
            <label for="username">Username</label><br>
            <input type="text" id="username" name="username" placeholder="Enter your username" required oninput="invalidInput(this)"><br>
            <label for="password">Password</label><br>
            <input type="password" id="password" name="password" placeholder="Enter your password" required oninput="invalidInput(this)"><br><br>
            <button id="signin-submit-btn">Sign In</button><br>
            <p id="not-a-member">Not a member ? <a id="open-signup" href="#" onclick="closemodal('signin-modal'); openmodal('signup-modal')">Sign Up</a></p>
        </form>`;
    var signin = document.getElementById("signin-modal");
    signin.innerHTML = signinhtml;
}