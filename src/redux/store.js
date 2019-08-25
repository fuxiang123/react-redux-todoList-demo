import { applyMiddleware, createStore } from "redux";
import reducer from "./TodoList/reducer";
import logger from "redux-logger";

const middleWares = applyMiddleware(logger);

const store = createStore(reducer, middleWares);

export default store;
// redux + react-redux的数据流向
// 1.通过connet把redux的state和action映射为组件的props
// 2.在组件中直接使用state.调用action方法发出一个action
// 3.发出action后，进入reducer，再通过action.type进入对应的case
// 4.reducer 返回一个对象,替换原有的state
