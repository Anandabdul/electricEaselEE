let usernameDB = [];
let emailDB = [];
let passwordDB = [];

let getUsernameDB = JSON.parse(localStorage.getItem("usernameDB"));
let getEmailDB = JSON.parse(localStorage.getItem("emailDB"));
let getPasswordDB = JSON.parse(localStorage.getItem("passwordDB"));

function signup() {

  let getUsername = document.getElementById('username').value;
  let getEmail = document.getElementById('email').value;
  let getPassword = document.getElementById('password').value;
  let getConfPassword = document.getElementById('confirmPassword').value;

  if (getConfPassword === getPassword) {
    passwordDB.push(getPassword);
    usernameDB.push(getUsername);
    emailDB.push(getEmail);

    localStorage.setItem("emailDB", JSON.stringify(emailDB));
    localStorage.setItem("passwordDB", JSON.stringify(passwordDB));
    localStorage.setItem("usernameDB", JSON.stringify(usernameDB));
    
    alert('You have Created a Account sucessfully');
    window.location.href = "./login.html";
    
  } else {
    alert('Enter the Correct password');
  }
}

function signin() {

  // let getEmail = document.getElementById('email').value;
  let getPassword = document.getElementById('password').value;
  let getUsername = document.getElementById('username').value;
  
  let loginUsername = (getUsernameDB.indexOf(getUsername));
  let loginPassword = (getPasswordDB.indexOf(getPassword));
  
  if (getUsername === getUsernameDB[loginUsername] && getPassword === getPasswordDB[loginPassword]) {
    sessionStorage.setItem("getusername", JSON.stringify(getUsername));
    window.location.href = "./electricEasel.html";
    
  } else if (getEmail === "" && getPassword === "") {
    alert('Enter your Details to login!')
  }
   else {
    alert('Your password is incorrect!\n Try one more time.')
  }
}

function forgotPassword() {
  let emailSubmit = document.getElementById('submitEmail');
  let emailIndex = getEmailDB.indexOf(emailSubmit.value);
  let passwordFound = getPasswordDB[emailIndex];
  document.getElementById('message').innerHTML = 'your Password is displayed in the  bottom right corner of the screen.';
  document.getElementById('showPassword').innerHTML = passwordFound;
  document.getElementById('signInNow').style.display = "inline-Block"
  // console.log(passwordFound);
}