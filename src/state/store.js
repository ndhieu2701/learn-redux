import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

// tao store: noi luu tru cac state cua app, cac state duoc tra ve trong reducers
export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
);
