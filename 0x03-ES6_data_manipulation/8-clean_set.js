function cleanSet(set, startString) {
  if (startString === '') return '';
  let result = '';
  for (const value of set) {
    if (value.startsWith(startString)) {
    result += value.slice(startString.length) + '-';
    }
  }
  return result.slice(0, -1);
}  

export default cleanSet;
  