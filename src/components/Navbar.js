import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {

    const { todos } = useContext(TodoContext);
    const {isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);

    const theme =  isLightTheme ? light : dark;

    return ( 
        <nav style={{background: theme.bg, color: theme.syntax}}>
            <h1><strong>To-do List</strong></h1>
            <div className="toggle">
                <FontAwesomeIcon icon={faCloudMoon} onClick={toggleTheme}/>
            </div>
            <p><strong>Number of To-dos: {todos.length}</strong></p>
        </nav>
     );
}
 
export default Navbar;