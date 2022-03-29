// code your solution here
function superbowlWin(record) {
  for (let el of record) {
    if (el.result === "W") {
      return el.year;
    }
  }
  //or
  //return record.find((object) => object.result === "W")?.year;
  //or
  //   function checkYear(year) {
  //     return year.result === "W";
  //   }
  //   const returnYear = record.find(checkYear);
  //   if (returnYear) {
  //     return returnYear.year;
  //   }
}
