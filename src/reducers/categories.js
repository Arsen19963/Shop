let data = {
  categories: [
    {
      id: 1,
      title: "ALL",
    },
    {
      id: 2,
      title: "Coffee",
    },
    {
      id: 3,
      title: "Confectionery",
    },
    {
      id: 4,
      title: "Culin. & Cocoa, Bistroff",
    },
    {
      id: 5,
      title: "IN",
    },
    {
      id: 6,
      title: "pu",
    },
    {
      id: 7,
      title: "CPW",
    },
    {
      id: 8,
      title: "Mivina, Torchyn",
    },
  ],
  categories: [
    {
      id: 1,
      title: "ALL",
    },
  ],
  categories: [
    {
      id: 1,
      title: "ALL",
    },
    {
      id: 2,
      title: "flour",
    },
    {
      id: 3,
      title: "Cereals",
    },
    {
      id: 4,
      title: "Grains",
    },
  ],
  categories: [
    {
      id: 1,
      title: "ALL",
    },
  ],
  categories: [
    {
      id: 1,
      title: "ALL",
    },
    {
      id: 2,
      title: "Savinov",
    },
  ],
};
export default function categories(state = data, action) {
  if (action.type === " ADD_CATALOGUE") {
    return action.payload;
  }
  return state;
}
