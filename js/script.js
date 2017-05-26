// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var usedQuotes = [];

var quotes = [ //  array object literal list of quotes with quote source  and citation and year
  {
  quote: "Being the richest man in the cemetery doesn't matter to me.",
  source: "Steve Jobs",
  citation: "CNNMoney/Fortune",
  year: 1993
  },
  {
  quote: "My job is not to be easy on people." + "My job is to make them better.",
  source: "Steve Jobs",
  citation: " ",
  year: 2008
  },
  {
  quote: "Your time is limited, so don’t waste it living someone else’s life.",
  source: "Steve Jobs",
  citation: "Stanford commencement Speech",
  year: 2005
  },
  {
  quote: "I think death is the most wonderful invention of life.",
  source: "Steve Jobs",
  citation: "PlayBoy",
  year: 1985
  },
  {
  quote: "I end up not buying a lot of things, because I find them ridiculous.",
  source: "Steve Jobs",
  citation: "The Independent",
  year: 2005
  }
]
function getRandomQuote () {
var randomQuote = Math.floor(Math.random() * (quotes.length)); // getting the random quote
// quotes .length to get all the quotes in the array .
    if(usedQuotes.indexOf(randomQuote) === -1){
            quote = quotes[randomQuote].quote;
            source = quotes[randomQuote].source;
            citation = quotes[randomQuote].citation;
            year = quotes[randomQuote].year;
            usedQuotes.push(randomQuote);
    }else if(usedQuotes.length === quotes.length){
        usedQuotes=[];

    }

  return quotes[randomQuote]; // returning the getRandomQotes.

}
 getRandomQuote();
function printQuote () { //creating function to print the quotes.
var print = getRandomQuote(); // calling the getRandomQuote function.
var fullQuote = '<p class="quote">' + print.quote + '</p><p class="source">' + print.source + '<span class="citation">' +
         print.citation + '</span><span class="year">' + print.year + '</span></p><p class="source">'
// var quote = document.getElementsByClassName("quote").innerHTML =  '<p>"' + print.quote + '"</p>';
// var source = document.getElementsByClassName("source").innerHTML = '<p>' + print.source + '</p>';
// var citation = document.getElementsByClassName("citation").innerHTML = '<p>' +  print.citation + '</p>';
// var year = document.getElementsByClassName("year").innerHTML =  '<p>' + print.year + '</p>';
console.log(fullQuote)
document.getElementById("quote-box").innerHTML = fullQuote; // getting element by id from index.html

}
