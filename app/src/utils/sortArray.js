export default function sortArray(arr, prop) {
  return arr.sort((a, b) => a[prop] - b[prop]);
}
