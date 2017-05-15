// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [ //  array object literal list of quotes with quote source  and citation and year
  {
  quote: "Being the richest man in the cemetery doesn't matter to me.",
  source: "Steve Jobs,",
  citation: "CNNMoney/Fortune,",
  year: 1993
  },
  {
  quote: "My job is not to be easy on people." + "My job is to make them better.",
  source: "Steve Jobs,",
  citation: " ",
  year: 2008
  },
  {
  quote: "Your time is limited, so don’t waste it living someone else’s life.",
  source: "Steve Jobs,",
  citation: "Stanford commencement Speech,",
  year: 2005
  },
  {
  quote: "I think death is the most wonderful invention of life.",
  source: "Steve Jobs,",
  citation: "PlayBoy,",
  year: 1985
  },
  {
  quote: "I end up not buying a lot of things, because I find them ridiculous.",
  source: "Steve Jobs,",
  citation: "The Independent ,",
  year: 2005
  }
]
function getRandomQuote () {
var getRandomQotes = Math.floor(Math.random() * (quotes.length)); // getting the random quote
// quotes .length to get all the quotes in the array .

return quotes[getRandomQotes]; // returning the getRandomQotes.

}
 getRandomQuote();
function printQuote () { //creating function to print the quotes.
var print =  getRandomQuote(); // setting variable print  and calling  getrandomquote function
var quote1 = document.getElementsByClassName("quote").innerHTML =  '<p>"' + print.quote + '"</p>';
var source1 = document.getElementsByClassName("source").innerHTML = '<p>' + print.source + '</p>';
var citation1 = document.getElementsByClassName("citation").innerHTML =  print.citation;
var year1 = document.getElementsByClassName("year").innerHTML =  print.year;
document.getElementById("quote-box").innerHTML =   quote1 +   source1  + citation1 + year1 ; // getting element by id from index.html

}
