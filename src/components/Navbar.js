import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const Navbar = () => {

    const { todos } = useContext(TodoContext);

    return ( 
        <nav>
            <h1><strong>To-do List</strong></h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <p><strong>Number of To-dos: {todos.length}</strong></p>
        </nav>
     );
}
 
export default Navbar;