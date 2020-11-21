
const PercentOfTotal = (ratings, starNumber) => {
  return (
    Math.round(((ratings[starNumber] || 0)
    /
    Object.values(ratings).reduce((accumulator, count) => accumulator + count, 0) * 100))
  );
};

export default PercentOfTotal;