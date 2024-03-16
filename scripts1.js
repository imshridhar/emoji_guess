const emojiDetails = [
    { description: "Smiling face with sunglasses", emoji: "😎" },
    { description: "Thumbs up", emoji: "👍" },
    { description: "Heart eyes", emoji: "😍" },
    { description: "Crying face", emoji: "😢" },
    { description: "Party popper", emoji: "🎉" },
    // Add more emoji descriptions here
  ];
  
    let currentEmojiIndex = 0;
    let score = 0;
    let seconds=5;
    // HTML Element
  
    let guessInput =document.getElementById('guess-input');
    let resultEl=document.getElementById('result');
    let scoreElement=document.getElementById('score');
    let timerElement= document.getElementById('timer');
  
  
   function displayEmoji(){
    let descriptionElement=document.getElementById('description');
    descriptionElement.textContent=emojiDetails[currentEmojiIndex].emoji;
    // displayTimer()
    
    
   }
   
   function checkGuess(){
    // console.log(guessInput.value);
    const guess=guessInput.value.trim().toLowerCase();
    const correctEmojiDes=emojiDetails[currentEmojiIndex].description.trim().toLowerCase();
    if(guess==correctEmojiDes){
      resultEl.textContent='correct!';
      score++;
    }else{
      resultEl.textContent='Wrong!';
  
    }
    scoreElement.textContent=`Score :${score}`;
    guessInput.value='';
    guessInput.focus();
    // clearInterval(timer);
    seconds=5;
    nextEmoji();  
   }
  
   function nextEmoji(){
    // displayTimer()

    currentEmojiIndex++;

    if(currentEmojiIndex<emojiDetails.length){
      displayEmoji();
      
      // score=0;
    }else{
      endGame();
    }
       
    
   }
  
   guessInput.addEventListener('keydown',(event)=>{
    if(event.key==='Enter'){
      checkGuess();
    }
   })
  
   function displayTimer(){
    var timer = setInterval(()=>{
      timerElement.innerText=`Time Remaning: ${seconds}`;
      seconds--;
      if(seconds==0){
        nextEmoji();  
        // endGame();
        clearInterval(timer);
      }
      else{

      }

    },1000)
   }
  function endGame(){
    // clearInterval(timer);
    // timerElement.remove();
    guessInput.disabled=true;
  }
  
  
   document.addEventListener('DOMContentLoaded',()=>{
    displayEmoji();
    displayTimer();
    
    
   })