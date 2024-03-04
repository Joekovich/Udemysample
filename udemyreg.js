var userInputField = document.getElementById("userInput");
var userInputFieldA = document.getElementById("userInputPassword");
var userInputFieldB = document.getElementById("userInputCPassword");
var submitButton = document.getElementById("submitButton");
var submitButtonb = document.getElementById("submitButtonb")
var outputMessage = document.getElementById("outputMessage");
var outputMessageb = document.getElementById("outputMessageb");
var userInputFieldC = document.getElementById("userEmail");

var check = false

// Add an event listener to the submit button
submitButton.addEventListener("click",function (){
    validate()
    if(check === true){
        return window.location.href = "./udemy.html"
    }
}) 


function validate() {
    // Get the user's input from the input field
    var name = userInputField.value;
    var password = userInputFieldA.value;
    var ConfirmPassword = userInputFieldB.value;
    var email = userInputFieldC.value;

   

    // Check if the user entered something
    if (name.trim() !== "") {
        // Display a message with the user's input
        outputMessage.textContent = "Hello! " + name +" Welcome to our website.";
        check = true
    } else {
        // Display an error message if the user didn't enter anything
        outputMessage.textContent =  alert("Please enter your name.");
        check = false
    }

    if (password == ConfirmPassword && password.trim() !== "" && ConfirmPassword.trim() !== "") {
        outputMessageb.textContent = alert("password correct... ")
        check = true
    }else{
        outputMessageb.textContent = alert('Password mismatch ' + 'check password and try again..!!!')
        check = false
    }    

    if(email.trim() !== "") {
        outputMessageb.textContent = 'E-mail correct'
        check = true
    }else{
        outputMessageb.textContent = 'Email incorrect ' + 'check email and try again'
    }
};