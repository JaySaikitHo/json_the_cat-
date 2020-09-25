const {fetchBreedDescription} = require('./breedFetcher');

const breedName = process.argv.splice(2);

fetchBreedDescription(breedName, (error,desc) => {
  if (error) {
    console.log(error);
  } else {
    console.log(desc);
  }
});


