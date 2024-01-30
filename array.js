/*
const years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
// console.log(years.0);   // синтаксическая ошибка
console.log(years[0]);  // работает как положено

const promise = {
    var: "text",
    array: [1, 2, 3, 4],
  };
  
  console.log(promise["array"]);
  
  const fruits = [];
fruits.push("банан", "яблоко", "персик","ослик");

console.log(fruits,fruits.length); // 3
console.log(Object.keys(fruits));
 */

/*
function getIntervalArray(start, end) {
    const array = [];
    // array.push(start);
    // array.push(end);  //возвращает длинну
    const startV = start;
    const endV = Math.abs(end) + 1;
    for (let i = startV; i < endV; i += 1) {
      array.push(i);
    }
    return array;
    // console.log(array);
  }
*/
//   function getIntervalArray1(start, end) {
//     return Array.from(
//       { length: Math.abs(end - start) + 1 },
//       (el, i) => i + start
//     );
//   }
/*
  function getIntervalArray1(start, end) {
    const value = Math.abs(end - start) + 1;
    return Array.from(
      { length: value },    //можно поробовать map использовать
      (el, i) => i + start
    );
  }


  console.log(getIntervalArray(-5, 3));
  console.log(getIntervalArray1(-5, 3));
*/
/*
function findElement(arr, value) {
  let array = arr;
  let valueV = value;
  return array.indexOf(valueV);
}
console.log(findElement([0, 1, 2, 1, 4, 5], 1));
*/



// Возвращает количество всех вхождений указанного элемента в массив.
/*
function findAllOccurrences(arr, item) {
  function forFilter(element) {
    return element === item;
  }
  let arrayfiltred = arr.filter(forFilter);
  return arrayfiltred.length;
}
console.log(findAllOccurrences([ 0, 0, 1, 1, 1, 2, 2 ], 2));
console.log(findAllOccurrences([ null, undefined, null ], null));
*/

// Удаляет ложные значения из указанного массива. Ложные значения: false, null, 0, «», undefined и NaN.
/*
function removeFalsyValues(arr) {
  function forFilter(element) {
    let elementValue;
    if (element !== (false || null || 0 || '' || undefined || NaN)) {
      elementValue = element;
    }
    return elementValue;
  }
  const arrayfiltred = arr.filter(forFilter);
  return arrayfiltred;
}

console.log(removeFalsyValues([ 0, false, 'cat', NaN, true, '', null]));
console.log( removeFalsyValues([ 1, 2, 3, 4, 5, 'false' ]));
*/

// Возвращает массив, содержащий длины каждой строки в указанном массиве строк.
/*
function getStringsLength(arr) {
  function forFilter(element) {
    return element.length;
  }
  return arr.map(forFilter);
}
console.log(getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ]));
console.log(getStringsLength([ 'angular', 'react', 'ember' ]));
*/

//Возвращает среднее значение всех элементов в указанном массиве чисел.

function getAverage(arr) {
  const initialValue = 0;
  const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
   return sumWithInitial / arr.length;

}

console.log(getAverage([ 1, 10, 100, 1000 ]));