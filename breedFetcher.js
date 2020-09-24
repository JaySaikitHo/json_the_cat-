const input = process.argv.splice(2);
const request = require('request');


request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {

  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    if (data.message) {
      console.log(data.message);


    } else {
    
      
      if(data.length === 0 ){
          console.log("We couldn't find your cat")
      } else {
        console.log(data[0].description);
      }
    }
  }
});




