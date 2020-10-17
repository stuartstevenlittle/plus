export default function sortArray(arr, prop) {
  return arr.sort((a, b) => b[prop] - a[prop]);

  // this works for string properties byut not dates:
  // const newsItemsSorted = newsItems.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  // this works for dates. Is un news carousel:
  // https://stackoverflow.com/questions/10123953/how-to-sort-an-array-by-a-date-property
  // array.sort(function (a, b) {
  //   // Turn your strings into dates, and then subtract them
  //   // to get a value that is either negative, positive, or zero.
  //   return new Date(b.date) - new Date(a.date);
  // });

}
