
   var but = document.querySelector("button");
   var ispurple = false;
   
   but.addEventListener("click",colorchange);
   function colorchange(){
    if(ispurple)
    {
       document.body.style.background = "white";
       ispurple = false;
    }
    else{
       document.body.style.background = "purple";
       ispurple = true;
      }
   }