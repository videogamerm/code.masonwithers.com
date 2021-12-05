  var n = Math.floor(Math.random() * 10+1);
  var n0 = Math.floor(Math.random() * 10+1);
  var n1 = Math.floor(Math.random() * 10+1);

  

  var q = n*n0*n1
  var msg = new SpeechSynthesisUtterance();
  msg.text = "What is the volume of a rectangular prism that is " + n+" by "+n0+" by "+n1;
  window.speechSynthesis.speak(msg);
  
  var a = prompt("What is the volume of a rectangular prism that is " + n+" by "+n0+" by "+n1);
  if (a == q){
    alert("Good job");
    msg.text = "Good job";
    window.speechSynthesis.speak(msg);
  }
  else{
    console.error("OOF");
    alert("Good Try The correct answer was " + q);
    msg.text = "Good Try The correct answer was " + q;
    window.speechSynthesis.speak(msg);
    setTimeout(() => {  window.location.href = './index.html'; }, 1000);
   
  }
