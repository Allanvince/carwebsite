const firebaseConfig = {
    apiKey: "AIzaSyCYQF645Tt7eo4eEXiuQwn90TNaSOvKHn0",
    authDomain: "web-chat-54972.firebaseapp.com",
    databaseURL: "https://web-chat-54972-default-rtdb.firebaseio.com",
    projectId: "web-chat-54972",
    storageBucket: "web-chat-54972.appspot.com",
    messagingSenderId: "286839968969",
    appId: "1:286839968969:web:246e296fd9a58721482918"
  };
  //inintialize firebase
  firebase.initializeApp(firebaseConfig);

  //create reference to your database
  var webChatDb = firebase.database().ref('form')

  document.getElementById('form').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();

    // var email = document.getElementById('email');
    // var password = document.getElementById('passsword');
   }
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElemnt = document.getElementById('error')

form.addEventListener("submit", (e) =>{
    let messages = []

    if (email.value == '' || email.value == null){
        messages.push("Set Email")
    }
    if (password.value == '' || password.value == null){
        messages.push("and password")
    }
    if (messages.length > 0){
        e.preventDefault()
        errorElemnt.innerText = messages.join(', ')
    }
})

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

function validateEmail(email){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        return true
    }
    else{
        alert("Wrong email syntax")
        return false
    }
}
function validatePassword(){
    if (/^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-zA-Z]).{8,}$/.test(password.value)){
        return true
    }
    else{
        return false
    }
}
function validate(){
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')
    const country = document.querySelector('#country')
    const errorMessage = document.querySelector('.errorMessage')

    if (email.value.length <=3 || password.value.length <=3){
        errorMessage.style.display = 'block'
        return 
    }
}
