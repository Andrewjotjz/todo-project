import { v4 as uuid } from 'uuid';

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [...state, {name: action.todo.task, category: action.todo.category, id: uuid()}]
        case "REMOVE_TODO":
            return state.filter((eachIndividual)=> eachIndividual.id !== action.object.id);
        default:
            return state;
    }
}
 
export default todoReducer;