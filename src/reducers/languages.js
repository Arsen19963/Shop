let data = {
    default: [
        {
            id: 1,
            name: "eng",
            employment_type: "Full time",
        }
    ],
    main: [
        {
            id: 1,
            name: "eng",
            employment_type: "Full time",
        },
        {
            id: 2,
            name: "ru",
            employment_type: "Full time",
        },
        {
            id: 3,
            name: "arm",
            employment_type: "Part Time",
        },
    ]
};

export default function languages(state = data, action) {
    if (action.type === "ADD_LANGUAGES") {
        return action.payload;
    }
    return state;
}
