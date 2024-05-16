function checkSession() {
  let user = JSON.parse(sessionStorage.getItem('getusername'));
  if (user == null) {
    window.location.href = "./login.html";
  }
}

function signoutUser() {
  sessionStorage.removeItem("getusername");
  window.location.href = "./login.html";
}