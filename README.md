# tsl-talent-calc 
Coding Challenge Application

## Basis:
I was tasked with replicating this gamelike skill tree system from the following image:
![ExampleImage](https://raw.githubusercontent.com/DnDBeyond/front-end-developer-challenge/master/assets/example.png)
Original Reference
(https://github.com/DnDBeyond/front-end-developer-challenge)

No real detail was provided that would establish any hidden functionality, and I was to infer anything I needed to in order to progress.
The work was done over two days, with a fix to some functionality some days later after feedback from the interview.

## Assumptions
- "Assigning one talent should highlight the path to the next talent"  This was iffy for me because both "path bars" for Branch 1 and Branch 2 were "lit" in the example image, despite each branch having differing states.

- Using Normalize would be ok, though the comment "You may not use any existing SCSS (SASS), LESS, or CSS frameworks." had me pause a moment.  Not that Normalizing or CSS Reseting are "frameworks" but I wasn't sure if there was more to infer from that comment or not.

## Install / Run
### To see it immediately
- Please visit the github page for this repo: https://jturnerwhite.github.io/tsl-talent-calc/

### To Run Locally:
1. Clone the repo
2. Be sure to have NodeJS and NPM installed globally
3. Run `npm i` and then `npm start` when ready
4. A window should automatically open after a moment, but if it does not please go to http://localhost:3000/tsl-talent-calc

## Tech
### Built With:
- React
- Redux
- SASS (SCSS)

### Additional Helper Libs:
- react-redux (helper library for connecting between the two)
- redux-thunk (not necessary but would have been had I needed to make an API request to get data)
- redux-router-dom (Helps resolve some oddness with github pages pathing. Though not necessary, would have been had I added additional pages, such as a 'Characters' page you would go through prior to getting to the talent calculator, but time didn't really permit.)
- redux-devtools-extension (For assisting with observing the Redux store and ensure it was updating as expected)
- node-sass (used to compile scss files and import them in my component files)
- Normalize (not a library, exactly, but used to make the app appear consistently across other browsers)


