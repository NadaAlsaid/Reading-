// const updateButtton = document.getElementById('sub');
// const user = document.getElementById('userName');
// const email = document.getElementById('Email');
// const passs = document.getElementById('pass');

// let Name=["nada alsaid","nesma farid","nada abdalla"];
// let pass=["nada1234","nesma1234","nada12345"];
// let mail=["nadasaid@gmail.com","nesmafarid@gmail.com","nadaabdalla@gmail.com"];
// updateButtton.addEventListener('click',()=>{
// if(user.value==""){
//   localStorage.setItem("username","blank");
// }else{
//   localStorage.setItem("username",user.value+user);
//   Name.push(user);

//   user.value="";
// }
// });
// updateButtton.addEventListener('click',()=>{
//   if(passs.value==""){
//     localStorage.setItem("password","blank");
//   }else{
//     localStorage.setItem("password",passs.value +pass);
//     pass.push(passs);
//     passs.value="";
//   }
// });
// updateButtton.addEventListener('click',()=>{
//     if(email.value==""){
//       localStorage.setItem("email","blank");
//     }else{
//       localStorage.setItem("email",email.value);
//       mail.push(email);
//       email.value="";
//     }
//     });


// Your web app's Firebase configuration

// var firebaseConfig = {

//   //firebase config stuff
  
// };
  
// // Initialize Firebase
  
// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// function signUp(){
//   var email = document.getElementById("email");
//   var password = document.getElementById("password");
//   const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
//   promise.catch(e => alert(e.message));
//   alert("Signed Up");
  
// }
// function signIn(){
//   var email = document.getElementById("email");
//   var password = document.getElementById("password");
//   const promise = auth.signInWithEmailAndPassword(email.value, password.value);
//   promise.catch(e => alert(e.message));

// }
// function signOut(){
//   auth.signOut();
//   alert("Signed Out");

// }
// auth.onAuthStateChanged(function(user){
//   if(user){
//   var email = user.email;
//   alert("Active User " + email);
//   //Take user to a different or home page
//   //is signed in
//   }else{
//   alert("No Active User");
  
//   //no user is signed in
//   }
// });

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA_n3tt2qKy9g9obepHC_eM3W7yFFOdfX0",
    authDomain: "books-8344d.firebaseapp.com",
    projectId: "books-8344d",
    storageBucket: "books-8344d.appspot.com",
    messagingSenderId: "971151197364",
    appId: "1:971151197364:web:2c7f365807e6822a7103e1",
    measurementId: "G-TCTESKCH27"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
    var email = document.getElementById("Email");
    var password = document.getElementById("pass");
  function signUp(){

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Signed Up");
    
  }
  function signIn(){
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  if(email.value == document.getElementById("Email") &&
  password.value == document.getElementById("pass")){

  window.location ="admin.html";
}else{
  alert("wrong");
}
}


auth.onAuthStateChanged(function(user){
  if(user){
  var email = user.email;
  alert("Active User " + email);
  //Take user to a different or home page
  //is signed in
  }else{
  alert("No Active User");
  
  //no user is signed in
  }
});