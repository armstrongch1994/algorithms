function checkPermutation(strOne, strTwo) {
  if (strOne.length !== strTwo.length) return false;
  let memo = {};
  for (let i = 0; i < strOne.length; i++) {
    let currentElem = strOne[i];
    if (currentElem in memo) {
      memo[currentElem]++;
    } else {
      memo[currentElem] = 1;
    }
  }
  for (let i = 0; i < strTwo.length; i++) {
    let currentElem = strTwo[i];
    if (currentElem in memo) {
      memo[currentElem]--;
    } else {
      return false;
    }
  }
  return true;
}
checkPermutation('oend', 'enod');
