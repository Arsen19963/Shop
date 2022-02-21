import { combineReducers } from 'redux';
import test from "./test";
import careers from "./careers";
import members from './teamMembers';
import partners from "./partners";
import catalogue from "./catalogue";
import languages from "./languages";
export default combineReducers({
    test: test,
    careers: careers,
    members: members,
    partners: partners,
    catalogue: catalogue,
    languages:languages,
});
