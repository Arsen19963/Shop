import { combineReducers } from 'redux';
import test from "./test";
import careers from "./careers";
import members from './teamMembers';
export default combineReducers({
    test: test,
    careers: careers,
    members: members,
});
