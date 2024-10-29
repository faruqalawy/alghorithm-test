function findDuplicates(arr) {
    const counts = {};
    const duplicates = [];

    for (const num of arr) {
        counts[num] = (counts[num] || 0) + 1;
    }

    for (const num in counts) {
        if (counts[num] > 1) {
            duplicates.push(Number(num));
        }
    }

    return duplicates;
}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [2, 3]
