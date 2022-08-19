const words = [
  {
      word: "addition",
      hint: "The process of adding numbers"
  },
  {
      word: "meeting",
      hint: "Event in which people come together"
  },
  {
      word: "number",
      hint: "Math symbol used for counting"
  },
  {
      word: "exchange",
      hint: "The act of trading"
  },
  {
      word: "canvas",
      hint: "Piece of fabric for oil painting"
  },
  {
      word: "garden",
      hint: "Space for planting flower and plant"
  },
  {
      word: "position",
      hint: "Location of someone or something"
  },
  {
      word: "feather",
      hint: "Hair like outer covering of bird"
  },
  {
      word: "comfort",
      hint: "A pleasant feeling of relaxation"
  },
  {
      word: "tongue",
      hint: "The muscular organ of mouth"
  },
  {
      word: "expansion",
      hint: "The process of increase or grow"
  },
  {
      word: "country",
      hint: "A politically identified region"
  },
  {
      word: "group",
      hint: "A number of objects or persons"
  },
  {
      word: "taste",
      hint: "Ability of tongue to detect flavour"
  },
  {
      word: "store",
      hint: "Large shop where goods are traded"
  },
  {
      word: "field",
      hint: "Area of land for farming activities"
  },
  {
      word: "friend",
      hint: "Person other than a family member"
  },
  {
      word: "pocket",
      hint: "A bag for carrying small items"
  },
  {
      word: "needle",
      hint: "A thin and sharp metal pin"
  },
  {
      word: "expert",
      hint: "Person with extensive knowledge"
  },
  {
      word: "statement",
      hint: "A declaration of something"
  },
  {
      word: "second",
      hint: "One-sixtieth of a minute"
  },
  {
      word: "library",
      hint: "Place containing collection of books"
  },
];


const wordtext = document.querySelector(".word"),
hintText = document.querySelector(".hint span")
timetext = document.querySelector(".time b")
inputField = document.querySelector(" input")
refreshbtn = document.querySelector(".refresh-word")
checkhbtn = document.querySelector(".check-word ")

let correctWord, timer;

const  initTimer = maxTime =>{
    clearInterval(timer);
    timer = setInterval(()=>{
        if(maxTime > 0){
            maxTime--;
            return timetext.innerText = maxTime;
        }
        clearInterval(timer);
        alert(`Time off! ${correctWord.toUpperCase()} was the correctword`);
        initGame();
    }, 1000);
}


const initGame = () =>{
    initTimer(30);
  let randmobj = words[Math.floor(Math.random() * words.length)]
  let wordArray  = randmobj.word.split("");
      for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]
        
      }
      wordtext.innerHTML = wordArray.join("");
      hintText.innerHTML = randmobj.hint;
      correctWord = randmobj.word.toLowerCase();
      inputField.value = "";
      inputField.setAttribute("maxlength", correctWord.length)
}

initGame();



const checkword = () =>{
  let userWord = inputField.value.toLocaleLowerCase();

  // check word 
  if(!userWord) return alert("Please Enter a Word Check");

  // word is not correct
  if (userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);
 // if word is correct 
  else{
     return alert(`Congrats! ${userWord.toUpperCase()} is a correct word`)
    //  initGame(); 
    }
 
}

refreshbtn.addEventListener("click", initGame)
checkhbtn.addEventListener("click", checkword)