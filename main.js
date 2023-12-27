const name = 'shaheer';
const age = 19;
const rating = 9.23;
const bio = true;
const x = null;
const y = undefined;
let z;

const todos = [
	{
		id: 1,
		text='Take out Dog'
		iscompleted: true,
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
]

for (let i = 0; i <= 10; i++) {
	console.log('for loop number: ${i}');
}

const addnums = num1 => num1 + 5;
console.log(addnumms(5));

function person(firstname, lastname, dob) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.dob = new date(dob);
}

cont person1 = new person('shaheer', 'Yasin', '08-11-2004');

console.log(person1.dob);

//class
class person {
	constructor(firstname, lastname, dob) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.dob = new date(dob);
	}
	getbirthyear() {
		return this.dob.getfullyear();
	}
	getfullname() {
		return ${ this.firstname } ${ this.lastname }`;`
	}
}