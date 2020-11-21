// Returns a rating as a string rounded to the nearest 0.25
const CalculateRating = (ratings) => {
  return (
    Math.round(
      // iterate over the keys of ratings and multiply
      Object.keys(ratings).reduce((accumulator, rating) => accumulator + rating * ratings[rating], 0)
      // iterate over values to count to total amount of stars
      / Object.values(ratings).reduce((accumulator, count) => accumulator + count, 0)
       * 4) / 4).toFixed(2).toString();
};

export default CalculateRating;