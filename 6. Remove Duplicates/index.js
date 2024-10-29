function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let length = 1; 
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[length - 1]) {
            nums[length] = nums[i];
            length++;
        }
    }

    return length;
}

const arr = [1, 1, 2];
const newLength = removeDuplicates(arr);
console.log(newLength, arr.slice(0, newLength)); // Output: 2, array = [1, 2]
