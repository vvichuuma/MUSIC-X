function postad(){
  
  var first_n = document.getElementById("first").value;
  
  var music = document.getElementById("music").value;
  




 if((music != "default") && (first_n != "") )  {
 	alert("Created an ad by " + first_n + " for " + music  );
 }else{
 	alert("please fill out all the blanks");
 }

 //alert("Created an ad for " + music + " by " + first_n);


}


function backH(){

   window.location = "index.html";


}