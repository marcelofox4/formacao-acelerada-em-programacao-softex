const personList = [];

function personRegistration(name, phoneNumber, email) {
    person = [name, phoneNumber, email];
    personList.push(person);
    return person;
}

function printPersonList() {
    console.log('---------Lista de Pessoas---------')
    for (let i = 0; i < personList.length; i++) {
        for (let j = 0; j < personList[i].length; j++) {
            console.log(personList[i][j]);
        }
        console.log('----------------------------------')
    }
}

const quantityPeopleList = list => list.length;

personRegistration('Marcelo', '9 9999-9999', 'marcelo@email.com');
personRegistration('Matheus', '9 8888-8888', 'matheus@email.com');
personRegistration('Camila', '9 7777-7777', 'camila@email.com');

printPersonList();
console.log(`Lista de pessoas: ${quantityPeopleList(personList)} registros`);