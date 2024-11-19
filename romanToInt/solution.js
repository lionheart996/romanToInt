// var romanToInt = function(s) {
//     let sArray = s.toUpperCase().split('');
//     let searchedNumber = 0;

//     for (let i = 0; i < sArray.length; i++) {
//         if (sArray[i] === 'I' && sArray[i + 1] === 'V') {
//             searchedNumber += 4;
//             i++; 
//         } else if (sArray[i] === 'I' && sArray[i + 1] === 'X') {
//             searchedNumber += 9;
//             i++; 
//         } else if (sArray[i] === 'I') {
//             searchedNumber += 1;
//         } else if (sArray[i] === 'V') {
//             searchedNumber += 5;
//         } else if (sArray[i] === 'X' && sArray[i + 1] === 'L') {
//             searchedNumber += 40;
//             i++; 
//         } else if (sArray[i] === 'X' && sArray[i + 1] === 'C') {
//             searchedNumber += 90;
//             i++;
//         } else if (sArray[i] === 'X') {
//             searchedNumber += 10;
//         } else if (sArray[i] === 'L') {
//             searchedNumber += 50;
//         } else if (sArray[i] === 'C' && sArray[i + 1] === 'D') {
//             searchedNumber += 400;
//             i++; 
//         } else if (sArray[i] === 'C' && sArray[i + 1] === 'M') {
//             searchedNumber += 900;
//             i++; 
//         } else if (sArray[i] === 'C') {
//             searchedNumber += 100;
//         } else if (sArray[i] === 'D') {
//             searchedNumber += 500;
//         } else if (sArray[i] === 'M') {
//             searchedNumber += 1000;
//         }
//     }
//     console.log(searchedNumber);
//     return searchedNumber;
// };

var romanToInt = function(s) {
    let total = 0;

    let romanIntegersMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    for (let i=0; i < s.length; i++) {
        const current = romanIntegersMap[s[i]];

        const next = romanIntegersMap[s[i+1]] || 0;

        if (current < next) {
            total -= current
        } else {
            total += current
        }

    }

    console.log(total)

}

romanToInt("MCMXCIV")