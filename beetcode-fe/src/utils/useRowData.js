// Function to generate random integer within a range
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function to generate random boolean
const getRandomBoolean = () => {
  return Math.random() < 0.5;
};

// Function to generate random string from an array of options
const getRandomString = (options) => {
  return options[Math.floor(Math.random() * options.length)];
};

// Array of possible makes, models, tags, and months
const statusOptions = ["1", "0","2"];
const problemOptions = ['alsdkjflkajsdfjasdkfjhalskdhflkjasdhlfkjhaslkdjfhlajkhdsflkjahsdkfjhaldkjhflkajshdflkjhasldjfhlkashdflfjhaslkdfhlashdflkhasdlf', 'F-Series', 'Corolla', 'EQA', '500', 'Juke'];
const difficultyOptions = ['Easy',"Medium","Hard"];
const tagsOptions = ['array', 'heap', 'stack', 'linked list', 'queue'];

// Function to generate random data object
const generateRandomData = () => {
  const status = getRandomString(statusOptions);
  const problem = getRandomString(problemOptions);
  const difficulty = getRandomString(difficultyOptions);
  const tagsString = getRandomString(tagsOptions) + ',' + getRandomString(tagsOptions) + ',' + getRandomString(tagsOptions) + ',' + getRandomString(tagsOptions)  ;

  return {
    status,
    problem,
    difficulty,
    tags: tagsString,
  };
};

// Function to generate an array of random data objects
const generateRandomDataArray = (count) => {
  const dataArray = [];
  for (let i = 0; i < count; i++) {
    dataArray.push(generateRandomData());
  }
  console.log(dataArray)
  return dataArray;
};

// Generate an array of random data objects with a count of 10
export default generateRandomDataArray(50);
