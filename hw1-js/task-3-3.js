const findBestEmployee = function (employees) {
  ('use strict');
  // Write code under this line

  const tasks = Object.values(employees);
  const biggestNumberOfTasks = Math.max(...tasks);
  // console.log(biggestNumberOfTasks);
  let key;
  let bestEmployee = '';
  const keys = Object.keys(employees);
  for (key of keys) {
    if (employees[key] === biggestNumberOfTasks) {
      // console.log(key);
      bestEmployee = key;
      // console.log(bestEmployee);
    }
  }
  return bestEmployee;
};

//   console.log(typeof task);
//   console.log(Number(Math.max(tasks)));
// }

//2
// for (const numberOfTasks of tasks) {
//   let biggestNumberOfTasks = 0;
//   if (numberOfTasks > 0) {
//     biggestNumberOfTasks = numberOfTasks;
//   }
//   console.log(biggestNumberOfTasks);
// }

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
