import { combineReducers } from 'redux';
import test from "./test";
import careers from "./careers";

export default combineReducers({
    test: test,
    careers:careers
});
