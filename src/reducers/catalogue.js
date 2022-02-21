let data = {
  filter: [{ id: 1, name: "All product" }],
  categories: [
    { id: 1, name: "Category name" },
    { id: 2, name: "Some product name" },
    { id: 3, name: "Category name" },
    { id: 4, name: "Some product name" },
  ],
  products: [
    {
      id: 1,
      name: "Some product name",
      image:
        "https://picsum.photos/200/300",
      weight: 50,
      desc: "description product",
      fid: 1,
      some:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      name: "Some product name",
      image:
        "https://picsum.photos/200/300",
      weight: 50,
      desc: "description product",
      fid: 1,
      some:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      name: "Some product name",
      image:
        "https://picsum.photos/200/300",
      weight: 50,
      desc: "description product",
      fid: 1,
      some:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 4,
      name: "Some product name",
      image:
        "https://picsum.photos/200/300",
      weight: 50,
      desc: "description product",
      fid: 1,
      some:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 5,
      name: "Some product name",
      image:
        "https://picsum.photos/200/300",
      weight: 50,
      desc: "description product",
      fid: 1,
      some:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 6,
      name: "Some product name",
      image:
        "https://picsum.photos/200/300",
      weight: 50,
      desc: "description product",
      fid: 1,
      some:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ],
};
export default function catalogue(state = data, action) {
  if (action.type === "ADD_CATALOGUE") {
    return action.payload;
  }
  return state;
}
