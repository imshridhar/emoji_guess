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
        // HTML Element
      
        let guessInput =document.getElementById('guess-input');
        let resultEl=document.getElementById('result');
        let scoreElement=document.getElementById('score');
      
      
       function displayEmoji(){
        let descriptionElement=document.getElementById('description');
        descriptionElement.textContent=emojiDetails[currentEmojiIndex].emoji;
       }
       
       function checkGuess(){
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
        nextEmoji();  
       }
      
       function nextEmoji(){
        currentEmojiIndex++;
        if(currentEmojiIndex==emojiDetails.length){
          currentEmojiIndex=0;
        }
        displayEmoji();
       }
      
      
       document.addEventListener('DOMContentLoaded',()=>{
        displayEmoji();
       })  
       guessInput.addEventListener('keyup',(shridhar)=>{
        if(shridhar.key=='Enter'){
          checkGuess();
        }
       })
      