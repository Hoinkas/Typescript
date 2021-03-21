class Person {
    name: string;
    surname: string;
    age: Number;

    constructor(name: string, surname: string, age: number) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    Show():string {
        return document.body.innerHTML = `<h1>Witaj ${this.name} i ${this.surname} mam ${this.age} lat</h1>`
    }
}

let p = new Person("John","Blake", 11);
p.Show();
