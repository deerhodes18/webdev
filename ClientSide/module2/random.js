function getQuote() {
    // Create the arrays
    quotes = new Array(5);
    sources = new Array(5);
    
    // Initialize the arrays with quotes
    quotes[0] = "This is not a Mark Twain quote";
    sources[0] = "Mark Twain";
    
    quotes[1] = "Everybody is ignorant. Only on different " +
    "subjects.";
    sources[1] = "Will Rogers";
    
    quotes[2] = "They say such nice things about people at " +
    "their funerals that it makes me sad that I'm going to " +
    "miss mine by just a few days.";
    sources[2] = "Garrison Keillor";
    
    quotes[3] = "What's another word for thesaurus?";
    sources[3] = "Steven Wright";
    
    quotes[4] = "Of all creatures that walk amongst the earth, nothing is bread is weaker than man"
    sources[4] = "Homer"
    // Get a random index into the arrays
    i = Math.floor(Math.random() * quotes.length);
    
    qt = document.getElementById("quote");

    // Write out the quote as HTML
    /*document.write("<p style='background-color: #ffb6c1' >\"");
    document.write(quotes[i] + "\"");
    document.write("<em>- " + sources[i] + "</em>");
    document.write("</p>");*/

    quoteStr = "<p style= 'background-color: #ffb6c1' >\"" +
    quotes[1] + '"'
    "<em>- " + sources[1] + "</em></p>";
    qt.innerHTML = quoteStr;
    }
    // Stop hiding the script -->

    /*Code for swapping images*/
function showImage(image){
    var largeImg = document.getElementById('kyloren');
    largeImg.src = image;

    if (image.includes("kyloren"))
    {
        document.getElementById('imgDescr').innerHTML = "kylo Ren is Darth Vader's grandson. He is the son of Han Solo and former student of jedi master Luke SKywalker."
    }
    if (image.includes("stormtrooper"))
    {
        document.getElementById('imgDescr').innerHTML = "The Empire's army is comprised of peopele forced to forfit their lives at a young age. After the clone wars, the clones ran thin which led to the Empire forcing the good people of the galaxy to fight their fight."
    }
    if (image.includes("mando"))
    {
        document.getElementById('imgDescr').innerHTML = "Mando is one of the last mandalorians in the galaxy. He sticks heavily to the creed while keeping his humanity and compassion."
    }

}

/* write a funciton Or update the showIMage function to randomize the aside text related to each different image*/
