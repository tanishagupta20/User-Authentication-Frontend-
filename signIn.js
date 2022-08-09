let arr = [];
let newArr = [];

function signIn(){
  let username = document.getElementById("usn").value;
  let password = document.getElementById("pwd").value;
  let message = document.getElementById("msg");

  if(localStorage.getItem("details")){
    arr = JSON.parse(localStorage.getItem("details"));
    newArr = arr.filter(function(det){
      if(username == det.username){
        return true;
      }
    }
  )}

  if(newArr.length == 1){
    if(newArr[0].password == password){
      message.innerHTML = "Signed In Successfully!";
    }
    else{
      message.innerHTML = "Incorrect Password";
    }
  }
  else{
    message.innerHTML = "Username doesn't exist!";
  }
}