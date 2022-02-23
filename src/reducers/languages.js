let data = {
    en:{
        about:'about_en',
        catalog:'catalog_en',
        careers:'careers_en',
        partners:'partners_en',
        team:'team_en'
    },
    ru:{
        about:'about_ru',
        catalog:'catalog_ru',
        careers:'careers_ru',
        partners:'partners_ru',
        team:'team_ru'
    },
    hy:{
        about:'about_hy',
        catalog:'catalog_hy',
        careers:'careers_hy',
        partners:'partners_hy',
        team:'team_hy'
    },
};

export default function languages(state = data, action) {
    if (action.type === "ADD_LANGUAGES") {
        return action.payload;
    }
    return state;
}
