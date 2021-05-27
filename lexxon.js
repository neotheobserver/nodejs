/* map tutorial
 for menu buttonconst menu=[
    {
        name:'Bhat',
        category:'lunch'
    },
    {
        name:'Tarkari',
        category:'lunch'
    },
    {
        name:'Juice',
        category:'Breakfast'
    },
    {
        name:'pasta',
        category:'dinner'
    },
    {
        name:'eggs',
        category:'breakfast'
    },
    
];

const categories =['all',...new Set(menu.map((item)=> item.category))];
const result=document.querySelector('#result')
result.innerHTML=categories.map((category)=>{
    return `<button>${category}</button>`
}).join(' ')*/
/* object keys dynamic
const person ={
    name:'ardent'
};
console.log(person.name)
person.age=25
console.log(person)

const items ={
    'featured-items':['item1','item2']
}

console.log(items["featured-items"])
console.log(person['name'])

let appState='loading'
const keyName="computer"
const app={
    [appState]:true
}

app[keyName]='apple'
console.log(app)

const state={
    loading:true,
    name:'',
    job:''
}

function updateState(key,value){
    state[key]=value;
}

updateState('name','Ardent')
updateState('job','Student')
updateState('loading',false)
updateState('products',['css','java','html','js'])

console.log(state)*/
/*
const people=[
    {name:'bob',age:20,position:'developer'},
    {name:'peter',age:25,position:'designer'},
    {name:'susy',age:30,position:'the boss'},
    {name:'anna',age:35,position:'intern'}
]

//filter, if no match empty error, all the condition satisfied
const younPeople = people.filter((person)=>{
    //if (person.age<30){
        //return person
//}
return person.age<30
})
console.log(younPeople)
const developer=people.filter((person)=>person.position==='developer')
console.log(developer)
const seniorDev=people.filter((item)=>item.position==='senior dev')
console.log(seniorDev)

//find, if no match undefined, only one instance
const peter = people.find((person)=>person.name=="peter")
console.log(peter)
const pete = people.find((person)=>person.age>25)
console.log(pete)

console.log(peter.position)
const anna=people.filter((person)=>person.name=="anna")
console.log(anna)
console.log(anna.position)
console.log(anna[0].position)*/

/* 
//reduce,iterates callback function, reduce to a single value
//1st para =total, 2nd para, current iteration
const staff=[
    {name:'bob',age:20,position:'developer',salary:100},
    {name:'peter',age:25,position:'designer',salary:300},
    {name:'susy',age:30,position:'the boss',salary:400},
    {name:'anna',age:35,position:'intern',salary:10}
]

const dailyTotal=staff.reduce((total,person)=>{
    console.log(total);
    console.log(person.salary);
    total+=person.salary
    return total
},0)
console.log(dailyTotal)*/

/* destructuring array /faster and easir way to access nad unpack
const fruits = ['orange','banana','lemon']
const friends=['ardent','safal','avisek','uzwol']

const fruit1=fruits[0]
const fruit2=fruits[1]
const fruit3=fruits[2]

console.log(fruit1,fruit2,fruit3)

const [one,,three,four] = friends
console.log(one,three,four)

let first='bob'
let second='john';

//let temp=second;
//second=first;
//first=temp;

[second,first] = [first,second]
console.log(first,second)*/

/* destructuing object 

const bob={
    first:'bob',
    last:'sanders',
    city:'chicago',
    siblings:{sisters:'jane'}
}

//const firstName=bob.first;
//const lastName=bob.last
//const sister=bob.siblings.sisters
//console.log(firstName,lastName,sister)

//const {last,city,siblings:{sisters:favorite}}=bob

//console.log(favorite,last,city)

function printPerson({first,last,city,siblings:{sisters}}){
   // const{first,last}=person
    console.log(first,last,city,sisters)
}

printPerson(bob)*/

/* 
//spread operator, allows iterable to expand individually inside receiver
//split into single items and copy them

const udemy='udemy'
const letters=[...udemy]
console.log(letters)
const boys=['ardent','john','safal']
const girls=['susan','anna']

const bestFriend='arnold'
const friends=[...boys,bestFriend,...girls]
console.log(friends)

//reference
const newFrineds=[...friends]
newFrineds[0]='nancy'
console.log(newFrineds)
console.log(friends)*/

/* */
//rest operator, gather/collects item,destructuring,rest when declare
//sperad when invoke

const fruits = ['apple','orange','lemon','banana']
const[first] = fruits

const person={name:'john',lastName:'smith',job:'developer'}
const{name}=person;
console.log(name)
