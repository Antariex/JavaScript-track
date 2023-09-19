/**Instructions
Lucian's girlfriend is on her way home, and he hasn't cooked their anniversary dinner!
In this exercise, you're going to write some code to help Lucian cook an exquisite lasagna from his favorite cookbook.
You have four tasks related to the time spent cooking the lasagna.
1. Define the expected oven time in minutes.
2. Calculate the remaining oven time in minutes.
3. Calculate the preparation time in minutes.
4. Calculate the total working time in minutes.**/


//The number of minutes it takes to prepare a single layer.
const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;
EXPECTED_MINUTES_IN_OVEN;

//Determines the number of minutes the lasagna still needs to remain in the oven to be properly prepared.
export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

//Given a number of layers, determines the total preparation time.
export function preparationTimeInMinutes(numberOfLayers) {
  return 2 * numberOfLayers;
}

//Calculates the total working time. That is, the time to prepare all the layers of lasagna, and the time already spent in the oven.
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}