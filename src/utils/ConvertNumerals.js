/**
 * The ConverNumerals function takes a number and returns the Roman numeral equivalent.
 * Use the {@link ParseNumbers.js} function to validate the input before passing to ConvertNumerals
 * 
 *  @param {string} number - A positive integer less than 4000
 * 
 */

function ConvertNumerals(number) {
    
    let roman = ''
    romanNumerals(number)    
    return roman

    function romanNumerals(number){
        // convert the number to a string, so it can be treated as an array
        let numStr = number.toString()
        // iterate thru each digit using the index to determine the place (ones, tens, hundreds)
        // case statements converts to roman numerals according to the place (I, X, C)
        // Switch on decrementing index so index of 0 is the numbers' least significant digit  
        // have the reverse of number available so numerals are in the proper left to right order
        let numStrReverse = numStr.split("").reverse().join("")
        for (let i=numStr.length-1; i>=0; i--){
            switch (i){
                case 3:
                    // thousands (max 3999)
                    if (numStrReverse[i]>3){
                        throw new Error('maximum number is 3999')
                    }
                    roman += "M".repeat(numStrReverse[i]) //1000-3000
                    break
                case 2:
                    // hundreds X
                    if(numStrReverse[i]==='4'){
                        roman+="CD" //400
                    } else if (numStrReverse[i]==='9'){
                        roman+="CM" //900
                    } else if (5<=numStrReverse[i] && numStrReverse[i]<=8){
                        roman += "D" //500
                        roman += "C".repeat(numStrReverse[i]-5) //600-800
                    } else {
                        roman += "C".repeat(numStrReverse[i]) //100-300 
                    }
                    break
                case 1:
                    // tens
                    if(numStrReverse[i]==='4'){
                        roman+="XL" //40
                    } else if (numStrReverse[i]==='9'){
                        roman+="XC" //90
                    } else if (5<=numStrReverse[i] && numStrReverse[i]<=8){
                        roman += "L" //50
                        roman += "X".repeat(numStrReverse[i]-5) //60-80
                    } else {
                        roman += "X".repeat(numStrReverse[i]) //10-30
                    }
                    break;
                default:
                    // ones
                    if(numStrReverse[i]==='4'){
                        roman+="IV" //4
                    } else if (numStrReverse[i]==='9'){
                        roman+="IX" //9
                    } else if (5<=numStrReverse[i] && numStrReverse[i]<=8){
                        roman += "V" //5
                        roman += "I".repeat(numStrReverse[i]-5) //6-8
                    } else {
                        roman += "I".repeat(numStrReverse[i]) //1-3
                    }
                    break;
            }
        }
    }

}

module.exports = ConvertNumerals;