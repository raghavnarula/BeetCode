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
const makes = ['Tesla', 'Ford', 'Toyota', 'Mercedes', 'Fiat', 'Nissan'];
const models = ['Model Y', 'F-Series', 'Corolla', 'EQA', '500', 'Juke'];
const tags = ['array', 'heap', 'stack', 'linked list', 'queue'];
const months = ['January', 'February', 'March', 'April', 'May', 'June'];

// Function to generate random data object
const generateRandomData = () => {
  const make = getRandomString(makes);
  const model = getRandomString(models);
  const price = getRandomInt(10000, 100000);
  const electric = getRandomBoolean();
  const tagsString = getRandomString(tags) + ',' + getRandomString(tags);
  const month = getRandomString(months);

  return {
    make,
    model,
    price,
    electric,
    tags: tagsString,
    month,
  };
};

// Function to generate an array of random data objects
const generateRandomDataArray = (count) => {
  const dataArray = [];
  for (let i = 0; i < count; i++) {
    dataArray.push(generateRandomData());
  }
  return dataArray;
};

// Generate an array of random data objects with a count of 10
export default generateRandomDataArray(50);

