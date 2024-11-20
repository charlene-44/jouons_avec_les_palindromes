const calendar = [
31,
28,
31,
30,
31,
30,
31,
31,
30,
31,
30,
31
]
  


function separateDate (date){
  let dayNumber =""
  let monthNumber = ""
  let yearNumber = ""
  let datePart = ""
  for(let index = 0; index < date.length; index++){
      if (date[index]=== "/" && index===2){
          dayNumber = datePart
          datePart =""
      }
      if (date[index]=== "/" && index===5){
          monthNumber = datePart
          datePart = ""
      }
      if (date[index]=== "/"){
          continue
      }
      datePart += date[index]
      if(index === date.length -1 ){
          yearNumber = datePart
          datePart = ""
      }
  }
  return [dayNumber, monthNumber, yearNumber]
}

function isValidDate(date){
  const dateSeparated = separateDate(date);

  if(parseInt(dateSeparated[1]) < 1 || 12 < parseInt(dateSeparated[1])){
 return false;
}
if(parseInt(dateSeparated[2]) < 999 || parseInt(dateSeparated[2]) > 9999){
    return false;
}
 if (parseInt(dateSeparated[0]) > calendar [dateSeparated[1]-1]){
     return false;
 }
 

return true;

}

console.log(isValidDate("03/04/2001"));
console.log(isValidDate("03/13/999"))
console.log(isValidDate("03/00/19999"))
console.log(isValidDate("45/01/2000"))



