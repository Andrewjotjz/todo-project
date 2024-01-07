import Navbar from "./components/Navbar";
import TodoHome from "./components/TodoHome";
import ThemeContextProvider from "./contexts/ThemeContext";
import TodoContextProvider from "./contexts/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <ThemeContextProvider>
          <Navbar/>
          <TodoHome/>
        </ThemeContextProvider>
      </TodoContextProvider>
    </div>
  );
}

export default App;
