// Day 3: Arrays

function getSecondLargest(nums) {
    // Complete the function
    const max = Math.max(...nums);
    
    nums = nums.filter(num => num !== max);

    return Math.max(...nums);

// Day 3: 

function reverseString(s) {
    try {
        s = s.split('').reverse().join('');
    }
    catch(e) {
        console.log(e.message);
    }
    finally {
        console.log(s);
    }
}