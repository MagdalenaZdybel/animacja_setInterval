window.onload = function()
{
    var box = document.getElementById("box");
    
   box.onclick = function()
   {
       var self = this;
       var how = 0;
       var animationId = setInterval(function()
       {
           self.style.left = (how++) + "px";

           if (how > 100)
               clearInterval(animationId);
       }, 10);
   };
};
