const smallestDiff = (arr1, arr2) => {
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  let diff;
  let smallestDiff = null;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] > arr2[j]) {
        diff = arr1[i] - arr2[j];
      } else {
        diff = arr2[j] - arr1[i];
      }
      if (diff === 0) {
        return console.log(0);
      }
      if (diff < smallestDiff || smallestDiff === null) {
        smallestDiff = diff;
      }
    }
  }
  return console.log(smallestDiff);
};
const arr1 = [10, 20, 14, 16, 18];
const arr2 = [30, 23, 54, 33, 96];

smallestDiff(arr1, arr2);
