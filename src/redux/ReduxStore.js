import { applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import usersReducer from './UsersReducer';

const rootReducer = combineReducers({
    usersPage: usersReducer
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export default store;
