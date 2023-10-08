import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoHome = () => {

    const { todos, dispatch } = useContext(TodoContext);

    const [ task, setTask ] = useState('');
    const [ category, setCategory ] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch({type: 'ADD_TODO', todo: {task, category}});
        setTask('');
        setCategory('');
    }

    return ( 
    <div className="todo-list">
        <ul>
            { 
            todos.map((todo) => {
                    return ( 
                    <li key={todo.id} >
                        <p><strong>{todo.name}</strong></p>
                        <p>{todo.category}</p>
                    </li> 
                    )
            })
            }
        </ul>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Task" value={task} onChange={(e) => setTask(e.target.value)} required/>
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
            <input type="submit" value="Submit" />
        </form>
    </div>
    );
}
 
export default TodoHome;