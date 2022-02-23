import Cookies from 'universal-cookie';
const cookies = new Cookies();
let selectedLang = cookies.get('lang');
if(!selectedLang){
    selectedLang = 'en'
}
export default function lang(state = selectedLang, action) {
    if (action.type === "ADD_LANG") {
        return action.payload;
    }
    return state;
}
