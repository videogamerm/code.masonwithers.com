  var n = Math.floor(Math.random() * 100);

  var n2 = Math.floor(Math.random() * 100); 

  
  var msg = new SpeechSynthesisUtterance();
  if ( n2 =< 0) 
  {
  n2 == -n2
  } 
 var q = n + n2;
  msg.text = "What is " + n + " minus " +  n2 + "?";
  window.speechSynthesis.speak(msg);
  
  var a = prompt("What is " + n + " - " +  n2 + "?");
  if (a == q){
    alert("Good job");
    msg.text = "Good job";
    window.speechSynthesis.speak(msg);
  }
  else{
    console.error("OOF");
    alert("Good Try The correct answer was " + q);
    msg.text = "Good Try The correct answer was " + q ;
    window.speechSynthesis.speak(msg);
    setTimeout(() => {  window.location.href = './index.html'; }, 500);
  }
