var count= 2;
let user=["nada alsaid","nesma farid","nada abdalla"];
let pass=["nada1234","nesma1234","nada12345"];
let mail=["nadasaid@gmail.com","nesmafarid@gmail.com","nadaabdalla@gmail.com"];
function validate()
{
  var un = document.login.username.value;
  var pw = document.login.password.value;
  var ml = document.login.email.value;
  var valid =false;
  var admin=false;

  for(var i =0 ; i < user.length ; i++)
  {
    if((un=="nada alsaid")&& (pw == "nada1234")&& ml == "nadasaid@gmail.com")
    {
      admin=true;
      break;
    }
    else if((un==user[i])&& (pw == pass[i])&& ml == mail[i])
    {
      valid = true;
      break;
    }
  }
  if(valid){
    alert("Login was successful");
    window.location = "home.html";
    return false;
  }
  if(admin){
    alert("Login was successful");
    window.location = "admin.html";
    return false;
  }
  var again = " tries" ;
  if(count ==1){
    again = " try" ;
  }
  if(count >= 1){
    alert("Wrong ,don't have account ?");
    alert("You heve only " +count + " chance");
    count --;
  }else{
    alert("incorrocet");
    document.login.username.value = "you are blocked";
    document.login.password.value = " fool you can ";
    document.login.email.value = " fool you can ";
    document.login.username.disabled = true;
    document.login.email.disabled = true;
    document.login.password.disabled = true;
    window.location = "register.html";
    return false;
    
  }
}
