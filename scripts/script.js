// let data = {
//   id: "0001",
//   type: "donut",
//   name: "Cake",
//   ppu: 0.55,
//   batters: {
//     batter: [
//       { id: "1001", type: "Rick" },
//       { id: "1002", type: "Chocolate" },
//       { id: "1003", type: "Blueberry" },
//       { id: "1004", type: "Devil's Food" },
//     ],
//   },
//   topping: [
//     { id: "5001", type: "None" },
//     { id: "5002", type: "Glazed" },
//     { id: "5005", type: "Morty" },
//     { id: "5007", type: "helloWorld" },
//     { id: "5006", type: "Chocolate with Sprinkles" },
//     { id: "5003", type: "Chocolate" },
//     { id: "5004", type: "Maple" },
//   ],
// };

// exercices :

// // Affichez le nom
// console.log(data.name);
// // Affichez le ppu
// console.log(data.ppu);
// // Affichez le contenu de topping
// console.log(data.topping);
// // Affichez le type pour l'id 1004
// console.log(data.batters.batter[3].type);
// // Affichez le type pour l'id 5004
// console.log(data.topping[6].type);
// // Affichez l'id 5001
// console.log(data.topping[0].id);
// // Concaténez l'id 1001 et le type Rick dans une phrase ("Rick est l'id 1001")
// const phrase = `${data.batters.batter[0].type} est l'id ${data.batters.batter[0].id}`;
// console.log(phrase);
// // Concaténez le type de l'id 5004 avec le name "cake" de la même manière que précédemment
// const phrase2 = `${data.name} est l'id ${data.topping[6].id}`;
// console.log(phrase2);

let data = {
  Izaline: {
    nom: 'Dhalluin',
    prenom: 'Izaline',
    age: '25',
    phrase: function () {
      return "one, two, three viva l'Algérie";
    },
  },
  Martin: {
    nom: 'Lagrelle',
    prenom: 'martin',
    age: '20',
    phrase: function () {
      return 'phrase fétiche';
    },
  },
  Éléon: {
    nom: 'Lamps',
    prenom: 'Eléon',
    age: '25',
    phrase: function () {
      return 'Wouff';
    },
  },
  Cyrille: {
    nom: 'Deletré',
    prenom: 'Cyrille',
    age: '31',
    phrase: function () {
      return "on fait quand de l'angular ?";
    },
  },
  Guillaume: {
    nom: 'Cabaret',
    prenom: 'Guillaume',
    age: '31',
    phrase: function () {
      return 'Erling Haaland pour le doublé !';
    },
  },
  Jamal: {
    nom: 'Taibi',
    prenom: 'Jamal',
    age: '32',
    phrase: function () {
      return 'Come on gunners';
    },
  },
  Roxane: {
    nom: 'Kirchmeyer',
    prenom: 'Roxane',
    age: '26',
    phrase: function () {
      return 'C’est merveilleux…';
    },
  },
  Oussman: {
    nom: 'Soaré',
    prenom: 'Oussman',
    age: '21',
    phrase: function () {
      return 'Visca BARCA';
    },
  },
  Asma: {
    nom: 'Chebaiki',
    prenom: 'Asma',
    age: '32',
    phrase: function () {
      return "c'est le week-end";
    },
  },
  Thomas: {
    nom: 'Vieira',
    prenom: 'Thomas',
    age: 'Z2',
    phrase: function () {
      return "l'Inconnu";
    },
  },
  Julien: {
    nom: 'Beauchant',
    prenom: 'Julien',
    age: '21',
    phrase: function () {
      return 'misca musca mickey mouuse';
    },
  },
  Sabrina: {
    nom: 'Calesse',
    prenom: 'Sabrina',
    age: '32',
    phrase: function () {
      return 'Hamdoullah ca va';
    },
  },
  Sandy: {
    nom: 'Terry',
    prenom: 'Sandy',
    age: '39',
    phrase: function () {
      return 'Bon chance';
    },
  },
  Yassine: {
    nom: 'Boudouh',
    prenom: 'Yassine',
    age: '31',
    phrase: function () {
      return "économie d'énergie";
    },
  },
  Yaya: {
    nom: 'BALDE',
    prenom: 'Yaya',
    age: '22',
    phrase: function () {
      return 'of course';
    },
  },
};
data['Izaline'].passion = 'voyages';
data['Martin'].passion = 'montage vidéo';
data['Julien'].passion = 'gaming';
data['Éléon'].passion = 'Jeux vidéos / Ecriture';
data['Thomas'].passion = 'gaming';
data['Cyrille'].passion = 'jeux (vidéo, cartes, société, etc...)';
data['Guillaume'].passion = 'les IAs';
data['Sandy'].passion = 'Dessin';
data['Roxane'].passion = 'Jeu de survie';
data['Asma'].passion = 'Cuisiner';
data['Oussman'].passion = 'Foot';
data['Yassine'].passion = 'Voiture';
data['Jamal'].passion = 'foot';
data['Yaya'].passion = 'Sandy';
data['Sabrina'].passion = 'manger';

let phrase1 = ' a ';
let phrase2 = ' ans et aime ';
for (let key in data) {
  let nom = data[key].nom;
  let prenom = data[key].prenom;

  console.log(`${nom} ${prenom}`);
}

for (let key in data) {
  let nom = data[key].nom;
  let prenom = data[key].prenom;
  let age = data[key].age;
  let passion = data[key].passion;
  let phrase1 = 'a';
  let phrase2 = 'ans et aime';
  console.log(`${nom} ${prenom} ${phrase1} ${age} ${phrase2} ${passion}`);
}
