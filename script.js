const calendar = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function separateDate(date) {
  let dayNumber = "";
  let monthNumber = "";
  let yearNumber = "";
  let datePart = "";
  for (let index = 0; index < date.length; index++) {
    if (date[index] === "/" && index === 2) {
      dayNumber = datePart;
      datePart = "";
    }
    if (date[index] === "/" && index === 5) {
      monthNumber = datePart;
      datePart = "";
    }
    if (date[index] === "/") {
      continue;
    }
    datePart += date[index];
    if (index === date.length - 1) {
      yearNumber = datePart;
      datePart = "";
    }
  }
  return [dayNumber, monthNumber, yearNumber];
}

function isValidDate(date) {
  const dateSeparated = separateDate(date);

  if (parseInt(dateSeparated[1]) < 1 || 12 < parseInt(dateSeparated[1])) {
    return false;
  }
  if (parseInt(dateSeparated[2]) < 999 || parseInt(dateSeparated[2]) > 9999) {
    return false;
  }
  if (parseInt(dateSeparated[0]) > calendar[dateSeparated[1] - 1]) {
    return false;
  }

  return true;
}

isValidDate("03/04/2001");

function isPalindrome(date) {
  const dateSeparated = separateDate(date);

  let dateWithoutSlash = dateSeparated[0] + dateSeparated[1] + dateSeparated[2];


  for (
    let index1 = 0, index2 = dateWithoutSlash.length - 1;
    index2 >= index1;
    index1++, index2--
  ) {
    if (dateWithoutSlash[index1] !== dateWithoutSlash[index2]) {
      return false;
    }
  }
  return true;
}

isPalindrome("11/02/2011");
isPalindrome("12/04/2013");
