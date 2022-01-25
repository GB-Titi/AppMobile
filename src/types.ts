export type TopItem = {
  name: string;
  order: number;
  description?: string;
  img?: string;
  link?: string;
};

export type Top = {
  title: string;
  items: TopItem[];
};

export type List = Top[];

export const defaultList: List = [
  {
    title: "Equipe type 1",
    items: [
      {
        order: 1,
        name: "Bulbasaur",
        description:
          "A strange seed was\nplanted on its\nback at birth.\u000cThe plant sprouts\nand grows with\nthis POKéMON.",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        link: "https://www.pokepedia.fr/Bulbizarre",
      },
      {
        order: 2,
        name: "Charmander",
        description:
          "Obviously prefers\nhot places. When\nit rains, steam\u000cis said to spout\nfrom the tip of\nits tail.",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        link: "https://www.pokepedia.fr/Salamèche",
      },
      {
        order: 3,
        name: "Charizard",
        description:
          "Spits fire that\nis hot enough to\nmelt boulders.\u000cKnown to cause\nforest fires\nunintentionally.",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        link: "https://www.pokepedia.fr/Dracaufeu",
      },
      {
        order: 4,
        name: "Rattata",
        description:
        "Bites anything\nwhen it attacks.\nSmall and very\u000cquick, it is a\ncommon sight in\nmany places.",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
        link: "https://www.pokepedia.fr/Rattata",
      },
      {
        order: 5,
        name: "Raichu",
        description:
        "When electricity\nbuilds up inside\nits body, it\u000cbecomes feisty.\nIt also glows in\nthe dark.",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
        link: "https://www.pokepedia.fr/Raichu",
      },
      {
        order: 6,
        name: "Seadra",
        description:
          "The poisonous barbs all over its body are\nhighly valued as ingredients for making\ntraditional herbal medicine. It shows no\nmercy to anything approaching its nest.",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
        link: "https://www.pokepedia.fr/Hypoc%C3%A9an",
      },
    ],
  },
  {
    title: "Equipe type 1",
    items: [
      {
        order: 1,
        name: "Bulbasaur",
        description:
          "A strange seed was\nplanted on its\nback at birth.\u000cThe plant sprouts\nand grows with\nthis POKéMON.",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        link: "https://www.pokepedia.fr/Bulbizarre",
      },
      {
        order: 2,
        name: "Charmander",
        description:
          "Obviously prefers\nhot places. When\nit rains, steam\u000cis said to spout\nfrom the tip of\nits tail.",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        link: "https://www.pokepedia.fr/Salamèche",
      },
      {
        order: 3,
        name: "Charizard",
        description:
          "Spits fire that\nis hot enough to\nmelt boulders.\u000cKnown to cause\nforest fires\nunintentionally.",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        link: "https://www.pokepedia.fr/Dracaufeu",
      },
      {
        order: 4,
        name: "Rattata",
        description:
        "Bites anything\nwhen it attacks.\nSmall and very\u000cquick, it is a\ncommon sight in\nmany places.",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
        link: "https://www.pokepedia.fr/Rattata",
      },
      {
        order: 5,
        name: "Raichu",
        description:
        "When electricity\nbuilds up inside\nits body, it\u000cbecomes feisty.\nIt also glows in\nthe dark.",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
        link: "https://www.pokepedia.fr/Raichu",
      },
      {
        order: 6,
        name: "Seadra",
        description:
          "The poisonous barbs all over its body are\nhighly valued as ingredients for making\ntraditional herbal medicine. It shows no\nmercy to anything approaching its nest.",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
        link: "https://www.pokepedia.fr/Hypoc%C3%A9an",
      },
    ],
  }
];
