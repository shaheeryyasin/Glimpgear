const Name = 'shaheer';
const Age = 19;
const Rating = 9.43;
const Bio = true;
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

const addnums = num1 => num1 + 5;
console.log(addnumms(5));

function person(FirstName, LastName, Dob) {
	this.firstname = FirstName;
	this.lastname = LastName;
	this.dob = New Date(Dob);
}

cont Person1 = new Person('Shaheer', 'Yasin', '08-11-2004');

console.log(Person1.dob);

//class
class Person {
	constructor(FirstName, LastName, Dob) {
		this.FirstName = FirstName;
		this.LastName = lastname;
		this.Dob = new Date(dob);
	}
	getbirthyear() {
		return this.Dob.getfullyear();
	}
	getfullname() {
		return ${ this.FirstName } ${ this.LastName }`;`
	}
}
