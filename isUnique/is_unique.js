function isUnique(string) {
  let memo = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] in memo) {
      return false;
    } else {
      memo[string[i]] = true;
    }
  }
  return true;
}
