// Count chars in a string
// input string
// output object that has char as key and count as the value, ex: {a:2, b:1}
// logic:
	// iterate the chars in string:
	// if char is present as key in the object then add the count
	// of char is not present as key in the object then assign it as 1
	// return the object

function charCount(inString) {
	let outObj = {}

    

	for (const char of inString) {
        console.log(char);
        outObj[char] ? (outObj[char] += 1) : outObj[char] = 1
    }

    console.log(outObj)
	
}


charCount('abcdaa')
