// object access property inside of a objects

const college = {
  name: "NCC",
  classes: [11, 12],
  events: ["science fair", "bijoy dibos", "21 february"],
  dressColor: {
    color: "navi blue",
    result: {
      cgpa: 5,
      merit: "top",
    },
  },
  isPresent: true,
};
// console.log(college.events);
// console.log(college.events[2]);
// console.log(college.dressColor.color);
// console.log(college.dressColor.result);
// console.log(college.dressColor.result.merit);

// ----------

const player = {
  name: "musari",
  age: 43,
  sports: "cricket",
  team: "rangpur 20",
};
// console.log(player.team);

const laptop = {
  brand: "acer",
  price: 120000,
  hardDisk: true,
  isSsd: false,
  screenSize: 1080,
};
// console.log(laptop.screenSize);

const favPlaces = {
  name: "coxs bazar",
  distance: "400km",
  popularity: "high",
};
// console.log(favPlaces['popularity']);

const phone = {
  name: "nokia",
  color: "black",
  price: 5000,
};
// console.log(phone["price"]);

const library = {
  name: "public library",
  location: "dhaka",
  books: 5000,
};
// console.log(library.location);

const madrasha = {
  name: "NIKM",
  location: "narayanganj",
  eshtablished: 1955,
  grops: ["science", "arths", "commerce"],
};
// console.log(madrasha.grops[2]);

const familyMember = {
  father: {
    name: "abdul kuddus gazi",
    age: 63,
    isAlive: false,
  },
  mother: {
    name: "lutfa begum",
    age: 50,
    isAlive: true,
  },
  sonList: ["lucky", "jakia", "shamima", "miraj", "habiba"],
  sonFamilyList: {
    lucky: ["yousuf", "yeamin", "adiba"],
    jakia: ["jahangir", "jikrullah", "jakaria"],
    shamima: ["shahidul islam", "usman", "coming.."],
    miraj: ["shahajadi", "coming..."],
    habiba: ["rajib", "raiyan"],
  },
};
// console.log(familyMember.father["isAlive"]);
// console.log(familyMember.mother["age"]);
// console.log(familyMember.sonFamilyList.habiba);
