const createPlan = [
  {
    id: 0,
    question: "How do you drink your coffee?",
    options: [
      {
        id: 5,
        option: "Capsule",
        description: "Compatible with Nespresso systems and similar brewers",
      },
      {
        id: 6,
        option: "Filter",
        description:
          "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        id: 7,
        option: "Espresso",
        description:
          "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  {
    id: 1,
    question: "What type of coffee?",
    options: [
      {
        id: 8,
        option: "Single origin",
        description:
          "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        id: 9,
        option: "Decaf",
        description:
          "Just like regular coffee, except the caffeine has been removed",
      },
      {
        id: 10,
        option: "Blended",
        description:
          "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    id: 2,
    question: "How much would you like?",
    options: [
      {
        id: 11,
        option: "250g",
        description:
          "Perfect for the solo drinker. Yields about 12 delicious cups",
      },
      {
        id: 12,
        option: "500g",
        description:
          "Perfect option for a couple. Yields about 40 delectable cups",
      },
      {
        id: 13,
        option: "1000g",
        description:
          "Perfect for offices and events. Yields about 90 delightful cups",
      },
    ],
  },
  {
    id: 3,
    question: "Want us to grind them?",
    options: [
      {
        id: 14,
        option: "Wholebean",
        description: "Best choice if you cherish the full sensory experience",
      },
      {
        id: 15,
        option: "Filtered",
        description:
          "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        id: 16,
        option: "Cafetiére",
        description:
          "Course ground beans specially suited for french press coffee",
      },
    ],
  },
  {
    id: 4,
    question: "How often should we deliver?",
    options: [
      {
        id: 17,
        option: "Every week",
      },
      {
        id: 18,
        option: "Every 2 weeks",
      },
      {
        id: 19,
        option: "Every month",
      },
    ],
  },
];

export default createPlan;
