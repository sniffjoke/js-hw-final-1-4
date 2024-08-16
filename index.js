// const superUser = {
//     id: 10,
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     address: {
//         street: 'Kattie Turnpike',
//         suite: 'Suite 198',
//         city: 'Lebsackbury',
//         zipcode: '31428-2261',
//         geo: {
//             lat: '-38.2386',
//             lng: '57.2232',
//         },
//     },
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: {
//         name: 'Hoeger LLC',
//         catchPhrase: 'Centralized empowering task-force',
//         bs: 'target end-to-end models',
//     },
// };
//
// const arr = {...superUser, address: { ...superUser.address, geo: {...superUser.address.geo, lat: 'test coordinate'}}}
// arr.address.geo.lat = 'qwerty'
// arr.name = 'qwerty'
//
// const newArr = structuredClone(superUser)
// console.log(arr)
// console.log(superUser)
// console.log(arrCopy)

// function sumAndDifference (a, b) {
//     return {
//         sum: a + b,
//         difference: a - b
//     }
// }
//
// const {difference, sum} = sumAndDifference(10, 5)
//
// console.log('Сумма: ', sum)
// console.log('Разность: ', difference)

// const numbers = [-1, 2, -3, 4, -5, 6]
//
// function getPositiveNumbers(arr) {
//     return arr.filter(x => x >= 0);
// }
//
// console.log(getPositiveNumbers(numbers))

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
//
// function mergeArrays(...arrays) {
//     return arrays.reduce((accumulator, current) => {
//         return accumulator.concat(current)
//     }, [])
// }
//
// console.log(mergeArrays(arr1, arr2))

// function findString(arr, str) {
//     return arr.includes(str);
// }
//
// const strings = ['apple', 'banana', 'orange']
//
// console.log(findString(strings,'banana'))
// console.log(findString(strings,'grape'))

// const people = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 35 },
// ];
//
//
// function sortByPropertyValue(arr, x) {
//     // return arr.sort((a, b) => a[x].localeCompare(b[x]));
//     return arr.sort((a, b) => a[x] - b[x]);
// }
//
// console.log(sortByPropertyValue(people, 'age'))


