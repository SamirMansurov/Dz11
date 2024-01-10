
let persons = [
    { name: "John", age: 25, city: "NewYork" },
    { name: "Alice", age: 30, city: "London" },
    { name: "Bob", age: 22, city: "Paris" },
    { name: "Alex", age: 19, city: "London" },
    { name: "Tyler", age: 24, city: "NewYork" },
    { name: "Constantine", age: 31, city: "Paris" },
    { name: "Cole", age: 21, city: "London" },
  ];

// №1

function findPersonsByCity(arr) {
 
    return persons.filter(persons => persons.city == arr)
                  
    }
    
    let cityName = prompt('name')
    console.log(findPersonsByCity(cityName));
    





// №2

// function calculateAverageAge () {

// return persons.reduce((a,b) => a + b.age,0) / persons.length

// }

// console.log(calculateAverageAge());




// №3

// function addNewPerson (name, age, city) {
//   let obj = {
//     name: name,
//     age:age,
//     city:city
//   }
//  persons.push(obj)
// console.log(persons);
// }

//  addNewPerson('Eve',28,'San Francisco')
  

  
    
















































//  function calculateAverageAge(total) {
//    return total.reduce(persons ,total)

//  }

// console.log( calculateAverageAge());