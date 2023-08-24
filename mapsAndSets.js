//question 1

new set ([1,1,2,2,3,4])

//return 1, 2 , 4 , 4

//question 2 

[...new set ("referee")].join("")

//output will be ref

//question 3 what will it look like after running 

let m = new Map(); 
m.set([1,2,3], true); 
m.set([1,2,3], false);

//false

//hasDuplicate

function hasDuplicate(arr) {
    return new Set(arr).size !== arr.length;
}

//vowelcount

function vowelcount(str) {
    const vowels = "aeiou"; 
    const vowelMap = new Map();

    for (let char of str) {
        const lowercasechar = char.toLowerCase();
        if (vowels.includes(lowercasechar)) {
            if (vowelMap.has(lowercasechar)) {
                vowelMap.set(lowercasechar, vowelMap.get(lowercasechar) + 1); 
            } else {
                vowelMap.set(lowercasechar, 1); 
            }
        }
    }

    return vowelMap; 
}


// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }