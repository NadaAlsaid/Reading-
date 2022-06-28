const headline = document.getElementById('headline');
if(localStorage.getItem("header")===null){
  headline.innerHTML="Default Headline";
} else {
  headline.innerHTML=localStorage.getItem("header");
}