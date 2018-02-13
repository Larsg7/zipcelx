export default date => {
  return (Date.parse(date) - Date.parse('01.01.1900')) / 86400000;
};
