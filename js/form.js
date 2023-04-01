
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })
  function errorMessage(){
    document.getElementById("errorPass").style.display = "block";
  }
  function errorMsg(){
    document.getElementById("errorPass").style.display = "none";
  }
  function errorMail(){
    document.getElementById("errorEmail").style.display = "block";
  }
  function errorMail2(){
    document.getElementById("errorEmail").style.display = "none";
  }