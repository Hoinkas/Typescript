import { Aggregate } from "mongoose";

interface Person {
    name: string;
    surname: string;
    age: number;
    role: string;
}

const users: Person[] = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user'},
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user'},
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user'},
]

const admins: Person[] = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin'},
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin'},
]

// 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
function logPerson(person: Person): void {
    console.log(this.name + " " + this.surname + ", " + this.age + ", " + this.role)
}

//klucze
//Object.keys(criteria)
function filterPersons(persons: Person[], criteria: any): Person[] {

    persons = [];
    persons.forEach(p => {
        if (p == criteria)
            persons.push(p)
    });

    return persons;
}

function showPersons(persons: Person[]): void {
    persons.forEach(p => {
        logPerson(p);
    });
}

// 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
var gluedRoles = [...users, ...admins];

// 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
function isProperAge(person: Person):Person {
    if(person.age >= 25)
        return person;
}

var filteredProperAge = gluedRoles.filter(isProperAge);

// 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
function filterByName(): Person[] {
    const filtered = filterPersons(gluedRoles, { name: 'Adam' });
    return filtered;
}

// TODO:
// 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
// 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
// 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
// 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
 
