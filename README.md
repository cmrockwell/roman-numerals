# Convert numbers to Roman numerals

## Starting the app

In the project directory, you can run:  
`yarn start` which runs the app in the development mode.

Open [http://localhost:8080/romannumeral?query=12](http://localhost:8080/romannumeral?query=12) to view it in the browser.

## Testing 
Run `yarn test` to launch the test runner in the interactive watch mode.  
Use `yarn test --coverage` to run the tests as above and also get the test coverage report.

## Attribution & Packaging
The project was started from the create-react-app toolchain  
`npx create-react-app roman-numerals`  
This command set up a new single page React app. 
 
It provided a starting toolchain including testing libraries: Jest, React and User Event.
The toolchain also provides scripts to start the app in development mode, to run the tests, and to build the app.

## Methodology
I used a test-driven methodology by writing jest tests starting with `./utils/c onvertNumerals.test.js`  
The strategy for converting numbers to Roman numerals was to process the number like a string array, 
using the array index to target and process the ones, tens, hundreds and thousands places, and to set the corresponding Roman numerals.

`./utils/parseNumber.js` is used to parse the query string, set boundary conditions and error setting.

The front-end application code `App.js` runs from `romanrumeral.js` when users enter a URL such as http://localhost:8080/romannumeral?query=100 

## API
`ParseNumber` is designed to separare the concerns of validating input and setting boundaries from the process of converting numbers to Roman numerals. The `ParseNumber(query)` function expects to receive a URL query string such as `?query=100` and would return `100` in this example.

`ConvertNumerals` functions expects input to be validated using the `ParseNumber` function, and as such should only receive positive integers less than 4000. 

## Deployment

`yarn build` builds the app for production under the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
