let data = {
    en:{
        about:'about_en',
        products: 'products_en',
        catalog:'catalog_en',
        careers:'careers_en',
        partners:'partners_en',
        team:'team_en',
        about_us:"about_us_en",
    },
    ru:{
        about:'about_ru',
        products: 'products_ru',
        catalog:'catalog_ru',
        careers:'careers_ru',
        partners:'partners_ru',
        team:'team_ru',
        about_us:"about_us_ru",

    },
    hy:{
        about:'about_hy',
        products: 'products_hy',
        catalog:'catalog_hy',
        careers:'careers_hy',
        partners:'partners_hy',
        team:'team_hy',
        about_us:"about_us_hy",
    },
};

export default function languages(state = data, action) {
    if (action.type === "ADD_LANGUAGES") {
        return action.payload;
    }
    return state;
}
