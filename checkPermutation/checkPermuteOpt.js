function checkPermutation(strOne, strTwo) {
  if (strOne.length !== strTwo.length) return false;
  let strOneSort = strOne
    .split('')
    .sort()
    .join('');
  let strTwoSort = strTwo
    .split('')
    .sort()
    .join('');
  if (strOneSort === strTwoSort) return true;
  return false;
}
checkPermutation('oefd', 'enod');
