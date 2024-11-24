
var project = [
    { quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", Author: "Albert Einstein" },
    { quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", Author: "― Bernard M. Baruch" },
    { quote: "In three words I can sum up everything I've learned about life: it goes on.", Author: "Robert Frost" },
    { quote: "If you tell the truth, you don't have to remember anything.", Author: "Mark Twain" },
    { quote: "A friend is someone who knows all about you and still loves you.", Author: "Elbert Hubbard" }
  ];
  
  function gouts() {
    var randomIndex = Math.floor(Math.random() * project.length);
    var selectedQuote = project[randomIndex];
    var cart = `
      <p>Quote: ${selectedQuote.quote}</p>
      <p>Author: ${selectedQuote.Author}</p>`
    
    document.getElementById("char").innerHTML = cart;
  }