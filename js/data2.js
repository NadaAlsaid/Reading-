// document.body.classList.add(localStorage.getItem("username"));
// document.body.classList.add(localStorage.getItem("email"));

// document.body.classList.add(localStorage.getItem("pass"));

var count= 3;
let user=["nada alsaid","nesma farid","nada abdalla"];
let pass=["nada1234","nesma1234","nada12345"];
let mail=["nadasaid@gmail.com","nesmafarid@gmail.com","nadaabdalla@gmail.com"];

// const wrapper = document.querySelector('.wrapper') ;
// const form    = wrapper.querySelectorAll('.formsignUP') ;
// const submitInput = form[0].querySelector('input[type="submit"]');

// function getDataForm(e){
//   e.preventDefault();
//   var formData = new FormData(form[0]);

//   var newUser = user.concat(formData.get('nameField'));
//   var newPass = pass.concat(formData.get('passwordField'));
//   var newMail = mail.concat(formData.get('emailField'));
//   console.log(user);
//   alert( formData.get('nameField')+ ' - ' + formData.get('passwordField')
//   + ' - ' + formData.get('emailField') );
// }

// document.addEventListener('DOMContentLoaded' , function(){
// submitInput.addEventListener('click',getDataForm , false) ;
// }, false);

// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addMovie = (ev)=>{
  ev.preventDefault();  //to stop the form submitting
  // let Date = document.getElementById('Date').value;
  let Name = document.getElementById('userName').value;
  let email = document.getElementById('Email').value;
  let passs = document.getElementById('pass').value;
  user.push(Name);
  mail.push(email);
  pass.push(passs);
  document.forms[0].reset(); // to clear the form for the next entries
  //document.querySelector('form').reset();

  //for display purposes only
  console.warn('added' , {user} );
  console.warn('added' , {mail} );
  console.warn('added' , {pass} );

  // let pre = document.querySelector('#msg pre');
  // pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

  //saving to localStorage

  // module.exports ={ user };
  // module.exports ={ mail };
  // module.exports ={ pass };
  localStorage.setItem('username', JSON.stringify(user) );
  localStorage.setItem('email', JSON.stringify(mail) );
  localStorage.setItem('password', JSON.stringify(pass) );
  window.location = "home.html";


}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('sub').addEventListener('click', addMovie);

});

// console.log(localStorage.getItem("username"));
// console.log(localStorage.getItem("email"));

// console.log(localStorage.getItem("pass"));
