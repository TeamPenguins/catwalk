const FormatDate = (reviewDate) => {
  const theDate = new Date(reviewDate);
  const offset = theDate.getTimezoneOffset();
  const adjustedDate = new Date(theDate.getTime() + (offset * 60 * 1000));
  return new Intl.DateTimeFormat('en-us', {day: 'numeric', month: 'long', year: 'numeric'}).format(adjustedDate);
};

export default FormatDate;