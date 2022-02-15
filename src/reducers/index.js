import { combineReducers } from 'redux';
import test from "./test";
import careers from "./careers";
import members from './teamMembers';
import partners from "./partners";
import catalog from "./catalog";
export default combineReducers({
    test: test,
    careers: careers,
    members: members,
    partners: partners,
    catalog: catalog,
});
