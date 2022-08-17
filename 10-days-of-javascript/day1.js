// Day 1: Arithmetic Operators 

/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = (length * 2) + (width * 2) 
    return perimeter;
}

// Day 1: Functions 

/*
 * Create the function factorial here
 */
function factorial(n) {
    if (n === 0 || n === 1)
    return 1;
  
  // We start the FOR loop with i = 4
  // We decrement i after each iteration 
  for (var i = n - 1; i >= 1; i--) {
    // We store the value of num at each iteration
    n = n * i; // or num *= i;
    /* 
                    num      var i = num - 1       num *= i         i--       i >= 1?
    1st iteration:   5           4 = 5 - 1         20 = 5 * 4        3          yes   
    2nd iteration:  20           3 = 4 - 1         60 = 20 * 3       2          yes
    3rd iteration:  60           2 = 3 - 1        120 = 60 * 2       1          yes  
    4th iteration: 120           1 = 2 - 1        120 = 120 * 1      0          no             
    5th iteration: 120               0                120
    End of the FOR loop 
    */
  }
  return n; //120
}


// Day 1: Let and Const 


function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    let r = readLine();
    // Print the area of the circle:
    console.log(Math.pow(r, 2) * PI);
    // Print the perimeter of the circle:
    console.log(2 * PI * r)
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}