let data = [
  {
    id: 1,
    title: "Market Development Officer (Goris)",
    date: "11/18/2021",
    text:
      "The company was founded 2012 year. In the first half becoming a food producer Nestle Company: (brands: KitKat, Nesquik, Nuts, Good Mix, Nestle, Rossia, Nescafe, BonPari, Bistroff, Torchin, Mivina, Maggi, Fitness, Nan, Nestogen, Gerber, Fellix, Frieskes, Darling, ProPlan) official Representative in Armenia. ",
    employment_type: "Full time",
    city: "Yerevan",
  },
  {
    id: 2,
    title: "Sales team supervisor",
    date: "11/18/2021",
    text:
      "The company was founded 2012 year. In the first half becoming a food producer Nestle Company: (brands: KitKat, Nesquik, Nuts, Good Mix, Nestle, Rossia, Nescafe, BonPari, Bistroff, Torchin, Mivina, Maggi, Fitness, Nan, Nestogen, Gerber, Fellix, Frieskes, Darling, ProPlan) official Representative in Armenia. ",
    employment_type: "Full time",
    city: "Yerevan",
  },
  {
    id: 3,
    title: "Warehouse worker",
    date: "11/18/2021",
    text:
      "The company was founded 2012 year. In the first half becoming a food producer Nestle Company: (brands: KitKat, Nesquik, Nuts, Good Mix, Nestle, Rossia, Nescafe, BonPari, Bistroff, Torchin, Mivina, Maggi, Fitness, Nan, Nestogen, Gerber, Fellix, Frieskes, Darling, ProPlan) official Representative in Armenia. ",
    employment_type: "Part Time",
    city: "Yerevan",
  },
  {
    id: 4,
    title: "Driver-shipper",
    date: "11/18/2021",
    text:
      "The company was founded 2012 year. In the first half becoming a food producer Nestle Company: (brands: KitKat, Nesquik, Nuts, Good Mix, Nestle, Rossia, Nescafe, BonPari, Bistroff, Torchin, Mivina, Maggi, Fitness, Nan, Nestogen, Gerber, Fellix, Frieskes, Darling, ProPlan) official Representative in Armenia. ",
    employment_type: "Full time",
    city: "Yerevan",
  },
];

export default function careers(state = data, action) {
  if (action.type === "ADD_CAREERS") {
    return action.payload;
  }
  return state;
}
