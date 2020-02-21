const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

//
const greetings = ["Fine, thanks. And you?", "Great! You?", "Doing well", "Not bad", "Nothing to complain about!", "Im having a bad day"]


const weather = ["Take umbrella with you", "Dont forget about sunglasses","Its snowing", "Its sunny outside"];



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = ()=>{
console.log("Voice is activated, SPEAK");
}


recognition.onresult = (event) =>{
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    // content.textContent = transcript;
    readOutLoud(transcript);
}


btn.addEventListener("click", ()=>{
recognition.start();
})



function readOutLoud(message){
 const speech = new SpeechSynthesisUtterance();

 speech.text = "I didnt recognize your message";
if (message.includes("How are you")){
   const finalText = greetings[Math.floor(Math.random()* greetings.length)];
   speech.text = finalText;
} else if(message.includes("What is the weather")){
        const finalText = weather[Math.floor(Math.random()* weather.length)];
        speech.text = finalText;
}

 speech.volume = 1;
 speech.rate = 1;
 speech.pitch = 1;


 window.speechSynthesis.speak(speech);
}
