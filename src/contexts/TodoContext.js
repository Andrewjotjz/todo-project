import { createContext, useReducer } from "react";
import todoReducer from "../reducers/todoReducer";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {

    // state of todos, which is an array of todo_object with 3 properties: name, category, id
    const [ todos,  dispatch ] = useReducer(todoReducer, []);

    return ( 
        <TodoContext.Provider value={{todos, dispatch}}>
            {props.children}
        </TodoContext.Provider>
     );
}
 
export default TodoContextProvider;