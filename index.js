AOS.init();

const quotes = document.getElementById("quotes");
const author = document.getElementById("author");

let realData = "";
let quotesData = "";

const TweetNow = () =>{
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
    window.open(tweetPost);
}

const getNewQuotes = () =>{
    let rnum = Math.floor(Math.random() * 1644);
       quotesData = realData[rnum];
       quotes.innerText = `${realData[rnum].text}`;
       
       if( quotesData.author == null){
        author.innerText - "Unknown";
       }
       else{
          author.innerText = `${realData[rnum].author}`;
       }
}


const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";

    try {

       let data = await fetch(api);
       realData = await data.json();
       getNewQuotes();


    } catch (error) {}

}




getQuotes();