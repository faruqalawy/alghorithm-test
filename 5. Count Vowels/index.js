function countVowels(s) {
    const vowels = new Set("aeiou");
    return [...s.toLowerCase()].filter(char => vowels.has(char)).length;
}

console.log(countVowels("hello")); // Output: 2
