var arr = [];
var newArr = [];

if(localStorage.getItem("details")){
  arr = JSON.parse(localStorage.getItem("details"));
}

function signUp(){
  let username = document.getElementById("usn").value;
  let name = document.getElementById("name").value;
  let password = document.getElementById("pwd").value;
  let message = document.getElementById("usrExists");

  if(username != "" || name != "" || password != ""){
    newArr = arr.filter(function(det){
      if(username == det.username){
        return true;
      }
    })
  
    if(newArr.length == 1){
      message.innerHTML = "User already exists!";
    }
    else{
      let obj = {}
      obj.username = username;
      obj.name = name;
      obj.password = password;
      arr.push(obj);
      localStorage.setItem("details", JSON.stringify(arr));
      
    }
  }

  document.getElementById("usn").value = "";
  document.getElementById("name").value = "";
  document.getElementById("pwd").value = "";
}