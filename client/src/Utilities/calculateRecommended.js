// Returns the percentage of reviewers who recommend this product as a string
const CalculateRecommended = (recommended) => {
  return (
    (recommended[1] || 0)
    /
    (((recommended[1] || 0) + (recommended[0] || 0)) === 0 ?
      1
      : ((recommended[1] || 0) + (recommended[0] || 0)))
  );
};

export default CalculateRecommended;
