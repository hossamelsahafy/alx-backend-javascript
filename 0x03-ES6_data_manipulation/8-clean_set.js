function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let result = '';
  for (const i of set) {
    if (i.startsWith(startString)) {
      if (result !== '') {
        result += '-';
      }
      result += i.slice(startString.length);
    }
  }
  return result;
}

export default cleanSet;
