// output varibales
var quote = document.getElementById("quote");
var quote_author = document.getElementById("quote_author");

// objects in array to save quotes
var quotes = [
  {
    quote : "Be yourself; everyone else is already taken.",
    quote_author : "Oscar Wilde"
  },
  {
    quote : "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    quote_author : "Marilyn Monroe"
  },
  {
    quote : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    quote_author : "Albert Einstein"
  },
  {
    quote : "So many books, so little time.",
    quote_author : "Frank Zappa"
  },
  {
    quote : "A room without books is like a body without a soul.",
    quote_author : "Marcus Tullius Cicero"
  },
  {
    quote : "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    quote_author : "Bernard M. Baruch"
  },
  {
    quote : "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    quote_author : "Dr. Seuss"
  },
  {
    quote : "You only live once, but if you do it right, once is enough.",
    quote_author : "Mae West"
  },
  {
    quote : "Be the change that you wish to see in the world.",
    quote_author : "Mahatma Gandhi"
  },
  {
    quote : "In three words I can sum up everything I've learned about life: it goes on.",
    quote_author : "Robert Frost"
  }
]

// function to get random quote
function getquote() {
  // random array index
  var random_index = Math.floor(Math.random() * quotes.length);
  //display quote in document
  quote.innerHTML = `${quotes[random_index].quote}` ;
  quote_author.innerHTML = `by : ${quotes[random_index].quote_author}`;
}
