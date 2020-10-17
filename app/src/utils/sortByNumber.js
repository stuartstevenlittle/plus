// https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
function sortByNumber(array, property) {
  return array.sort((a, b) => (a[property] > b[property]) ? 1 : -1)
}