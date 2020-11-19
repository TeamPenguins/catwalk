
// Returns a numerical rating rounded to the nearest 0.25
const CalculateRating = (ratings) => {
  return (
    Math.round(
      Object.keys(ratings).reduce((accumulator, rating) => accumulator + rating * ratings[rating], 0)
      / Object.values(ratings).reduce((accumulator, count) => accumulator + count, 0)
       * 4) / 4);
};

export default CalculateRating;