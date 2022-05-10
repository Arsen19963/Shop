import { combineReducers } from "redux";
import test from "./test";
import careers from "./careers";
import members from "./teamMembers";
import partners from "./partners";
import products from "./products";
import catalogue from "./catalogue";
import languages from "./languages";
import lang from "./lang";
import categories from "./categories";

export default combineReducers({
  test: test,
  careers: careers,
  members: members,
  products: products,
  partners: partners,
  catalogue: catalogue,
  languages: languages,
  lang: lang,
  categories: categories,
});
