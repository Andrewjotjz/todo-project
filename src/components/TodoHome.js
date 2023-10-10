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
        document.getElementById('taskField').focus();
    }

    const handleDelete = (todo) => {
        dispatch({type: 'REMOVE_TODO', object: todo})
    }

    return todos.length ? ( 
    <div className="todo-list">
        <ul>
            { 
            todos.map((todo) => {
                    return ( 
                    <li key={todo.id} onClick={() => {handleDelete(todo)}}>
                            <div className="name">{todo.name}</div>
                            <div className="category">{todo.category}</div>
                    </li> 
                    )
            })
            }
        </ul>
        <form onSubmit={handleSubmit}>
            <input type="text" id="taskField" placeholder="Task" value={task} onChange={(e) => setTask(e.target.value)} required/>
            <input type="text" id="categoryField" placeholder="Notes (optional)" value={category} onChange={(e) => setCategory(e.target.value)} />
            <input type="submit" value="Submit" />
        </form>
    </div>
    ) : (
        <div className="empty">Woohoooo! You have cleared all your task :)
        
        <form onSubmit={handleSubmit}>
            <input type="text" id="taskField" placeholder="Task" value={task} onChange={(e) => setTask(e.target.value)} required/>
            <input type="text" id="categoryField" placeholder="Notes (optional)" value={category} onChange={(e) => setCategory(e.target.value)} />
            <input type="submit" value="Submit" />
        </form>

        </div>
        
    );
}
 
export default TodoHome;