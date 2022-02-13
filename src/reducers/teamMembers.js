let data = [
  {
    id: 0,
    img: 'https://personalexcellence.co/files/ceo.jpg',
    title: "Some product name",
    position: "CEO",
  },
  {
    id: 1,
    img: 'https://fundsnetservices.com/wp-content/uploads/business-owner.jpg',
    title: "Some product name",
    position: "Owner",
  },
  {
    id: 2,
    img: "https://www.freelancinggig.com/blog/wp-content/uploads/2017/05/art-director.jpg",
    title: "Some product name",
    position: "Art Director",
  },
  {
    id: 3,
    img:"https://i.ytimg.com/vi/0xZz2t-Ex1I/maxresdefault.jpg",
    title: "Some product name",
    position: "Art Director",
  },
];

export default function members(state = data, action) {
  if (action.type === "ADD_MEMBERS") {
    return action.payload;
  }
  return state;
}
