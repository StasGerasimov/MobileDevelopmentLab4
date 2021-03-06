import React, { Component } from 'react'

// Завдання 1
// Заповніть словник, де:
// - ключ – назва групи
// - значення – відсортований масив студентів, які відносяться до відповідної групи

// Завдання 2
// - ключ – назва групи
// - значення – словник, де:
//   - ключ – студент, який відносяться до відповідної групи
//   - значення – масив з оцінками студента (заповніть масив випадковими значеннями, використовуючи функцію `randomValue(maxValue: Int) -> Int`)

// Завдання 3
// Заповніть словник, де:
// - ключ – назва групи
// - значення – словник, де:
//   - ключ – студент, який відносяться до відповідної групи
//   - значення – сума оцінок студента

// Завдання 4
// Заповніть словник, де:
// - ключ – назва групи
// - значення – середня оцінка всіх студентів групи

// Завдання 5
// Заповніть словник, де:
// - ключ – назва групи
// - значення – масив студентів, які мають >= 60 балів

// Приклад виведення

//Завдання 1
//["ІВ-73": ["Гончар Юрій", "Давиденко Костянтин", "Капінус Артем", "Науменко Павло", "Чередніченко Владислав"], "ІВ-72": ["Бортнік Василь", "Киба Олег", "Овчарова Юстіна", "Тимко Андрій"], "ІВ-71": ["Андрющенко Данило", "Гуменюк Олександр", "Корнійчук Ольга", "Музика Олександр", "Трудов Антон", "Феофанов Іван"]]

//Завдання 2
//["ІВ-73": ["Давиденко Костянтин": [5, 8, 9, 12, 11, 12, 0, 0, 14], "Капінус Артем": [5, 8, 12, 12, 0, 12, 12, 12, 11], "Науменко Павло": [4, 8, 0, 12, 12, 11, 12, 12, 15], "Чередніченко Владислав": [5, 8, 12, 12, 11, 12, 12, 12, 15], "Гончар Юрій": [5, 6, 0, 12, 0, 11, 12, 11, 14]], "ІВ-71": ["Корнійчук Ольга": [0, 0, 12, 9, 11, 11, 9, 12, 15], "Музика Олександр": [5, 8, 12, 0, 11, 12, 0, 9, 15], "Гуменюк Олександр": [5, 8, 12, 9, 12, 12, 11, 12, 15], "Трудов Антон": [5, 0, 0, 11, 11, 0, 12, 12, 15], "Андрющенко Данило": [5, 6, 0, 12, 12, 12, 0, 9, 15], "Феофанов Іван": [5, 8, 12, 9, 12, 9, 11, 12, 14]], "ІВ-72": ["Киба Олег": [5, 8, 12, 12, 11, 12, 0, 0, 11], "Овчарова Юстіна": [5, 8, 12, 0, 11, 12, 12, 12, 15], "Бортнік Василь": [4, 8, 12, 12, 0, 12, 9, 12, 15], "Тимко Андрій": [0, 8, 11, 0, 12, 12, 9, 12, 15]]]

//Завдання 3
//["ІВ-72": ["Бортнік Василь": 84, "Тимко Андрій": 79, "Овчарова Юстіна": 87, "Киба Олег": 71], "ІВ-73": ["Капінус Артем": 84, "Науменко Павло": 86, "Чередніченко Владислав": 99, "Гончар Юрій": 71, "Давиденко Костянтин": 71], "ІВ-71": ["Корнійчук Ольга": 79, "Трудов Антон": 66, "Андрющенко Данило": 71, "Гуменюк Олександр": 96, "Феофанов Іван": 92, "Музика Олександр": 72]]

//Завдання 4
//["ІВ-71": 79.333336, "ІВ-72": 80.25, "ІВ-73": 82.2]

//Завдання 5
//["ІВ-72": ["Бортнік Василь", "Киба Олег", "Овчарова Юстіна", "Тимко Андрій"], "ІВ-73": ["Давиденко Костянтин", "Капінус Артем", "Чередніченко Владислав", "Гончар Юрій", "Науменко Павло"], "ІВ-71": ["Музика Олександр", "Трудов Антон", "Гуменюк Олександр", "Феофанов Іван", "Андрющенко Данило", "Корнійчук Ольга"]]


