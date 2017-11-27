
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Variables
var lastQuote; //To disable the possibility for the same quote to show again after the quotes in Quotes have been showned once and been resetted
var refreshQuote; // To be able to clearinterval for the setinterval
var viewedQuotes = []; //A empty array to fill with used quotes. This will be used in the getRandomQuote function.
var quotes = [
/*All my quotes in an array of objects where each object has the following:
Quote = The actual quote
Source = Who the author is
Citation = Where it comes from
Year = When the item published
Tag = What format it comes from
HomePage = Where i got the Quote from.

I have commented out some of them to show that the code works even without the property
*/
    {
        Quote: "Do not judge my story by the chapter you walked in on.",
        Source: "J.R.R Tolkien",
        Citation: "The Two Towers",
        Year: 1954,
        Tag: "Book",
        HomePage: "https://ebookfriendly.com/most-inspirational-book-quotes/"
    },
    {
        Quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. ",
        Source: "H.Jackson Brown Jr",
        Citation: "P.S I Love You",
        Year: 2003,
        Tag: "Book",
        HomePage: "https://ebookfriendly.com/most-inspirational-book-quotes/"
    },
    {
        Quote: "It is better to be hated for what you are than to be loved for what you are not.",
        Source: "Andre Gide"
        //Citation: "Autumn Leaves",
        //Year: 1998,
        //Tag: "Book",
        //HomePage: "https://ebookfriendly.com/most-inspirational-book-quotes/"
    },
    {
        Quote: "Every human life is worth the same, and worth saving.",
        Source: "J.K Rowling",
        Citation: "Harry Potter and the Deathly Hallows",
        Year: 2007,
        Tag: "Book"
        //HomePage: "https://ebookfriendly.com/most-inspirational-book-quotes/"
    },
    {
        Quote: "Even a stopped clock is right twice a day.",
        Source: "Paulo Coelho",
        Citation: "Brida",
        Year: 1990,
        //Tag: "Book",
        HomePage: "https://ebookfriendly.com/most-inspirational-book-quotes/"
    }
];


//Functions
//Get a random quote with the Math.random function.
function getRandomQuote(array) {
    //Repeats until we get a unique quote that has not been used before
    while (true)
    {
        //Array.Length makes sure that we always is in the frame of the array.
        //+0 makes sure that we always gets an quote even when there is only one in the 0 index.
        var returnedQuote = quotes[Math.floor(Math.random() * array.length) + 0];
  
        if (viewedQuotes.length === quotes.length)//Checks if the viewedQuotes is the same as the Quotes array
        {
            console.log("You have now seen all the quotes. Resetting"); // Showing the user that all quotes has been showned
            viewedQuotes = []; //Resetting the viewedQuotes array.
        }
        if (viewedQuotes.indexOf(returnedQuote) === -1 && returnedQuote !== lastQuote) // Checkes so the quote we have gotten is not the same as the old one and have not been viewed before
        {
            viewedQuotes.push(returnedQuote);
            console.log(returnedQuote.Quote); //Log the quote in the console so the viewer can check if it is used before or not
            lastQuote = returnedQuote;
            break;
        }
    }

    return returnedQuote;
}

//To print the message to the document (index.HTML)
function printQuote() {
    //targets the quote-box
    var targetHTML = document.getElementById("quote-box");
    //Get a random quote from another function
    var quote = getRandomQuote(quotes);
    //Create the message to send to the document
    var message = '<p class="quote">' + quote.Quote + '</p>';
    message += '<p class="source">' + quote.Source;
    if (quote.hasOwnProperty("Citation"))     //Making sure that Citation is not empty, if it is citation will not get written
    {
        message += '<span class="citation">' + quote.Citation + '</span>';
    }
    if (quote.hasOwnProperty("Year"))     //Making sure that Year is not empty, if it is year will not get written
    { 
        message += '<span class="year">' + quote.Year + '</span>';
    }
    if (quote.hasOwnProperty("Tag")) // Making sure that Tag is not empty, if it is empty will not get written
    {
        message += '<span class="Tag">' + quote.Tag + '</span>';
    }
    message += '</p>'; //Ending the second message string with an </p>
    //writing the homepage where i got the quote from to the console, if there is one.
    if (quote.hasOwnProperty("HomePage")){
        console.log(quote.HomePage);
    }

    targetHTML.innerHTML = message; //Write the message to the site.

    //Calling the randomRGB function so we can change the color and adding the new color to the page
    document.body.style.backgroundColor = randomRGB();

    //Refreshes the intervall so it always is 30 second from a new click.
    clearInterval(refreshQuote);
    refreshQuote = setInterval(printQuote, 30000); 
}
//Getting a RGB color by calling this function
function randomRGB()
{
    //Adding random numbers to red,green and blue with max value of 256
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    
    var RGB = "RGB(" + red + "," + green + "," + blue + ")"; //Adding the RGB colors together and returning the RGB
    return RGB;
}


