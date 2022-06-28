var count= 3;
function validate()
{
  var un = document.login.username.value;
  var pw = document.login.password.value;
  var ml = document.login.email.value;
  var valid =false;
  let user=["nada alsaid","nesma farid","nada abdalla"];
  let pass=["nada1234","nesma1234","nada12345"];
  let mail=["nadasaid@gmail.com","nesmafarid@gmail.com","nadaabdalla@gmail.com"];
  for(var i =0 ; i < user.length ; i++)
  {
  if((un==user[i])&& (pw == pass[i])&& ml == mail[i])
  {
    valid = true;
    break;
  }
  }
  if(valid){
    alert("Login was successful");
    window.location = "https://www.youtube.com/watch?v=Gl5SI82A7SQ";
    return false;
  }
  var again = " tries" ;
  if(count ==1){
    again = " try" ;
  }
  if(count >= 1){
    alert("wrong ");
    count --;
  }else{
    alert("incorrocet");
    document.login.username.value = "you are ";
    document.login.password.value = " fool you can ";
    document.login.email.value = " fool you can ";
    document.login.username.disabled = true;
    document.login.email.disabled = true;
    document.login.password.disabled = true;
    return false;
  }
}
