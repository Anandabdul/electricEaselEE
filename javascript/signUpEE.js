


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


  // console.log(getUsername);
  // console.log(getEmail);
  // console.log(getPassword);
  // console.log(getConfPassword);


  if (getConfPassword === getPassword) {
    passwordDB.push(getPassword);
    usernameDB.push(getUsername);
    emailDB.push(getEmail);

    localStorage.setItem("emailDB", JSON.stringify(emailDB));
    localStorage.setItem("usernameDB", JSON.stringify(usernameDB));
    localStorage.setItem("passwordDB", JSON.stringify(passwordDB));

    alert('You have Created a Account sucessfully');
    window.location.href = "./login.html";

  } else {
    alert('Enter the Correct password');
  }


  console.log(usernameDB);
  console.log(emailDB);
  console.log(passwordDB);

}


function signin() {

  let getEmail = document.getElementById('email').value;
  let getPassword = document.getElementById('password').value;
  // console.log(getEmail);
  // console.log(getPassword);

  let loginEmail = (getEmailDB.indexOf(getEmail));
  let loginPassword = (getPasswordDB.indexOf(getPassword));

  // console.log(getEmailDB[loginEmail]);
  // console.log(getPasswordDB[loginPassword]);

  if (getEmail === getEmailDB[loginEmail] && getPassword === getPasswordDB[loginPassword]) {
    console.log('hi');
    window.location.href = "./electricEasel.html";

  } else if (getEmail === "" && getPassword === "") {
    alert('Enter your Details to login!')
  }
   else {
    alert('Your password is incorrect!\n Try one more time.')
  }
}