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

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function extractSubarray(arr, st, e) {
//     let newArr = arr.slice(st, e).length
//     arr.splice(st, newArr)
//     console.log('Extracted: ', newArr)
//     return array
// }
//
// console.log(extractSubarray(array, 1, 3))

// let obj = { name: 'Alice' };
// function addPropertyToObject(obj, k, v) {
//     return obj[k] = v;
// }
// addPropertyToObject(obj, 'age', 30);
//
// console.log(obj)

// const students = {
//     Alice: [4, 5, 3],
//     Bob: [3, 2, 4],
//     Charlie: [5, 5, 5]
// };
//
// function formatStudentGrades(arr) {
//     return Object.entries(arr).map(item => {
//         return item[0] + ': ' + item[1].join(',')
//     })
// }
//
// console.log(formatStudentGrades(students))

// const library = {
//     'The Great Gatsby': { genre: 'Fiction' },
//     'To Kill a Mockingbird': { genre: 'Fiction' },
//     1984: { genre: 'Science Fiction' },
//     'Pride and Prejudice': { genre: 'Romance' },
//     'The Catcher in the Rye': { genre: 'Fiction' },
// };
//
// function getUniqueGenres(obj) {
//     return [...new Set(Object.values(obj).map(item => Object.values(item).join('')))];
// }
//
// console.log(getUniqueGenres(library))

// const library = {
//     'The Great Gatsby': { genre: 'Fiction' },
//     'To Kill a Mockingbird': { genre: 'Fiction' },
//     1984: { genre: 'Science Fiction' },
//     'Pride and Prejudice': { genre: 'Romance' },
//     'The Catcher in the Rye': { genre: 'Fiction' },
// };
//
// function getUniqueGenres(obj) {
//     return [...new Set(Object.values(obj).map(item => item.genre))];
// }
//
// console.log(getUniqueGenres(library))

const pairs = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
];

function createMapFromArray(arr) {
    let newMap = new Map
    arr.map(item => {
        newMap.set(...item);
    })
    return newMap
}

console.log(createMapFromArray(pairs));

