// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { truncateSync } = require("fs")
const { isArray } = require("lodash")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. 
// The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.
// Review the expect statment syntax: describe-->test-->epect statement
// Input: string Output:string<--coded message Function:encrypt
describe("The encrypt function.", () =>{
    test("takes in a string and returns a coded message.", () =>{
        var secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        var secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        var secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
        expect(encrypt(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(encrypt(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(encrypt(secretCodeWord3)).toEqual("3cc3ntr1c")
        expect(encrypt(8333)).toEqual('Please input a string.')
    })
})

// b) Create the function that makes the test pass.
// Requirement: converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
// Validation check: string input

// Solution: str.replace() method searches a string for a specified value, or a regular expression, 
// and returns a new string where the specified values are replaced.
// str.replace() does not change the original string.
// Syntax: string.replace(searchvalue, newvalue)

// Caution: If replace a value(and not a regular expression), only the first instance of the value will be replaced.
// To repalce all occurrences of a specified value, use the global(g) modifier. 
// Perform a gloabl 
// Syntax: string.replace(/searchvalue/g, newvalue)
// Perform a global, case-insensitive replacement
// Syntax: string.replace(/searchvalue/gi, newvalue)
const encrypt = (str) =>{
    if(typeof str !== 'string'){
        return 'Please input a string.'
    }else{
            let newStr = str.replace(/a/gi, "4")
            newStr = newStr.replace(/e/gi, "3")
            newStr = newStr.replace(/i/gi, "1")
            newStr = newStr.replace(/o/gi, "0") 
            return newStr
        }
}

// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.
// Input: array Output:array<--all the words that contain the letter a. Function:wordSelector
describe("The wordSelector function.", () =>{
    test("takes in an array and returns all the words that contain the letter a.", () =>{
        var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        // Expected output: ["Apple", "Banana", "Orange"]
        var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        // Expected output: ["Mango", "Apricot", "Peach"]
        expect(wordSelector(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
        expect(wordSelector(arrayOfWords2)).toEqual(["Mango", "Apricot", "Peach"])
        expect(wordSelector(8333)).toEqual('Please input an array.')
    })
})

// b) Create the function that makes the test pass.
// Validation: check array.
// Solution: ...spread operator-->get string-->string.includes(searchvalue,start),start:optional, default 0.
// Get newArr = arr.filter(conditionalFunction)
const wordSelector = (arr) =>{
    if(!isArray(arr)){
        return 'Please input an array.'
    }else{
        let newArr = arr.filter(getWord)
        function getWord(arr){
            return [...arr].includes('a') || [...arr].includes('A')
        }
        return newArr
        }
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. 
// A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.
// Input: array Output:ture or false <--whether or not the array is a “full house”. Function:fullHouse
describe("The fullHouse function.", () =>{
    test("takes in an array of 5 numbers and determines whether or not the array is a “full house”. ", () =>{
        var hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        var hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        var hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse('yan')).toEqual('Please input an array of 5 numbers.')
        expect(fullHouse([5, 5, 5, 5, 5, 5, 5, 5])).toEqual('Please input an array of 5 numbers.')
        expect(fullHouse([3, 5, 6, 7, 'string'])).toEqual('Please input an array of 5 numbers.')
    })
})

// b) Create the function that makes the test pass.
// Validation: check array and check 5 numbers' array.
// Requirement: A full house is exactly one pair and one three of a kind.
// Solution: 1. array.sort(compareFunction) method sorts the elements of an array.-->numeric, ascending order by default.
// 2. Use compareFunction: function(a,b){return a-b}. Because .sort()method sort the element as strings.
// Besides returning the sorted array, the sort()method changes the positions of the elements in the original array.
// 3. Becasue the array get sorted, "three of a kind" will exits with index order as [0,1,2] or[2,3,4] with possible one pair exists.
const fullHouse = (arr) =>{
    if(!isArray(arr) || arr.length !== 5 || arr.some(isNaN)){
        return 'Please input an array of 5 numbers.'
    }else{
        arr.sort(function(a,b){return a-b})
        if(arr[0] == arr[1] && arr[1] == arr[2]){
            if(arr[2] !== arr[3] && arr[3] == arr[4]){
                return true
            }else{
                return false
            }
        }else if(arr[2] == arr[3] && arr[3] == arr[4]){
            if(arr[1] !== arr[2] && arr[0] == arr[1]){
                return true
            }else{
                return false
            }
        }else return false
    }
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.383 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.19s.