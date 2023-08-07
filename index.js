"use strict";

// Створити змінні для року народження, імені другої дитини, робочого телефону, вулиця та номер будинку.
// Використовуючи одну деструктуризацію.

const user = {
  id: 1,
  privateInfo: {
    fname: "Brad",
    sname: "Pitt",
    bday: {
      day: 18,
      month: 12,
      year: 1963,
    },
    children: ["Helen", "Alex", "Georg", "Anna"],
  },
  contactInfo: {
    phone: {
      work: "123-12-45",
      mobile: "005-002-003",
    },
    adress: {
      town: "ZP",
      street: "12Avenu",
      house: 45,
    },
    mail: "brad@gmail.com",
  },
  profession: "actor",
};
// const [, children2] = user.children
const {
  privateInfo: {
    bday: { year },
    children: [, children2],
  },
  contactInfo: {
    phone: { work },
    adress: { street, house },
  },
} = user;
// console.log(year);
// console.log(children2);
// console.log(work);
// console.log(street);
// console.log(house);

// const user2 = {
//   privateInfo: {
//     id: 101,
//     firstName: "Brad",
//     lastName: "Pitt",
//     birthday: {
//       day: 18,
//       month: 12,
//       year: 1963,
//     },
//     children: [
//       {
//         name: "Anna",
//         age: 15,
//       },
//       {
//         name: "Tom",
//         age: 23,
//       },
//     ],
//   },
//   contactInfo: {
//     phone: "123-56-89",
//     email: "pitt@gmail.com",
//     address: {
//       town: "New Y",
//       state: "NY",
//       street: "Avenu 45",
//     },
//   },
//   proffessionInfo: {
//     proffesion: "actor",
//   },
// };

// const yearBDay = user.privateInfo.birthday.year
// const dayBDay = user.privateInfo.birthday.day;
// const lastName = user.privateInfo.lastName

// const {
//   contactInfo: {
//     phone: phonephoneUser,
//     address: { town: townUser },
//   },
//   proffessionInfo: { proffesion: proffesionUser },
// } = user2;

// console.log(phonephoneUser);
// console.log(townUser);
// console.log(proffesionUser);
