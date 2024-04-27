/*
let key = "color";

let apple = {
    color: "white",
    size: "big",
}

apple["pos"] = "inthemiddle";
*/

/*
let mytriangle = {
    a: 5,
    b: 10,
    area: function() {
        return (this.a + this.b) / 2;
    },
    hyp: function() {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }
};
*/

/*
class Triangle {
    Area() {
        return (this.a * this.b) / 2
    }
    Hyp() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }
}

const myTri = new Triangle();
myTri.a = 2;
myTri.b = 3;

const secTri = new Triangle();
secTri.a = 3;
secTri.b = 4;
*/

/*
class Triangle {
    constructor(a, b) {
        if(!Number.isFinite(a) || a <=  0) {
            throw new Error(`invalid a: ${a}`);
        }
        if(!Number.isFinite(b) || b <=  0) {
            throw new Error(`invalid a: ${b}`);
        }
        this.a = a;
        this.b = b;
        //checks if the inputs are numbers and greater than 0, then puts them into the object's parameters
    }

    Area() {
        return (this.a * this.b) / 2
    }
    Hyp() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }
}

const tri = new Triangle(5, 10);
console.log(tri.Area());
*/

/*
class BankAccount {
    constructor(bal = 0, accHold, accNum) {
        this.accountHolder = accHold;
        this.accountNumber = accNum;
        this.balance = bal;
    }
    dep(Num) {
        this.balance += Num; 
    }
    wit(Num) {
        if(this.balance >= Num) {
            this.balance -= Num;
        } else {
            alert("you cannot perfom this action!")
        }
        
    }
}
*/

/*
class Triangle {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    Area() {
        return(this.a * this.b) / 2;
    }
    Hyp() {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }

    describe() {
        return `With sides of ${this.a} and ${this.b}, the triangle's Area is ${this.Area()}, and it's Hypotinuse is ${this.Hyp()}.`;
    }
}

let myArray = [];
for (let i = 0; i < 5; i++) {
    const myTri = new Triangle(i + 1, (i + 1) ** 2);
    myArray.push(myTri);
    console.log(myTri.describe());
}
console.log(myArray);
*/

/*
class Triangle {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    Area() {
        return(this.a * this.b) / 2;
    }
    Hyp() {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }

    describe() {
        return `With sides of ${this.a} and ${this.b}, the triangle's Area is ${this.Area()}, and it's Hypotinuse is ${this.Hyp()}.`;
    }
}

class WeirdTriangle extends Triangle {
    //keeps all of the content inside of the original class, while making a new class that you can change
    describe() {
        return "do not bother be you son of a pi"
    }
}
*/
/*

class Triangle {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    Area() {
        return(this.a * this.b) / 2;
    }
    Hyp() {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }

    describe() {
        return `With sides of ${this.a} and ${this.b}, the triangle's Area is ${this.Area()}, and it's Hypotinuse is ${this.Hyp()}.`;
    }
}

class WeirdTriangle extends Triangle {
    constructor(a, b, color) {
        //super passes a and b from the original class's constructor through this class, and it's required if you want to add to the constructor
        super(a, b);
        this.color = color;
    }
    describe() {
        return `With sides of ${this.a} and ${this.b}, the triangle's Area is ${this.Area()}, and it's Hypotinuse is ${this.Hyp()}. The color is ${this.color}`;
    }
}
*/

/*
class Cat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    // static is tied to the class itself, and not the objects
    static species = "felis catus";
    // a static method in a class is used to group functions together, and to create instances
    static meow() {
        // "this" in the static method is referred to the class itself, and not the object
        console.log(this);
    }
}
*/

// chooses a random item from the provided array

/*
function choice(arr) {
    const randIdx = Math.floor(Math.random() * arr.length);
    return arr[randIdx];
}

class Cat {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    //makes instances
    static registerStray() {
        const names = ["alma", "körte", "szilva"];
        const name = choice(names);
        return new Cat(name, "unknown");
    } 
}
*/

/*
class ArrayUtils {
    constructor() {
        throw new Error('ArrayUtils cannot be instantiated.');
    }
    
    static average(array) {
        if (array.length === 0) throw new Error('Array cannot be empty.')
        let idx = 0;
        for (let i = 0; i < array.length; i++) {
            idx += array[i];
        }
        idx = idx / array.length;
        return idx;
    }
    static max(array) {
        let idx = 0;
        let place = 0;
        for (let i = 0; i < array.length; i++) {
            idx = array[i];
            if (idx > place) place = idx;
        }
        return place;
    }
}
*/

/*
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    // get makes the function's output act like a property
    
    get diameter() {
        return this._radius * 2;
    }

    get radius() {
        return this._radius;
    }
}
*/

/*
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    // we use it when we want to provide a mechanism for someone to update something like its a property but we have something behind the scenes
    set radius(value) {
        if(value < 0) {
            throw new Error("Radius cannot be negative!")
        } else {
            this._radius = value;
        }
    }
}
*/

/*
class User {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(newName) {
        // the split function creates an array 
        const [first, last] = newName.split(" ");
        this.firstName = first;
        this.lastName = last;
    }
}
*/

/*
class Cat {
    static numOfCats = 0;
    name;
    breed;
    numLegs = 4;

    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        Cat.numOfCats += 1;
    }

    amputate() {
        this.numLegs -= 1;
    }
}
*/

/*
class Circle {
    // the # makes the variable inaccessable outside the class, the same goes for methods
    #radius;
    constructor(radius) {
        this.#radius = radius;
    }
}
*/

/*
class Myclass {
    //runs when the class is loaded
    static {
        console.log("class is loaded!");
    }
}
*/

/*
class UserProfile {
    constructor(username, email, birthdate) {
        this._username = this.scanUsername(username);
        this._email = this.scanEmail(email);
        this._birthdate = this.scanBirth(birthdate);
    }

    scanUsername(user) {
        if (user !== "" && typeof user == "string") {
            return user;
        } else {
            throw new Error('Invalid username.');
        }
    }
    
    scanEmail(mail) {
        if (mail.indexOf("@") != -1) {
            return mail;
        } else {
            throw new Error('Invalid email.');
        }
    }
    
    scanBirth(birth) {
        if(!isNaN(Date.parse(birth))) {
            return birth;
        } else {
            throw new Error('Invalid birthdate.');
        }
    }
    
    get username() {
        return this.scanUsername(this._username);
    }
    
    get email() {
        return this.scanEmail(this._email);
    }
    
    get birthdate() {
        return this.scanBirth(this._birthdate);
    }
    
    set username(user) {
        this._username = this.scanUsername(user);   
    }
    
    set email(mail) {
        this._email = this.scanEmail(mail);   
    }
    
    set birthdate(birth) {
        this._birthdate = this.scanBirth(birth);   
    }
}
*/