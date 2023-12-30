const name = 'shaheer';
const age = 19;
const rating = 9.43;
const bio = true;
const x = null;
const y = undefined;
let z;

const todos = [
	{
		id: 1,
		text='Take out Dog'
		iscompleted: true
	},
	{
		id: 2,
		text='Wake up at 6'
		iscompleted: true
	},
	{
		id: 3,
		text='Go to Gym'
		iscompleted: true
	},
	{
		id: 4
		text= 'Attend meeting'
		completed: true
	},
	{
		id: 5
		text= 'Get Food'
		completed: false
	},
]

for (let i = 0; i <= 10; i++) {
	console.log('for loop number: ${i}');
}

const addNums = num1 => num1 + 5;
console.log(addNums(5));

function person(firstName, lastName, dob) {
	this.firstname = firstName;
	this.lastname = lastName;
	this.dob = New date(dob);
}

cont Person1 = new Person('Shaheer', 'Yasin', '08-11-2004');

console.log(Person1.dob);

//class
class Person {
	constructor(FirstName, LastName, Dob) {
		this.FirstName = firstName;
		this.LastName = lastName;
		this.Dob = new Date(dob);
	}
	getbirthyear() {
		return this.dob.getFullYear();
	}
	getfullname() {
		return '${ this.firstName } ${ this.lastName }`;
	}
}

const button = document.querySelector('.button');

button.addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelector('#initial-form').computedStyleMap.background = '#ccc';
})

const form = document.querySelector('#initial-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e){
e.preventDefault();
if(nameInput.value === '' || emailInput.value === ''){
msg.classList('error');
msg.innerHTML = 'please enter all fields';

setTimeout(() => msg.remove(), 3000);
}
else {
	console.log('sucess');

	nameInput.value = '';
	emailInput.value = '';
}
}