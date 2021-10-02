/**
 * The ParseNumber function checks an input argument 
 *  @param {string} query - Parses the query string from a UR
 * Will throw errors if;
 * - parameter key is not "query"
 * - parameter value is not a positive integer less than 4000
 * 
 */

function ParseNumber(query){
    const queryStr = '?query='
    // This utility parses the query string (window.document.location.search)
    // throws error if the expected parameter is not there
    if (query.indexOf(queryStr)===-1 ){
        throw new Error('incorrect query param')
    } 
    const input = getQueryValue(query)

    if (!/^-?\d+$/.test(input)){
        // throws error if the value is not an integer
        throw new Error('entry is not an integer')
    } else if (input < 1){
        // throws error if the integer is not positive
        throw new Error('minimum number is 1')
    } else if (input > 3999){
        // throws error if the integer is beyond maximum number
        throw new Error('maximum value 3999')
    } else {
        return parseInt(input);
    }

    function getQueryValue(input){
        return query.replace(queryStr,"")
    }
}

module.exports = ParseNumber
