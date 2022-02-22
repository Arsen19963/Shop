let data = {
    en:{
        about:'about_en',
        catalog:'catalog_en',
    },
    ru:{
        about:'about_ru',
        catalog:'catalog_ru'
    },
    hy:{
        about:'about_hy',
        catalog:'catalog_hy'
    },
};
export default function languages(state = data, action) {
    if (action.type === "ADD_LANGUAGES") {
        return action.payload;
    }
    return state;
}
