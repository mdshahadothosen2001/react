//Primitives/ value type-> string, number,boolean,undifined,null
//Reference-> Object,Array,function

// discuss object

let person={
    name:'Md. Shahadot Hosen',
    title:'Software Engineer',
    age:21,
    born:'Bogura'
}
console.log(person)
console.log(person.name)
console.log(person.age)

// we can access and changed data
// use dot notation
person.title='Machine Learning'
console.log(person.title)

// use bracket notation
person['name']='Md. Shahadot Hosen [Eng.]'
console.log(person.name)

// Dynamic way
let selection='name'
person[selection]='Eng. Md. Shahadot Hosen'
console.log(person.name)

