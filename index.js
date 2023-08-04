'use strict';
const user = {
  privateInfo: {
    id: 101,
    firstName: "Brad",
    lastName: "Pitt",
    birthday: {
      day: 18,
      month: 12,
      year: 1963,
    },
    children: [
      {
        name: "Anna",
        age: 15,
      },
      {
        name: "Tom",
        age: 23,
      },
    ],
  },
  contactInfo: {
    phone: "123-56-89",
    email: "pitt@gmail.com",
    address: {
      town: "New Y",
      state: "NY",
      street: "Avenu 45",
    },
  },
  proffessionInfo: {
    proffesion: "actor",
  },
};

// const yearBDay = user.privateInfo.birthday.year
// const dayBDay = user.privateInfo.birthday.day;
// const lastName = user.privateInfo.lastName

const {
  contactInfo: {
    phone: phonephoneUser,
    address: { town: townUser },
  },
  proffessionInfo: { proffesion: proffesionUser },
} = user;

// console.log(phonephoneUser);
// console.log(townUser);
// console.log(proffesionUser);
