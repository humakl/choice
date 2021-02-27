import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
  //воспринимает данный объект, как state
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sidebar: sidebarReducer
})

let store = createStore(reducers);

export default store;