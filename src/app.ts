const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});

let age: number
let namee: string
age = 50;
namee = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;


let callback: (a:number) => number = (a) => { return 100 + a };

let anything: any = -20;
anything = 'Text';
anything = {};

let some:unknown;
some = 'Text';


let str: string;

if (typeof some === "string") {
  str = some;
}


let person: string | number

let persond : 'enable' | 'disable';



function showMessage(message: string): void {
  console.log(message);
}


function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}


type Page = {
  title: string,
  likes: number,
  accounts: string[],
  status: 'open' | 'close',
  details?: {    
    updateAt: string,
  }
}

const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {   
    updateAt: '2021-05-01',
  }
}

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}
