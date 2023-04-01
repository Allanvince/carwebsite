const firebaseConfig = {
  apiKey: "AIzaSyADertTu1hAMJDn1AouOWnyGaZcYb2oYj0",
  authDomain: "webchat-996fd.firebaseapp.com",
  databaseURL: "https://webchat-996fd-default-rtdb.firebaseio.com",
  projectId: "webchat-996fd",
  storageBucket: "webchat-996fd.appspot.com",
  messagingSenderId: "989239708495",
  appId: "1:989239708495:web:cbe658a0f83999d301133a"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth =  firebase.auth();
  //create reference to your database
//   var webChatDb = firebase.database().ref('form')
  
// var form = document.getElementById('form')
// const errorElemnt = document.getElementById('error')

// form.addEventListener("submit", (e) =>{
//     let messages = []

//     if (email.value == '' || email.value == null){
//         messages.push("Email is required")
//     }
//     if (password.value == '' || password.value == null){
//         messages.push("Password is required")
//     }
//     if (messages.length > 0){
//         e.preventDefault()
//         errorElemnt.innerText = messages.join(', ')
//     }
// })
function  signIn(){
    var email = document.getElementById("email").value;
    var password  = document.getElementById("password").value;
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }

function errEmail(){
    document.getElementById('errorEmail').style.display = 'block';
}
function meso() {
    document.getElementById("errorEmail").style.display = "none";
}
function msg() {
    document.getElementById("errorPass").style.display = "none";
}
function errPass(){
    document.getElementById('errorPass').style.display = 'block';
}

// function validateEmail(email){
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
//         return (true)
//     }
//     else{
//         alert("Wrong email syntax")
//         return false
//     }
// }
// function validatePassword(){
//     if (/^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-zA-Z]).{8,}$/.test(password.value)){
//         return (true)
//     }
//     else{
//         return false
//     }
// }

// function validate(){
//     const email = document.querySelector('#email')
//     const password = document.querySelector('#pass')
//     const errorMessage = document.querySelector('.errorMessage')

//     if (email.value.length <=3 || password.value.length <=3){
//         errorMessage.style.display = 'block'
//         return false
//     }
//     else{
//         return true
//     }
// }

// active user to homepage
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })
