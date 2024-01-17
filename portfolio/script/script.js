
document.querySelector('.cross').style.display = "none";
document.querySelector('.hamburger').addEventListener('click',()=>{
    document.body.classList.toggle('sidebar-open');
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display= "inline"
       
  }
   else{
    document.querySelector('.ham').style.display= "inline"
   }
}
)