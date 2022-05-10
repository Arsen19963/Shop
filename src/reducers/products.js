let data = {
  // filter: [{ id: 1, name: "All product" }],
  // categories: [
  //   { id: 1, name: "Category name" },
  //   { id: 2, name: "Some product name" },
  //   { id: 3, name: "Category name" },
  //   { id: 4, name: "Some product name" },
  // ],
  products: [
    {
      id: 1,
      name: "Makfa",
      weight: 50,
      brand: "Makfa",
      desc: "description product",
      image: "../../public/images/flour.png",
      some:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      name: "Rawlife",
      image: "../../public/images/rawlifePekan.png",

      weight: 50,
      desc: "description product",
      brand: "rawlife",
      some:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      name: "Rawlife",
      image: "../../public/images/rawlifePekan.png",
      weight: 50,
      desc: "description product",
      some:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      brand: "rawlife",
    },

    {
      id: 4,
      name: "Purina",
      image: "../../public/images/purinaOne.png",
      weight: 50,
      desc: "description product",
      some:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      brand: "purina",
    },
    {
      id: 5,
      name: "Chernagalovka",
      image: "../../public/images/savinov.png",
      weight: 50,
      desc: "description product",
      some:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      brand: "chernagalovka",
    },
    {
      id: 6,
      name: "Chernagalovka",
      image: "../../public/images/savinov.png",
      weight: 50,
      desc: "description product",
      some:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      brand: "chernagalovka",
    },
    {
      id: 7,
      name: "Nescafe",
      image: "../../public/images/nescafe.png",
      weight: 50,
      desc: "description product",
      some:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      brand: "nestle",
    },
    {
      id: 8,
      name: "Pads",
      image: "../../public/images/pads.png",
      weight: 50,
      desc: "description product",
      some:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      brand: "nestle",
    },
  ],
};

export default function products(state = data, action) {
  if (action.type === "ADD_CATALOGUE") {
    return action.payload;
  }
  return state;
}
