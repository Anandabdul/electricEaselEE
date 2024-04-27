
let usernameDB = JSON.parse(localStorage.getItem("usernameDB"));
let emailDB = JSON.parse(localStorage.getItem("emailDB"));
let passwordDB = JSON.parse(localStorage.getItem("passwordDB"));



function signup() {

  let getUsername = document.getElementById('username').value;
  let getEmail = document.getElementById('email').value;
  let getPassword = document.getElementById('password').value;
  let getConfPassword = document.getElementById('confirmPassword').value;


  // console.log(getUsername);
  // console.log(getEmail);
  // console.log(getPassword);
  // console.log(getConfPassword);


  if (getConfPassword == getPassword) {
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
  console.log(getEmail);
  console.log(getPassword);

  let loginEmail = (emailDB.indexOf(getEmail));
  let loginPassword = (passwordDB.indexOf(getPassword));

  console.log(loginEmail);
  console.log(loginPassword);

  if (getEmail == emailDB[loginEmail] && getPassword == passwordDB[loginPassword]) {
    window.location.href = "./electricEasel.html";

  } else {
    alert('Your password is incorrect!\n Try one more time.')
  }
}