let studentsStr = "Дмитренко Олександр - ІП-84; Матвійчук Андрій - ІВ-83; Лесик Сергій - ІО-82; Ткаченко Ярослав - ІВ-83; Аверкова Анастасія - ІО-83; Соловйов Даніїл - ІО-83; Рахуба Вероніка - ІО-81; Кочерук Давид - ІВ-83; Лихацька Юлія - ІВ-82; Головенець Руслан - ІВ-83; Ющенко Андрій - ІО-82; Мінченко Володимир - ІП-83; Мартинюк Назар - ІО-82; Базова Лідія - ІВ-81; Снігурець Олег - ІВ-81; Роман Олександр - ІО-82; Дудка Максим - ІО-81; Кулініч Віталій - ІВ-81; Жуков Михайло - ІП-83; Грабко Михайло - ІВ-81; Иванов Володимир - ІО-81; Востриков Нікіта - ІО-82; Бондаренко Максим - ІВ-83; Скрипченко Володимир - ІВ-82; Кобук Назар - ІО-81; Дровнін Павло - ІВ-83; Тарасенко Юлія - ІО-82; Дрозд Світлана - ІВ-81; Фещенко Кирил - ІО-82; Крамар Віктор - ІО-83; Иванов Дмитро - ІВ-82"

let dict1 = new Map()
let dict2 = new Map()
let dict3 = new Map()
let dict4 = new Map()
let dict5 = new Map()

let studentsArr = studentsStr.split('; ')

studentsArr.map((elem) => dict1.set(elem.split(' - ')[1]))

let randomValue = () => {
    let lst = []
    let sum = 0

    let rvLast = Math.floor(Math.random() * Math.floor(16))
    for (let i = 0; i < 7; i++) {
        let rv = Math.floor(Math.random() * Math.floor(12))
        lst.push(rv)
        sum += rv
    }
    lst.push(rvLast)
    sum += rvLast

    return (
        [lst, sum]
    )
}

for (let [key] of dict1) {

    let lst = []
    let students60plus = []

    let dictInner2 = new Map()
    let dictInner3 = new Map()

    studentsArr.forEach(elem => {

        let sumOfMarksforAllStundents = 0

        if (elem.indexOf(key) != -1) {
            lst.push(elem.split(" - ")[0])
        }

        lst.sort().forEach((el) => {
            let randomValueList = randomValue()[0]
            let randomValueSum = randomValue()[1]

            dictInner2.set(el, randomValueList)
            dictInner3.set(el, randomValueSum)

            if (randomValueSum >= 60 && elem.indexOf(key) != -1) {
                students60plus.push(el)
            }

            sumOfMarksforAllStundents += randomValueSum
        })

        let middleMarkforAllStundents = sumOfMarksforAllStundents / lst.length

        dict1.set(key, lst.sort())
        dict2.set(key, dictInner2)
        dict3.set(key, dictInner3)
        dict4.set(key, middleMarkforAllStundents)
        dict5.set(key, students60plus)
    })
}

function OutputMap(dict) {
    let result = ''
    for (let [key, value] of dict) {
        result += (key + ': [')
        for (let [key1, value1] of value) {
            result += (key1 + ': [' + value1 + ']' + ', ')
        }
    }
    return result
}

function Output(dict) {
    let result = ''
    for (let [key, value] of dict) {
        if (typeof (value) != 'number') {
            result += (key + ': [' + value + ']' + ', ')
        } else {
            result += (key + ': ' + value + ', ')
        }
    }

    return result
}


console.log("\nЗавдання 1")
// console.log(dict1);
console.log(Output(dict1));

console.log("\nЗавдання 2")
// console.log(dict2);
console.log(OutputMap(dict2));

console.log("\nЗавдання 3")
// console.log(dict3);
console.log(OutputMap(dict3));

console.log("\nЗавдання 4")
// console.log(dict4);
console.log(Output(dict4));

console.log("\nЗавдання 5")
// console.log(dict5);
console.log(Output(dict5));

console.log('\n');


class Contents extends Component {
    render() {

        return (
            <> </>
        );
    }
}

export default Contents;