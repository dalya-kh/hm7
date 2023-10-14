
function F(x) {
    let characters = x.length;
    let words = x.split(' ').length;
    let sentences = x.split('.').length;
  
    let final = 'Number of characters: ' + characters + ', number of words: ' + words + ', number of sentences: ' + sentences;
    console.log(final);
  }
  
  let result1 = F('Enter your paragraph.java script');
  //F(result1);
      
