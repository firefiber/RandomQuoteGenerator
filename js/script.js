/************VANILLA***********/
//function jsonp(){
//  //Put in the script tag dynamically, once the page loads. Will convert to jQuery after. 
//  //Remove script tag immediately after appending. 
//  let url = "http://api.forismatic.com/api/1.0/?";
//  let script = document.createElement('script');
//  script.src = url + "method=getQuote&lang=en&format=jsonp&jsonp=showQuote";
//  document.body.appendChild(script);
//  script.remove();
//}
//

/************JQ************/
function jsonp(){
  $.ajax({
    url: "https://api.forismatic.com/api/1.0/",
    dataType: 'jsonp',
    data: {
      "method":"getQuote",
      "lang":"en",
      "format":"jsonp",
      "jsonp":"showQuote"
    }
  });
}

function showQuote(quote){
  //Get the quote and author. 
  //Append it to page. 
  
  let quoteText = document.querySelector('#quote-text');
  let quoteAuth = document.querySelector('#quote-author a');
  let tweet = document.querySelector('#twitter');
  
  quoteText.textContent = quote.quoteText;
  quote.quoteAuthor != "" ? quoteAuth.textContent = quote.quoteAuthor : quoteAuth.textContent = "Unknown";
  quoteAuth.setAttribute('href', quote.quoteLink);
  
    tweet.setAttribute('href', 'https://twitter.com/intent/tweet?hashtags=qotd&via=en_forismatic&text=' + encodeURIComponent('"'+quote.quoteText+'"') + " - " + encodeURIComponent(quote.quoteAuthor));
  
}

/************VANILLA************/
//
//(function(){
//  jsonp();
//  document.querySelector('button').onclick = function(){
//    jsonp();
//  }
//})();

/*************JQ*************/
$(document).ready(function(){
  jsonp();
  $('button').on("click", function(){
    jsonp();
  });
})
