const noAccountBtn = document.querySelector("#sign_in_link");
const emailBox = document.querySelector("#email_box");
const passwordBox = document.querySelector("#password_box");
const usernameBox = document.querySelector("#username_box");
const signUpTxt = document.querySelector("#sign_up");
const register = document.querySelector("#register");
const signUpBtn = document.querySelector("#sign_up_btn");
const signUpContainer = document.querySelector("#sign_up_container");
let isSignUp = true;

noAccountBtn.addEventListener("click", () => {
    if (isSignUp) {
        emailBox.style.display = "none";
        signUpTxt.textContent = "Sign In";
        noAccountBtn.textContent = "DOESN'T HAVE AN ACCOUNT?";
        signUpBtn.textContent = "Sign In";
        isSignUp = false;
    } else {
        emailBox.style.display = "block";
        signUpTxt.textContent = "Sign Up";
        noAccountBtn.textContent = "ALREADY HAVE AN ACCOUNT?";
        signUpBtn.textContent = "Sign Up";
        isSignUp = true;
    }
});

function registerConfirmation() {
    var body = document.querySelector("body");
    signUpContainer.style.display = "none";
    register.style.display = "flex";
    body.style.backgroundImage = "url('file:///C:/Users/adrian/Downloads/Pet/Pet/images/pawsbg2.png')";
}

signUpBtn.addEventListener("click", () => {
    let userEmail = emailBox.value;
    let userPassword = passwordBox.value;
    let userName = usernameBox.value;
    if (isSignUp) {
        if (!userEmail || !userPassword || !userName) {
            alert("Please fill out all the required fields.");
            return;
        } else {
            // Add this line to redirect to categories.html
            window.location.href = "categories.html";
        }
    } else {
        if (!userPassword || !userName) {
            alert("Please fill out all the required fields.");
            return;
        } else {
            // Add this line to redirect to categories.html
            window.location.href = "categories.html";
        }
    }
});
