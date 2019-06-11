Walk Through of

1. loop through the characters in the haystack
2. inside that loop create a nest loop that loops through the characters in the needle
3. start at index 0 and check if the character in the haystack matches the character in the needle
   a. if it does check to see if we've looped through the entire needle and if we have we can return the index
   i. if we haven't keep looping through the needle to compare the next letter of the needle with the next letter of the haystack
   b. if it doesnt we break out of the inner for loop to start the process over with the next letter in the haystack

BIG O

- O(n\*m)

1. n is the number of letters in the haystack
2. m is the number of letters in the needle
