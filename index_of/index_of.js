function indexOf(needle, haystack) {
  if (needle.length > haystack.length) return -1;
  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) break;
      if (j + 1 === needle.length) {
        return i;
      }
    }
  }
}
indexOf('oox', 'ooboxoooxo');
