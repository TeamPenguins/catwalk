
const unique = (array) => {
  var uniques = {};
  array.forEach((element) => uniques[element] = true);
  return Object.keys(uniques);
};

export default unique;